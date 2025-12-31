Twitter Fake News Project
--------------------------

This project aims to classify Tweets as either fake news or real news based on a dataset containing information about both tweets and their users. 
The classification is done using machine learning models built with Python and scikit-learn.

Project Overview
- Binary Classification problem (Fake vs. Real)
- Based on a labeled dataset of tweets (1 = fake, 0 = real)
- Is trained on multiple factors: Username, User's tweets per day, Average retweets per friend, Tweet's retweet count, and Number of punctuations in the tweet.
- Compares performance of two classifiers:
  - Logistic Regression
  - Random Forest
- Evaluates using accuracy, precision, recall, F1-score, and ROC curve

Files Included
- Complete_Project.ipynb - First block loads and cleans the dataset and 	outputs the processed_data.csv file, second block builds and 	evaluates the ML models
- Complete_Project.html - Shows the code and output directly
- data_set_tweet_user_features.csv – raw dataset containing information 	about tweets and their user
- README.txt – this file

How to Run
1. Install dependencies:
   pip install pandas scikit-learn matplotlib

2. Run Complete_Project (Should take around 2 - 3 minutes)

3. View the results
   ROC curve will pop up as a plot
   Evaluation metrics will show in the terminal.

Results
Both models performed extremely well. The Logistic Regression showed an accuracy of 98% and the Random Forest an accuracy of 96%. 
From the ROC Curve pop-up we can see an AUC score of 1.00 which indicate a perfect or almost perfect discriminative ability. 
The ROC curves for both models are close to the top-left corner, meaning they are performing excellently. 
The models are therefore extremly accurate in detecting fake vs real news, making very few false positive or false negatives.

One reason for the models to perform so well could be our chosen features. The specific chosen features could be highly predictive. 
For example, the 'tweet__nr_of_punctuations' could make it easier for the model to predict, if a tweet uses proper language it is probably real news.

Additionally, we can see the dataset's label distrubution given from the terminal:
tweet__fake
0    40459
1    10126
This is not a very balanced dataset but it is not terrible either. It is around 80/20 so we decided to use 'class_weight='balanced''
for both models, meaning both models compensates during training to avoid bias toward the majority class.
Although the results and ROC curves are impressive, it could be a sign of slight overfitting, especially given the perfect AUC.
But overall the results suggests that even relatively simple models can achieve high accuracy when provided with meaningful data.

Libraries Used
- pandas
- scikit-learn
- matplotlib

Authors
Created by Clara Lunak and Hanna Nilsson as part of a machine learning project for academic purposes.