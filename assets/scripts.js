  // Toggle sidebar
  document.getElementById('toggleSidebar').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('collapsed');
    if (document.getElementById('sidebar').classList.contains('collapsed')) {
        document.querySelector('.li-li').style.display = 'none';
        document.querySelector('.org-logo-none').style.display = 'block';
    } else {
        document.querySelector('.li-li').style.display = 'block';
        document.querySelector('.org-logo-none').style.display = 'none';
    }


});

document.addEventListener('DOMContentLoaded', function() {
    // Chart initialization
    const ctx = document.getElementById('chart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado', 'Domingo'],
            datasets: [
                {
                    label: 'Tarefas Planeadas',
                    data: [65, 45, 12, 36, 68, 20, 85],
                    backgroundColor: '#0d6efd',
                    borderRadius: 5
                },
                {
                    label: 'Tarefas Completadas',
                    data: [25, 55, 30, 60, 35, 8, 78],
                    backgroundColor: '#ffc75f',
                    borderRadius: 5
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    align: 'end',
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        drawBorder: false
                    },
                    ticks: {
                        font: {
                            size: 12
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 12
                        }
                    }
                }
            }
        }
    });

    const config = {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Chart.js Doughnut Chart'
                }
            }
        },
    };

    // Responsive sidebar toggle
    const mobileScreenSize = window.matchMedia('(max-width: 992px)');
    function handleScreenSizeChange(e) {
        if (e.matches) {
            document.querySelectorAll('.sidebar-item span').forEach(span => {
                span.style.display = 'none';
            });
            document.querySelector('.logo-text').style.display = 'none';
            document.querySelector('.li-li').style.display = 'none';
            document.querySelectorAll('.accordion-collapse').forEach(el => {
                el.style.display = 'none';
            });
        } else {
            document.querySelectorAll('.sidebar-item span').forEach(span => {
                span.style.display = 'inline';
            });
            document.querySelector('.logo-text').style.display = 'block';
            document.querySelector('.li-li').style.display = 'block';
            document.querySelectorAll('.accordion-collapse').forEach(el => {
                el.style.display = '';
            });
        }
    }
    mobileScreenSize.addListener(handleScreenSizeChange);
    handleScreenSizeChange(mobileScreenSize);
});
