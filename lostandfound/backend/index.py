#!/usr/bin/env python3

from flask import Flask, request
import json, time

app = Flask(__name__)

with open('mock-data.json') as f:
 data = json.load(f)

@app.route('/time') # test
def get_current_time():
    return {'time': time.time()}

@app.route('/get', methods=['GET'])
def get():
 return json.dumps(data)

@app.route('/post', methods=['POST'])
def post():
 new_post = request.json
 item = new_post
 item['id'] = len(data) + 1
 data.append(item)
 with open('mock-data.json', 'w') as f:
  json.dump(data, f)
 return 'success'

if __name__ == '__main__':
    app.run(debug=True)