
document.addEventListener("DOMContentLoaded", function() {
 
    function createTiles() {
        const container = document.querySelector('.container');
        for (let i = 0; i < 16; i++) {
            const tile = document.createElement('div');
            tile.classList.add('box');
            tile.id = `tile-${i + 1}`;

            const nameDiv = document.createElement('div');
            nameDiv.id = `name-${i + 1}`;
            nameDiv.textContent = 'Sample Name';
            tile.appendChild(nameDiv);

            const startBtn = document.createElement('button');
            startBtn.classList.add('start-btn');
            startBtn.textContent = 'Start';
            startBtn.addEventListener('click', function() {
                startProcess(i + 2);
            });
            tile.appendChild(startBtn);

            const whiteBtn = document.createElement('button');
            whiteBtn.classList.add('white-btn');
            whiteBtn.textContent = 'White';
            tile.appendChild(whiteBtn);

            container.appendChild(tile);
        }
    }
    createTiles();

    
    function startProcess(tileId) {
        const nameEl = document.getElementById(`name-${tileId}`);
        const boxEl = document.getElementById(`tile-${tileId}`);
        nameEl.innerText = 'Bulandsheher 3923';
        boxEl.innerHTML = `
            <div id="timer-${tileId}">00:10</div>
            <button class="no-btn" onclick="stopProcess(${tileId})">Stop?</button>
        `;
        let timeLeft = 10;
        const timer = setInterval(() => {
            timeLeft--;
            document.getElementById(`timer-${tileId}`).innerText = `00:${timeLeft < 10 ? '0' : ''}${timeLeft}`;
            if (timeLeft <= 0) {
                clearInterval(timer);
                document.getElementById(`timer-${tileId}`).innerText = '04:00';
            }
        }, 1000);
        boxEl.dataset.timer = timer; 

        setTimeout(() => {
            const currentEl = document.getElementById(`tile-${tileId}`);
            if (!currentEl.querySelector('.yes-btn') && !currentEl.querySelector('.no-btn')) {
                currentEl.innerHTML = `
                    <div>Bulandsheher 3923</div>
                    <div id="timer-${tileId}">04:00</div>
                `;
                const nameEl = document.getElementById(`name-${tileId}`);
                nameEl.innerText = 'Sample Name 4';
            }
        }, 10000);

      
        boxEl.addEventListener('click', function() {
            clearInterval(timer); 
            resetTile(tileId);
            const nameEl = document.getElementById(`name-${tileId}`);
            nameEl.innerText = 'Sample Name 3';
        });
    }


    function stopProcess(tileId) {
        const boxEl = document.getElementById(`tile-${tileId}`);
        clearInterval(boxEl.dataset.timer); 
        boxEl.innerHTML = `
            <div>Stop?</div>
            <button class="yes-btn" onclick="resetTile(${tileId})">Yes</button>
            <button class="no-btn" onclick="continueProcess(${tileId})">No</button>
        `;
    }

    function resetTile(tileId) {
        const boxEl = document.getElementById(`tile-${tileId}`);
        boxEl.innerHTML = `
            <div id="name-${tileId}">Sample Name</div>
            <button class="start-btn" onclick="startProcess(${tileId})">Start</button>
            <button class="white-btn">White</button>
        `;
        clearInterval(boxEl.dataset.timer); 
    }

   
    function continueProcess(tileId) {
        const boxEl = document.getElementById(`tile-${tileId}`);
        boxEl.innerHTML = `
            <div>Bulandsheher 3923</div>
            <div id="timer-${tileId}">04:00</div>
        `;
        const nameEl = document.getElementById(`name-${tileId}`);
        nameEl.innerText = 'Sample Name 4';
    }
});
