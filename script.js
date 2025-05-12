
document.addEventListener('DOMContentLoaded', function() {

	const menubarItems = document.querySelectorAll('.menubar-item');
	const projectOpens = document.querySelectorAll('.project-open');
	const contentContainer = document.querySelector('.content-container');


function showProject(projectNumber) {
	projectOpens.forEach(panel => {
		panel.classList.remove('active');
	});

	menubarItems.forEach(item => {
		item.classList.remove('active')
	});

	const targetPanel = document.querySelector(`.project-${projectNumber}`);
	const targetMenuItem = document.querySelector(`.item-${projectNumber}`);

	if (targetPanel && targetMenuItem) {
		targetPanel.classList.add('active');
		targetMenuItem.classList.add('active');

		contentContainer.style.visibility = 'hidden';
	} else {
		contentContainer.style.visibility = 'visible';
	}
}

menubarItems.forEach(item => {
	item.addEventListener('click', function() {

		const classList = Array.from(this.classList);
		const projectClass = classList.find(cls => cls.startsWith('item-'));
		const projectNumber = projectClass ? projectClass.split('-')[1] : null;
		
		if (this.classList.contains('active')) {
			menubarItems.forEach(item => {
				item.classList.remove('active');
			});
			
			projectOpens.forEach(panel => {
				panel.classList.remove('active');
			});
			
			contentContainer.style.visibility = 'visible';
		} else if (projectNumber) {
			showProject(projectNumber);
		}
	});
});
});