var audio = document.getElementById('relaxAudio');
var currentQuestion = 1;
var correctAnswers = 0;

window.addEventListener('load', function () {
    audio.play();
    loadQuestion(currentQuestion);
});

function loadQuestion(questionNumber) {
    document.getElementById('questionNumber').innerText = 'Pertanyaan ' + questionNumber;

    // Dapatkan jawaban yang benar berdasarkan nomor pertanyaan
    var correctAnswer = getCorrectAnswer(questionNumber);

    // Perbarui elemen form dan jawaban yang benar
    // (gunakan metode ini atau gunakan AJAX untuk memuat konten secara dinamis)
    var questionContent = getQuestionContent(questionNumber);
    document.getElementById('quizForm').innerHTML = questionContent;

    document.querySelector('button').onclick = function () {
        checkAnswer(correctAnswer);
    };
}

function getCorrectAnswer(questionNumber) {
    // Tambahkan jawaban yang benar berdasarkan nomor pertanyaan
    switch (questionNumber) {
        case 1:
            return 'B';
        // Tambahkan case untuk pertanyaan lainnya
    }
}

function getQuestionContent(questionNumber) {
    // Ambil konten pertanyaan berdasarkan nomor pertanyaan
    switch (questionNumber) {
        case 1:
            return `
                <label>1. Pulau Komodo terletak di provinsi?</label>
                <input type="radio" name="q1" value="A"> Bali
                <input type="radio" name="q1" value="B"> NTT
                <input type="radio" name="q1" value="C"> NTB
                <input type="radio" name="q1" value="D"> Jawa Timur
            `;
        // Tambahkan case untuk pertanyaan lainnya
    }
}

function checkAnswer(correctAnswer) {
    var selectedAnswer = document.querySelector('input[name="q1"]:checked').value;

    // Periksa jawaban
    if (selectedAnswer === correctAnswer) {
        alert('Jawaban anda benar!');
        correctAnswers++;
    } else {
        alert('Jawaban anda salah');
        // Put code for incorrect answer here
        audio.play();
    }

    // Pergi ke pertanyaan berikutnya atau tampilkan hasil jika pertanyaan terakhir
    if (currentQuestion < 10) {
        currentQuestion++;
        loadQuestion(currentQuestion);
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    alert('Quiz selesai! Jawaban Benar: ' + correctAnswers);
}
