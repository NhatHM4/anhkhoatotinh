const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "NA CÓ NGƯỜI IU RẦU NHÁ😘";
  gif.src =
    "https://media1.giphy.com/media/iCVzZwwE6QNAV2tEE0/giphy.gif";

  document.getElementById('noButton').style.display = "none";
  document.getElementById('myVideo').src = "5558528399580.mp4";
  video.load(); // Nạp lại video với nguồn mới
  video.play(); // Phát video
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});


document.addEventListener('DOMContentLoaded', function() {
  var video = document.getElementById('myVideo');

  // Đặt thời gian chờ 5 giây trước khi phát video ở chế độ tắt tiếng (muted)
  setTimeout(function() {
      video.play().then(() => {
          console.log('Video is playing silently');
      }).catch(error => {
          console.error('Error playing video: ', error);
      });
  }, 5000); // 5000 milliseconds = 5 seconds

  // Lắng nghe sự kiện click trên toàn bộ tài liệu để bật âm thanh và phát video
  document.addEventListener('click', function() {
      video.muted = false;
      video.volume = 1.0;
      video.play().then(() => {
          console.log('Video is now playing with sound');
      }).catch(error => {
          console.error('Error playing video: ', error);
      });
  }, { once: true }); // Chỉ lắng nghe sự kiện click lần đầu tiên
});

