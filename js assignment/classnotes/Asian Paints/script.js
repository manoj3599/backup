function applyColor(){
    const wallId = document.getElementById('wall_id').value;
    const wallColor = document.getElementById('wall_color').value;
    const wall =document.getElementById(wallId);
    wall.style['background-color'] = wallColor;

}

function resetWalls() {
    for(let i=1;i<=10;i++){
        const wall =document.getElementById(i)
        wall.style['background-color'] = 'transparent'
    }

}