import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";

// const Liste = { taş: FaHandRock, kağıt: FaHandPaper, makas: FaHandScissors };

const List = {
  taş: <FaHandRock />,
  kağıt: <FaHandPaper />,
  makas: <FaHandScissors />,
};

const Liste = ["taş", "kağıt", "makas", "taş", "kağıt", "makas"];

const rndmSayı = () => {
  return Math.floor(Math.random() * 5 + 1);
};


const Oyun = () => {
  const [game, setGame] = useState({
    player1: "player 1",
    player2: "player 2",
    result: "sonuç bekleniyor",
    set: "11'de biter",
    winner: "",
    score1: 0,
    score2: 0,
  });

  const navigate = useNavigate();

  const handleClick = () => {
    // kurnazlık yaptık ama daha iyi bir yol elbet vardır
    const newGame = {
      player1: List[Liste[rndmSayı()]],
      player2: List[Liste[rndmSayı()]],
    };

    let result = game.result;
    let set = game.set;
    let winner = game.winner;
    let score1 = game.score1;
    let score2 = game.score2;
    // oyunlar için if else
    // 1'in kazandığı durumda score1'i 1 artırıyorum. player2 kazanınca score2yi artırıyorum,
    // daha sonradan toplamı alıyorum

    ////////////

    if (newGame.player1 === List.kağıt && newGame.player2 === List.taş) {
      score1++;
      winner = "player 1";
      result = `${winner} kazandı`;
    } else if (
      newGame.player1 === List.kağıt &&
      newGame.player2 === List.makas
    ) {
      score2++;
      winner = "player 2";
      result = `${winner} kazandı`;
    } else if (newGame.player1 === List.taş && newGame.player2 === List.kağıt) {
      score2++;
      winner = "player 2";
      result = `${winner} kazandı`;
    } else if (newGame.player1 === List.taş && newGame.player2 === List.makas) {
      score1++;
      winner = "player 1";
      result = `${winner} kazandı`;
    } else if (
      newGame.player1 === List.makas &&
      newGame.player2 === List.kağıt
    ) {
      score1++;
      winner = "player 1";
      result = `${winner} kazandı`;
    } else if (newGame.player1 === List.makas && newGame.player2 === List.taş) {
      score2++;
      winner = "player 2";
      result = `${winner}kazandı`;
    } else {
      winner = "dostluk";
      result = `${winner} kazandı :)`;
    }

    console.log(score1, score2);

    ///////////
    // set için toplam 11 oyunun kazananı
    // scoresların toplamı 11se set bitmiştir demek
    // beraberlik durumunda artış yok

    if (score1 + score2 === 11)
      if (score1 > score2) {
        winner = "player 1";
        set = `setin galibi ${wiinner} skor: ${score1} - ${score2}`;
      } else {
        winner = "player 2";
        set = `setin galibi ${winner} skor: ${score2} - ${score1}`;
      }
    return setGame({ ...newGame, result, set, winner, score1, score2 });
  };

  useEffect(() => {
    const timer = () => {
      setTimeout(() => {
        navigate("/users", { replace: true });
        alert(
          `seti ${game.winner} kazandı. users sayfasına yönlendiriliyorsunuz`
        );
        setGame({
          score1: 0,
          score2: 0,
        });
      }, 2000);
    };
    game.score1 + game.score2 === 11 && timer();

    return () => {
      clearTimeout(timer);
    };
  }, [game.score1, game.score2]);

  return (
    <div>
      <p>
        Player 1<span className="oyun"> {game.player1}</span>
        <strong>VS</strong> Player 2
        <span className="oyun"> {game.player2}</span>
      </p>
      <br />
      <button
        disabled={game.score1 + game.score2 === 11 ? true : false}
        onClick={handleClick}
      >
        sonucu gör
      </button>
      <p>{game.result}</p>
      <p>{game.set}</p>
      <div>
        <p>
          <FaHandRock /> <FaHandPaper /> <FaHandScissors />
        </p>
      </div>
    </div>
  );
};

export default Oyun;
