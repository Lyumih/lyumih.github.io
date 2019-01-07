let damage = 0;
let skill_damage = 5;
let level = 1;

let exp = 0;
let exp_max = 5;
let exp_step = 5;
let enemy_level = 1;
let enemy_health = 10;
let enemy_health_max = 10;


function battle() {
    calculate_damage();
    use_skill();
    hit_enemy();

    calculate_damage();
    print_skill();
    print_battle_log();

    enemy_die();
    print_enemy();
}

function hit_enemy() {
    enemy_health -= damage;
}

function enemy_die() {
    if (enemy_health < 0) {
        enemy_level++;
        enemy_health_max = 10 *enemy_level;
        enemy_health = enemy_health_max;
    }
}

function calculate_damage() {
    damage = skill_damage + 2 * level;
}

function use_skill() {
    exp++;
    if (exp > exp_max) {
        exp = 0;
        level++;
        exp_max = level * exp_step;
    }
}

function print_skill() {
    let el_level = document.getElementById('level');
    el_level.innerHTML = `Уровень: ${level}`

    let el_exp = document.getElementById('exp');
    el_exp.innerHTML = `Опыт: ${exp}/${exp_max}`

    let el_description = document.getElementById('description');
    el_description.innerHTML = `Описание: вы наносите ${damage} урона ударом кулака`
}

function print_enemy() {
    let enemy = document.getElementById('enemy_bar');
    enemy.innerHTML = `<i>Ур.${enemy_level} HP: ${enemy_health} из ${enemy_health_max}</i>`
}

function print_battle_log() {
    let battle_log = document.getElementById('battle_log');
    battle_log.innerText = `Вы наносите ${damage} урона кулаком. Здоровье врага ${enemy_health}`
}