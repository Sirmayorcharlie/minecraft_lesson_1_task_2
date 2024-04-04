player.onChat("3D", function () {
    for (let index = 0; index < 3; index++) {
        while (true) {
            if (agent.inspect(AgentInspection.Block, FORWARD) == AIR) {
                agent.move(FORWARD, 1)
            } else if (agent.inspect(AgentInspection.Block, FORWARD) == GOLD_BLOCK) {
                agent.destroy(FORWARD)
                agent.collectAll()
            } else {
                agent.turn(LEFT_TURN)
            }
        }
    }
})
