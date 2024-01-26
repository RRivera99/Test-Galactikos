const matches = [
    { team: 'TeamA', goals: 3, yellow_cards: 1, shots: 2, image: 'https://us.123rf.com/450wm/woters/woters1604/woters160400040/54554660-f%C3%BAtbol-etiqueta-o-emblema-plantilla-con-la-bola-en-el-escudo.jpg' },
    { team: 'TeamB', goals: 5, yellow_cards: 2, shots: 7, image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbY3vj8K8e8AZET44W1XExaY0YIuicpo4pA3DVS17HoZsllsy5kcA2biCPcedTE4vS6mM&usqp=CAU' },
    { team: 'TeamC', goals: 2, yellow_cards: 0, shots: 4, image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRDRzI_0AXpgECcKVl5Ld9hvRaI1JwC3k4V3TTnfUQymqaHtQfJezwnS7iHQKDBQ2Z5w8&usqp=CAU' },
    { team: 'TeamD', goals: 1, yellow_cards: 4, shots: 2, image: 'https://img.freepik.com/vector-premium/escudo-futbol-bandera-nacional-holanda_601748-26591.jpg?w=2000' },
    { team: 'TeamE', goals: 7, yellow_cards: 2, shots: 10, image:'https://sg-res.9appsdownloading.com/sg/res/jpg/b0/5a/37e3bc0f1aa2bf48c8506d74cb83-w3t.jpg?x-oss-process=style/hq' }
];

const getScores = (req, res) => {
    try {
        let teamScores = matches.map((team) => ({
            teamName: team.team,
            image: team.image,
            goals: team.goals,
            yellow_cards: team.yellow_cards,
            shots: team.shots,
            goals_score: team.goals * 30,
            yellow_cards_score: team.yellow_cards * -5,
            shots_score: team.shots * 5,
            total_score: (team.goals * 30) + (team.yellow_cards * -5) + (team.shots * 5)

        }))
        return res.status(200).json(teamScores)
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
module.exports= (getScores)