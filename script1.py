import numpy as np
import PIL
import pytesseract
import pandas as pd
import pkg_resources
import matplotlib.pyplot as plt
import cv2
import io
import json
import sys
import csv


img = cv2.imread('/Users/sriniwaspaliwal/Downloads/ocr/sample2.png')
realimg = cv2.cvtColor(img,cv2.COLOR_BGR2RGB)
gray = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
th, threshold = cv2.threshold(gray,127,255,cv2.THRESH_TRUNC)
result = pytesseract.image_to_string((threshold),lang="eng")
temp=result.split("\n")

id=""
for x in range(16, len(temp[1])):
    id=id+temp[1][x]

name=""
for x in range(5, len(temp[8])):
    name+=temp[8][x]

Lastname=""
for x in range(9, len(temp[9])):
    Lastname+=temp[9][x]

DOB=""
for x in range(14, len(temp[12])):
    DOB+=temp[12][x]

data = {}
data['ID'] = id
data['Name'] = name
data['Lastname'] = Lastname
data['Date Of Birth'] = DOB

csv_filename = 'output.csv'

with open(csv_filename, 'w', newline='') as csv_file:
    csv_writer = csv.writer(csv_file)
    
    #csv_writer.writerow(['Field', 'Value'])
    for field, value in data.items():
        csv_writer.writerow([field, value])


print('Results are saved in CSV file in your folder.'+sys.argv[1])
