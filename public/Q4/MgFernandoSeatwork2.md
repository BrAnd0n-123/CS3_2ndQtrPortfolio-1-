# Seatwork #2 - Getting to know CSS Position and z-index.
### This seatwork will ask you to implement the different CSS position on a given code.
### short link to this .md file is: https://bit.ly/4c61P9K
#### Resources (also found in Khub week 5)
- [4 Minute Youtube Video on CSS Position](https://www.youtube.com/watch?v=YEmdHbQBCSQ)
- [CSS Position Tutorial](https://roycan.github.io/CssPositioningZIndexLab/)

### Instructions: 
1. This is individual submission in khub, but you can work with a partner.  When you submit in khub please place both your names in the submission bin.
2. Guided Activity (30 minutes), please follow what is being required.  

    - Make a copy of this .md file to your Q4 repository and name it as **SectionLNseatwork2.md** example **9LiCruzSeatwork2.md**. Place it in your q4 repository vscode local computer. Committing frequently to your Github repository.  
    - Copy the code below and paste it inside a new file (name it as SectionLNseatwork2.html). Place this file in the same location where the .md file is saved. 
    - Change the content values of the meta tags to your names for author/s and the date today for revised.
    - Please do the following tasks that will ask you to reposition HTML elements then answer the guided question for each task on the .md file. Commit changes to the .md file and to the .html file as well.
    **- This seatwork is worth 20pts and should be submitted by the end of the period** The link to [KHub submission bin](https://khub.mc.pshs.edu.ph/mod/assign/view.php?id=15481).
      - Submit the links to your .md file and .html file.

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="author" content="<your names>" />
  <meta name="revised" content="<date today>" />
  <style>
    body { font-family: Arial, sans-serif; }
    .header, .footer {
      background: lightblue;
      padding: 10px;
    }
    .footer {
       opacity: 0.5;
    }
    .sidebar {
      background: lightgreen;
      width: 150px;
      height: 200px;
    }
    .content {
      background: lightyellow;
      width: 300px;
      height: 200px;
    }    
  </style>
</head>
<body>
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Main Content</div>
  <div class="footer">Footer</div>
</body>
</html>
```
### Step 1 (Static vs Relative):

- Add in css ```position: relative; top: 20px; left: 20px;``` to .sidebar.

- Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right.

Based on the top, left, bottom and right values, it would shift it based on the measurement chosen (in px, vh, vw, etc.). Position must be relative to move it.

### Step 2 (Fixed):

- Add in css ```position: fixed; bottom: 0; width: 100%;``` to .footer.

- Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?

No matter how much the page is scrolled, the footer will always be fixed to its assigned position, wherein using "bottom 0;" immediately places it to the bottom. 

### Step 3 (Absolute):

- Add in css ```position: absolute; top: 66px; left: 200px;``` to .content.

- Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?

Abosolute allows the element to be set in a direction based on the closest and most recent posititioned ancestor, which is the sidebar. It behaves similarly to a flex box and flows right beside it, with the benefit of always flowing into the side of the nearests ancestor that does not have a static position

### Step 4 : (Absolute)

- Add in html ```<div class="notice">Notice!</div>``` and include the css below:

```css
.notice {
    position: absolute;
    top: 60px;
    left: 400px;
    background: orange;
    padding: 10px;
    z-index: 2;
}
```

- Give .content a z-index: 1.

- Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?

z-index prioritizes values that are greater than and fixes the stacking of elements. When .content is 1 and notice is 2 z-index values, .content stacks on top of notice. If it's the other way around, .notice is hidden behind everything.

- Challenge: 
    * What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content).

    use position fixed, top 0 and right 0

    * Try to change the position of .content to relative then to fixed. What do you observed each time?

    relative would move downward while fixed would be moved to the side of sidebar. 

    * What do you observe on about the effect of z-index on .notice and .content boxes?

    z-index would move it based on it stacking on the notice and content boxes.however, if .notice is too far and is top and right = 0, it will not stack and zindex essentialyl renders useless

3. Please answer the following reflection questions (15 minutes)

    a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)? 

    Static is the default position and leaves the element in its current position. Relative allows it to be moved based on a different top, bottom, left and right positioning. Absolute bases its current position on the current CSS positioned element that is not static, and moves it based on its location rather than the page. Fixed allows it to stay in its current position, regardless of how large or smnall the page is.

    b. How does absolute positioning depend on its parent element?

    It moves in a certain direction based on its parent elemenjt rather than the page (meaning if it moves right: 100px;, it will move 100px from the parent element)

    c. How do you differentiate sticky from fixed (you can research on sticky)?
    unlike fixed which never moves from the page, it can have relative values unless it is moved by scrolling down -- then it would turn fixed.

    d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.
    I would likely use important information with fixed or sticky to always display them, less relevant information using relative or absolute to make the design more appealing, and almost useless div elements with static.
