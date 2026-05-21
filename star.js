class Star
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
        this.radius = random(10, 20);
        this.sharpness = 0.3;
        this.a = random(5, 20);

        this.dy = random(1, 3);

        this.c = colors[floor(random(colors.length))];
    }

    display()
    {
        push();
        translate(this.x, this.y);
        beginShape();
        fill(this.c);
        for(let phi = 0; phi < 360; phi++)
        {
            let r = this.radius * pow(abs(cos(2 * phi)), this.sharpness);
            let p1 = this.a * pow(cos(phi), 3);
            let p2 = this.a * pow(sin(phi), 3);
            vertex(p1, p2);
        }
        endShape(CLOSE);
        pop();
    }

    fall()
    {
        this.y += this.dy;
    }
}