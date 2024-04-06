const ListDetails = ({ result }) => {
  //console.log({ result });
  const { word, phonetics, meanings } = result;
  function playAudio() {
    try {
      let audio = new Audio(phonetics[0].audio);
      audio.play();
    } catch (e) {
      console.log({ e });
    }
  }

  return (
    <>
      <div>
        <div>
          <h3>word</h3>
          <p>{word}</p>
          <p>{meanings[0].partOfSpeech}</p>
          <p>{phonetics[0].text}</p>
          <button onClick={playAudio}>Play</button>
        </div>
        <div>
          <h3>Meanings</h3>
          <p>{meanings[0].definitions[0].definition}</p>
        </div>
      </div>
    </>
  );
};
export default ListDetails;
