
document.addEventListener('click', function (e) {
  /**
   * @description 点击外部隐藏下拉
   */
  var event2 = document.querySelector('.event2')
  console.log(event2.contains(e.target))
})



function createDom() {
  const div = document.createElement('div')
  div.innerHTML = `
    <div class="event4 event">
      event4
      <div class="event3 event">
        event3
        <div class="event2 event">
          event2
          <div class="event1 event"> event1 </div>
        </div>
      </div>
    </div>
  `
  document.body.appendChild(div)
  createStyle()
  let once = {
    once : true
}
  bindEvnet(document.querySelector('.event4'), (e) => {
    console.log(e)
    console.log('event4')
  }, once)
  bindEvnet(document.querySelector('.event3'), (e) => {
    console.log(e)
    console.log('event3')
  }, once)
  bindEvnet(document.querySelector('.event2'), (e) => {
    console.log(e)
    console.log('event2')
  }, once)
  bindEvnet(document.querySelector('.event1'), (e) => {
    console.log(e)
    console.log('event1')
  }, once)
  bindEvnet(document.querySelector('.event1'), (e) => {
    console.log(e)
    console.log('event111')
  }, false)
}

function bindEvnet(el,cb, useCaapture) {
  el.addEventListener('click', (e) => {
    cb(e)
  }, useCaapture)
}

function createStyle() {
  const style = document.createElement('style')
  style.innerHTML = `
    .event {
      padding: 10px;
      border: 1px solid #333;
    }
  `
  document.head.appendChild(style)
}

createDom()
