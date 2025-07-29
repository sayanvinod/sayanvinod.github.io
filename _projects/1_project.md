---
layout: page
title: Myopia Detection
description: Detecting signs of myopia using fundus photos
img: assets/img/realmyopiaeye.jpg
importance: 1
category: work
---

Hello!

This is my project that analyzes fundus photos and returns an output classifying the eye to either have myopia or not have myopia. The model uses computer vision techniques to analyze the features and classify the photo.

INPUT VIDEO OF YOU SHOWCASING THE MODEL HERE.
Caption: Showcase of Model

The dataset I decided to train my model with was a kaggle dataset that provided 47,000 fundus photos of patient eyes with myopia and without myopia.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading='eager' path='assets/img/myopia1.png' title='myopia eye' class='img-fluid rounded z-depth-1' %}
    </div>
    <div class="caption">
        Myopia Eye
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading='eager' path='assets/img/normal1.png' title='normal eye' class='img-fluid rounded z-depth-1' %}
    </div>
    <div class="caption">
        Normal Eye
    </div>
</div>

I decided to use a YoloV8 model for my classification as it provided the most optimal and practical result. By using this model, I was able to


