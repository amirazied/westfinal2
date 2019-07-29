
from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/conversion/')
def conversion():
    return render_template('conversion-tables.html')

@app.route('/chart/')
def chart():
    return render_template('reductionchart.html')

if __name__ == '__main__':
    app.run(debug=True)
