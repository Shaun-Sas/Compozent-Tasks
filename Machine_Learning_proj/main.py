from flask import Flask, render_template, request
import pickle
import numpy as np

app = Flask(__name__)


model_filename = 'linear_model.sav'
scaler_filename = 'scaler.sav'
model = pickle.load(open(model_filename, 'rb'))
scaler = pickle.load(open(scaler_filename, 'rb'))

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
    
        rd_spend = float(request.form['rd_spend'])
        admin = float(request.form['admin'])
        marketing = float(request.form['marketing'])


        features = np.array([[rd_spend, admin, marketing]])
        print(features)

       
        scaled_features = scaler.transform(features)
        print(scaled_features)
        print(scaled_features.shape)

       
        predicted_profit = model.predict(scaled_features)

        
        return render_template('index.html', prediction=f"Predicted Profit: ${predicted_profit.item():.2f}")
    except Exception as e:
        return render_template('index.html', error=f"Error: {str(e)}")

if __name__ == '__main__':
    app.run(debug=True)
