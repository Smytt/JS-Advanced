function solve(worker) {

    if (worker.handsShaking) {
        worker.bloodAlcoholLevel += worker.weight * worker.experience * 0.1
        worker.handsShaking = false;
    }
    return worker
}