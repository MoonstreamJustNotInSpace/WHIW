Bullet.update = b => {
    if(homingPower > 0.0001 && b.time >= homingDelay){
        target = Units.closestTarget(b.team, b.x, b.y, homingRange, e => (e.isGrounded() && collidesGround) || (e.isFlying() && collidesAir), t => collidesGround);
        if(target != null){
            b.vel.setAngle(Angles.moveToward(b.rotation(), b.angleTo(target), homingPower * Time.delta * 50.0));
        }
    }

    if(weaveMag > 0){
        b.vel.rotate(Mathf.sin(b.time + Mathf.PI * weaveScale/2.0, weaveScale, weaveMag * (Mathf.randomSeed(b.id, 0, 1) == 1 ? -1 : 1)) * Time.delta);
    }

    if(trailChance > 0){
        if(Mathf.chanceDelta(trailChance)){
            trailEffect.at(b.x, b.y, trailParam, trailColor);
        }
    }
}