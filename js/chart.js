const trafficCanvas = document.getElementById("traffic-chart");

let monthlyTraffic = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
    data: [800, 1200, 1050, 1800, 1700, 1000, 2000, 1500, 2250, 1500, 2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
    };

let weeklyTraffic = {
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [{
            data:  [500, 700, 800, 1000, 1550, 1800, 1800],
            backgroundColor: 'rgba(116, 119, 191, .3)',
            borderWidth: 1,
        }]
    };


let dailyTraffic = {
    labels: ["02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "13:00",
        "14:00", "16:00", "18:00", "20:00", "24:00", "02:00"],
    datasets: [{
    data:  [ 500, 550, 700, 1600, 1100, 1500, 1100, 1000, 1600, 500,
            300, 200, 100],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
            }]
    };
    
let hourlyTraffic = {
    labels: ["01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00",
                "08:00", "09:00", "10:00", "11:00", "12:00"],
    datasets: [{
    data:  [1100, 1000, 1300, 1500, 2000, 1500, 1000, 800, 500,
                    300, 200, 100],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
                    }]
            };
      
let trafficOptions = {
        backgroundColor: 'rgba(112, 104, 201, .5)',
        fill: true,
        aspectRatio: 2.5,
        animation: {
        duration: 0
        },
        scales: {
        y: {
        beginAtZero: true
        }
        },
        
        legend: {
        display: false
        }
        };

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: monthlyTraffic,
    options: trafficOptions
});


const trafficChange = document.querySelector(".traffic-nav");


trafficChange.addEventListener('click', e => {
        const el = e.target;
        if (el.tagName === 'LI' && (!el.classList.contains('active'))) {
            const tabs = trafficChange.children;
            for (let i = 0; i < tabs.length; i++) {
                let tab = tabs[i];
                if (tab.classList.contains('active')) {
                    tab.classList.remove('active');
                }
            }
            el.classList.add('active');
        }
        if (el.textContent === 'Hourly') { 
            trafficChart.data = hourlyTraffic;
            trafficChart.update(); }
        if (el.textContent === 'Daily') { 
            trafficChart.data = dailyTraffic;
            trafficChart.update();}
        if (el.textContent === 'Weekly') { 
            trafficChart.data = weeklyTraffic;
            trafficChart.update();
        }
        if (el.textContent === 'Monthly') { 
            trafficChart.data = monthlyTraffic;
            trafficChart.update();
        }
    })


// daily bar graph

const dailyCanvas = document.getElementById("daily-chart");

let dailyData = {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
            }]
        };

const dailyOptions = {
        scales: {
            y: {
                beginAtZero: true
            }
        },
       
            legend: {
                display: false
            }

    };

    let dailyChart = new Chart(dailyCanvas, {
        type: 'bar',
        data: dailyData,
        options: dailyOptions
        });

const mobileCanvas = document.getElementById("mobile-chart");

const mobileData = {
        labels: ["Desktop", "Tablet", "Phones"],
        datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
        '#7477BF',
        '#78CF82',
        '#51B6C8'
         ]
        }]
        };

const mobileOptions = {
        aspectRatio: 1.9,
        legend: {
        position: 'right',
        labels: {
        boxWidth: 20,
        fontStyle: 'bold'
        }
        }
        };

let mobileChart = new Chart(mobileCanvas, {
        type: 'doughnut',
        data: mobileData,
        options: mobileOptions
        });