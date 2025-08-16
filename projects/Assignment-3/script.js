

        let msg = document.getElementById("heading")
        let redBox = document.getElementById("redColor");
        let blueBox = document.getElementById("blueColor");
        let greenBox = document.getElementById("greenColor");
        let yellowBox = document.getElementById("yellowColor");
        let btn = document.getElementById("actionBtn");

        function changeValue() {
            let value = input.value;
            msg.innerHTML = "Hello, " + value;
        }
        // btn.addEventListener('click', changeValue);

        function red() {
            redBox.style.backgroundColor = 'red';
            redBox.style.color = 'white';
            redBox.style.borderColor = 'red';
        }

        function blue() {
            blueBox.style.backgroundColor = 'blue';
            blueBox.style.color = 'white';
            blueBox.style.borderColor = 'blue';
        }

        function green() {
            greenBox.style.backgroundColor = 'green';
            greenBox.style.color = 'white';
            greenBox.style.borderColor = 'green';
        }

        function yellow() {
            yellowBox.style.backgroundColor = 'yellow';
            yellowBox.style.borderColor = 'yellow';
        }




