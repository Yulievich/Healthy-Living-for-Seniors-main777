// Создаем canvas
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

// Устанавливаем размер canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Определяем массив точек
var points = [];

for (var i = 0; i < 50; i++) {
    points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        radius: Math.random() * 2,
        color: '#fff'
    });
}

// Функция, которая будет вызываться для анимации
function animate() {
    // Очищаем canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Обрабатываем каждую точку
    for (var i = 0; i < points.length; i++) {
        var point = points[i];

        // Изменяем позицию точки
        point.x += point.vx;
        point.y += point.vy;

        // Если точка достигла края canvas, отражаем ее
        if (point.x < 0 || point.x > canvas.width) {
            point.vx *= -1;
        }
        if (point.y < 0 || point.y > canvas.height) {
            point.vy *= -1;
        }

        // Рисуем точку
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        ctx.fillStyle = point.color;
        ctx.fill();
    }

    // Вызываем функцию анимации снова через 60 миллисекунд
    requestAnimationFrame(animate);
}

// Запускаем анимацию
animate();