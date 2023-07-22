function distanceFromHqInBlocks(block) {
    let hqLocation = 42;
    return Math.abs(block - hqLocation);
}
function distanceFromHqInFeet(blockNumber) {
    const blocks = distanceFromHqInBlocks(blockNumber);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
}
function distanceTravelledInFeet(startBlock, endBlock) {
    const distanceInBlocks = Math.abs(startBlock - endBlock);
    const feetPerBlock = 264;
    return distanceInBlocks * feetPerBlock;
}
function calculatesFarePrice(start, destination) {
    const distance = Math.abs(destination - start);
    const distanceInFeet = distance * 264  

    if (distanceInFeet <= 400) {
        return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}
