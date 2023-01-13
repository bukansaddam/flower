onload = () =>{
        document.body.classList.remove("container")

};

function play() {
	const page1 = document.getElementById("page1")
	const page2 = document.getElementById("page2")
	const audio = document.getElementById("my_audio")
	page1.style.display = "none"
	page2.style.display = "flex"
	audio.play()

}
