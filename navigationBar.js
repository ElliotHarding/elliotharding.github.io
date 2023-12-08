class NavigationBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <link rel="stylesheet" href="css.css">
	  
	  <div class="menu">

		<img class="bckgrdImage" src="Images/bkgrd.png">
	
		<div class="question">
			Why is it that this question is so rare?
		</div>

		<div class="menuItems">
			<div class="menuItem" onclick="navigationBar('index.html');"><u>Home</u></div>
			<div class="menuItem" onclick="navigationBar('Releases.html');"><u>Software Releases</u></div>
			<div class="menuItem" onclick="navigationBar('EHco.html');"><u>Mobile Releases</u></div>
		</div>
	
		<script>
			function navigationBar(page)
			{
				window.location.href = page;
			}
		</script>

	</div>
    `;
  }
  
   fuckuou() {
    alert('hello');
  }
}

