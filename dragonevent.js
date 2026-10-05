function onCreated(node) {
  let info = document.createElement('p');
  info.innerHTML = "Yippee! Now <a href='https://dragonvale.fandom.com/wiki/Yellow_Tree'>go here,</a> and click your new bookmark while on that page :-)";
  info.style='padding:10px; text-align:center;';
  document.body.appendChild(info);
}

let addBookmark = browser.bookmarks.create({
  title: `🐉 Dragonvale Event Stuff!`,
  url: `javascript:( function(){ let myscript = document.createElement('script'); myscript.type='text/javascript'; myscript.src='https://gist.github.com/Gryphills/ebddd29f43c682bf1cd0e20102910720.js'; document.body.appendChild(myscript); setTimeout( () => {eval(document.getElementById('file-dveventplannerupdate-js').innerText.split('view raw')[0]);}, 500) setTimeout( () => {eval(document.getElementById('file-dveventplannerupdate-js').innerText.split('view raw')[0]);}, 1000); setTimeout( () => {eval(document.getElementById('file-dveventplannerupdate-js').innerText.split('view raw')[0]);}, 2000); setTimeout( () => {eval(document.getElementById('file-dveventplannerupdate-js').innerText.split('view raw')[0]);}, 3000); })();`,
});

createBookmark.then(onCreated);
