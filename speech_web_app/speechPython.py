from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def process():
    data = request.json
    text = data['text']

    # Here you would implement logic to integrate with Excel
    # For demonstration, let's just print the received text
    print('Received text:', text)

    return jsonify({'message': 'Text received and processed successfully'})

if __name__ == '__main__':
    app.run(debug=True)
