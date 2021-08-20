<h1 align="center">
  Algorithmic Art Studies
</h1>

<h4 align="center">An exploration of algorithmic artwork</h4>

<p align="center">
  <a href="#key-features">Folder Contents</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#download">Credits</a> •
  <a href="#credits">Further reading on algorithmic art</a> •
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/kutal10/Algorithmic-Art-Studies/main/Images/Heading%20Image.png" width =800/>
</p>  
  
## Folder Contents

1. **Circles**: Studies of how different structures can be generated using only circles

![screenshot](https://github.com/kutal10/Algorithmic-Art-Studies/blob/main/Images/1.%20Circles.jpg?raw=true)
  
  
2. **Flow Fields**: Studies of an algorithmic art staple; essentially grids with angular properties

![screenshot](https://github.com/kutal10/Algorithmic-Art-Studies/blob/main/Images/2.%20Flow%20Fields.jpg?raw=true)
  
  
3. **Replicating Brushstrokes**: Replicating natural brush strokes on paper

![screenshot](https://github.com/kutal10/Algorithmic-Art-Studies/blob/main/Images/3.%20Replicating%20Brushstrokes.jpg?raw=true)
  
  
4. **Replicating Coolors.io**: Recreating a micro-version of one of the most popular color scheme generators

![screenshot](https://github.com/kutal10/Algorithmic-Art-Studies/blob/main/Images/4.%20Replicating%20Coolors.io.jpg?raw=true)
  
  
5. **Replicating Jackson Pollock**: A study of how to algorithmically generate Jackson Pollock's famous splatter paintings

![screenshot](https://github.com/kutal10/Algorithmic-Art-Studies/blob/main/Images/5.%20Replicating%20Jackson%20Pollock.jpg?raw=true)
  
  
6. **Shader Study**: Using GLSL shaders to output algorithmic art with a unique overlay texture

![screenshot](https://github.com/kutal10/Algorithmic-Art-Studies/blob/main/Images/6.%20Shader%20Study.jpg?raw=true)
  
  
7. **Clojure Test**: Using the Quil Clojure library to create generative art in a functional programming paradigm

![screenshot](https://github.com/kutal10/Algorithmic-Art-Studies/blob/main/Images/7.%20Clojure.jpg?raw=true)
  
  
8. **Testing Example**: Using Jest to build a unit tested algorithmic art piece

![screenshot](https://github.com/kutal10/Algorithmic-Art-Studies/blob/main/Images/8.%20Testing.jpg?raw=true)
  
  

## How To Use

To clone and run all these applications, you'll need [Git](https://git-scm.com). From your command line:
### For all artwork except **Clojure Test** and **Testing Example**  

```bash
# Clone this repository
$ git clone https://github.com/kutal10/Algorithmic-Art-Studies

# Go into the repository of your choice
$ cd "Replicating Coolors.io"

# Open the index.html file in your browser by double clicking on it in your file manager 
```

*Notes*: 

1. If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

2. You can also use http://localhost:{your-port-num}/empty-example if you are using a local server. An easy way to do this in vscode is to use [Vscode Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
### For **Testing Example**  

To clone and run the Testing Example, you'll need [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.

```bash
# Clone this repository
$ git clone https://github.com/kutal10/Algorithmic-Art-Studies

# Go into the testing repository
$ cd "Testing Example"

# Install Dependencies
$ npm install

# To run the tests, make sure that the 'test' script in your package.json file is using "jest"
# Then simply run the test command
$ npm test
```
  
  
### For **Clojure Test**  

To clone and run the Clojure Test, you'll need [Leiningen](https://leiningen.org/) installed
  
```bash
# Clone this repository
$ git clone https://github.com/kutal10/Algorithmic-Art-Studies

# Go into the main repository
$ cd "Clojure Test\quil1"

# Run `lein figwheel` in your terminal. Wait for a while until you see `Successfully compiled "resources/public/js/main.js"`. 
$ lein figwheel
# Open http://localhost:3449 in your browser.
```

## Credits

The files in this study cover the following open source packages:

- [P5js](https://p5js.org/)
- [Node.js](https://nodejs.org/)
- [Chroma JS](https://gka.github.io/chroma.js/)
- [Quicksettings](https://github.com/bit101/quicksettings)
- [Jest](https://jestjs.io/)
- [Quil](https://github.com/quil/quil)

## Further reading on algorithmic art

[Artnome Generative Art Guide](https://www.artnome.com/news/2018/8/8/why-love-generative-art) - A great introduction to generative art  
[Kjetil Golid's Repository](https://github.com/kgolid) - The repository of Kjetil Golid, one of the most successful contemporary generative artists  
[Artnome Generative Art Guide](https://www.artnome.com/news/2018/8/8/why-love-generative-art) - A great introduction to generative art  
[Applying Visual Design Principles to Generative Art](https://www.dirtalleydesign.com/blogs/news/visual-design-and-generative-art) - Visual art techniques for generative art  
[Tyler Hobbs](https://tylerxhobbs.com/essays) - Some of the best essays to generative art on the internet by a generative art pioneer  
[A guide to Quil](https://landofquil.clojureverse.org/) - An introduction to using functional programming for generative art  
[Clotmag Generative Art](https://www.clotmag.com/tag/generative-art) - Generative art news and interviews  
[Generative Art Conference](http://www.generativeart.com/) - Generative art academic conferences  
