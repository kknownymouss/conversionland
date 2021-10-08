from flask import Flask, redirect, url_for, render_template, request, session, flash, send_from_directory
import pafy
import os
import random
import string
import requests
from PIL import Image


# Flask initialization
app = Flask(__name__)
app.secret_key = "x"
cwd = os.getcwd()
UPLOAD_FOLDER = f"{cwd}/dynamic/api_uploaded_files"
UPLOAD_FOLDER_PDF = f"{cwd}/dynamic/api_uploaded_files_pdf"
TEMP_IMAGES_FOLDER = f"{cwd}/static/temp_images"
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['UPLOAD_FOLDER_PDF'] = UPLOAD_FOLDER_PDF
app.config['TEMP_IMAGES_FOLDER'] = TEMP_IMAGES_FOLDER


# Home route for the web page
@app.route("/", methods=["POST", "GET"])
def home():
    # all of the web page interactions are in the js files
    if request.method == "POST":
        pass
    else:
        return render_template("home.html")


# PDF converter page
@app.route("/image_to_pdf", methods=["POST", "GET"])
def pdf_converter():
    if request.method == "POST":
        if "file" in request.files:
            # Try getting all the uploaded files, add them to a list, convert to a pdf, and save to the UPLOAD_FOLDER_PDF
            try:
                file = request.files.getlist("file")
                all_files = []
                random_name = "".join(random.choices(f"{string.ascii_lowercase}1234567890", k=5))
                for i in file:
                    t = Image.open(i)
                    all_files.append(t.convert("RGB"))
                all_files1 = all_files.copy()
                all_files1.pop(0)
                all_files[0].save(rf"{app.config['UPLOAD_FOLDER_PDF']}/{random_name}.pdf", save_all=True, append_images=all_files1)
                return render_template("pdf_converter.html", filename=random_name, download=True)
            # In case of error, flash an error message
            except OSError as o:
                print(o)
                flash("Please make sure that the selected files are images only.")
                return render_template("pdf_converter.html")
        else:
            # Redirect to a function that is responsible for the file download
            pdf_name = f"{request.form['filename']}.pdf"
            return redirect(url_for("download_pdf", path=pdf_name))
    else:
        return render_template("pdf_converter.html")


# Youtube converter page
@app.route("/youtube_to_mp3", methods=["POST", "GET"])
def youtube_converter():
    if request.method == "POST":
        # try converting the link to an audio and save to UPLOAD_FOLDER
        if 'video-link' in request.form:
            youtube_link = request.form['video-link']
            try:
                video = pafy.new(youtube_link)
                title = video.title
                session["title"] = title
                length = video.duration
                channel = video.author
                views = video.viewcount
                thumbnail = video.bigthumb
                response = requests.get(thumbnail)
                image_name = "".join(random.choices(f"{string.ascii_lowercase}1234567890", k=5))
                filename = "".join(random.choices(f"{string.ascii_lowercase}1234567890", k=5))
                file = open(rf"{app.config['TEMP_IMAGES_FOLDER']}/{image_name}.png", "wb")
                file.write(response.content)
                file.close()
                best_audio = video.getbestaudio(preftype="m4a")
                size = best_audio.get_filesize()
                size = f"{format(size/1024**2, '.2f')} MB"
                best_audio.download(filepath=rf"{app.config['UPLOAD_FOLDER']}/{filename}.m4a")
                return render_template("youtube_converter.html", title=title, image_name=image_name, length=length,
                                       channel=channel, views=views, size=size, filename=filename)
            # In case of error, flash an error message
            except ValueError:
                flash("Please make sure that the entered Youtube URL is valid.")
                return render_template("youtube_converter.html")
        else:
            # Redirect to a function that is responsible for downloading the file
            filename = f"{request.form['filename']}.m4a"
            return redirect(url_for('download_file',
                                    path=filename))
    else:
        return render_template("youtube_converter.html")


# Download the converted youtube file
@app.route("/youtube_to_mp3/<path>", methods=["POST", "GET"])
def download_file(path):
    return send_from_directory(app.config['UPLOAD_FOLDER'],
                               path, as_attachment=True)


# Download the converted pdf file
@app.route("/image_to_pdf/<path>", methods=["POST", "GET"])
def download_pdf(path):
    return send_from_directory(app.config['UPLOAD_FOLDER_PDF'],
                               path, as_attachment=True)


# Run the web page
if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
