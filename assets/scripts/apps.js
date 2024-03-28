document.addEventListener('DOMContentLoaded', () => {
  const appsList = [
    {
      name: 'Amazon',
      link: 'https://amazon.com/',
      image: '/assets/media/icons/apps/amazon.png',
      categories: ['all', 'media'],
      error: false,
    },
    {
      name: 'BuzzFeed Quizzes',
      link: 'https://buzzfeed.com/quizzes',
      image: '/assets/media/icons/apps/buzzfeed.png',
      categories: ['all', 'media'],
      error: false,
    },
    {
      name: 'Movie Web',
      link: 'https://bmov.vercel.app',
      image: 'https://bmov.vercel.app/apple-touch-icon.png',
      categories: ['all', 'media', 'stream'],
      error: false,
    },
    {
      name: 'Scratch',
      link: 'https://scratch.mit.edu',
      image: '/assets/media/icons/scratch.jpg',
      categories: ['all', 'social', 'game', 'media', ''],
      error: false,
    },
    {
      name: 'Chess.com',
      link: 'https://chess.com',
      image: '/assets/media/icons/chess.png',
      categories: ['all', 'game'],
      error: false,
    },
    {
      name: 'Cool Math Games',
      link: 'https://coolmathgames.com',
      image: '/assets/media/icons/apps/coolmath.png',
      categories: ['all', 'game'],
      error: false,
    },
    {
      name: 'Discord',
      link: 'https://canary.discord.com',
      image: '/assets/media/icons/apps/discord.jpg',
      categories: ['all', 'social'],
      error: false,
    },
    {
      name: 'DuckDuckGo',
      link: 'https://start.duckduckgo.com/',
      image: '/assets/media/icons/apps/duckduckgo.png',
      categories: ['all'],
      error: false,
    },
    {
      name: 'ESPN',
      link: 'https://www.espn.com/watch/',
      image: '/assets/media/icons/apps/espn.webp',
      categories: ['all', 'media'],
      error: false,
    },
    {
      name: 'Fifa Rosters',
      link: 'https://fifarosters.com/',
      image: '/assets/media/icons/fifa.png',
      categories: ['all', 'media'],
      error: false,
    },
    {
      name: 'Firefox Web Browser',
      link: 'https://replit.com/@cooleddie001/Firefox-Legacy?v=1',
      image: '/assets/media/icons/apps/firefox.png',
      categories: ['all', 'media'],
      error: false,
    },
    {
      name: 'Flix HQ',
      link: 'https://flixhq.to',
      image: '/assets/media/icons/apps/flixhq.png',
      categories: ['all', 'media'],
      error: false,
    },
    {
      name: 'Geforce NOW',
      link: 'https://play.geforcenow.com',
      image: '/assets/media/icons/apps/geforce-now.png',
      categories: ['all', 'stream', 'cloud'],
      error: false,
    },
    {
      name: 'Github',
      link: 'https://github.com',
      image: '/assets/media/icons/apps/github.png',
      categories: ['all', 'media'],
      error: false,
    },
    {
      name: 'Google',
      link: 'https://google.com',
      image: '/assets/media/icons/apps/google.png',
      categories: ['all', 'media'],
      error: false,
    },
    {
      name: 'HBO MAX',
      link: 'https://www.hbomax.com/',
      image: '/assets/media/icons/apps/hbo.webp',
      categories: ['all', 'stream'],
      error: false,
    },
    {
      name: 'Messenger',
      link: 'https://messenger.com/',
      image: '/assets/media/icons/apps/messenger.png',
      categories: ['all', 'social', 'message'],
      error: false,
    },
    {
      name: 'Paramount Plus',
      link: 'https://paramountplus.com',
      image: '/assets/media/icons/apps/paramount.png',
      categories: ['all', 'stream'],
      error: false,
    },
    {
      name: 'Pinterest',
      link: 'https://pinterest.com',
      image: '/assets/media/icons/apps/pinterest.png',
      categories: ['all', 'media'],
      error: false,
    },
    {
      name: 'Pixlr',
      link: 'https://pixlr.com/',
      image: '/assets/media/icons/pix.png',
      categories: ['all', 'media'],
      error: false,
    },
    {
      name: 'Poki',
      link: 'https://poki.com',
      image: '/assets/media/icons/apps/poki.png',
      categories: ['all', 'game'],
      error: false,
    },
    {
      name: 'Soundcloud',
      link: 'https://soundcloud.com',
      image: '/assets/media/icons/apps/soundcloud.jpg',
      categories: ['all', 'media'],
      error: false,
    },
    {
      name: 'Musi',
      link: 'https://feelthemusi.com',
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAwAMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBAgQHA//EADUQAAEEAQIDBQYFBAMAAAAAAAABAgMRBAUSBiExE0FRcYEiUmGRocEUI0Ox0TJCU+EzYvD/xAAaAQEAAgMBAAAAAAAAAAAAAAAABAUBAwYC/8QAJhEBAAICAgEFAAIDAQAAAAAAAAERAgMEEgUhIjFRYTJBEyRxgf/aAAwDAQACEQMRAD8AuxwjpgAAAAAAAAAAAAAAAAAAAAAAAAAANbPVMligsUFigsUFigsUFigsUFigsUFigsUFigsUFigsUFigsUFigsUFigsUFihqZZAAAAAAAAMWAsUFgZAAAAAAAAAAAAAAA0szT1RYoosUUWKKLFFFiiixRRYpikhiaNmZTEejWxsXoslpfoT9Pjt+2L+EPbztWua+TL0bMxWq9zWyMTqsa3Q3eN364v5NXO1bJr4R6KQEwsUzRYoosUUWKKLFFFiiixRRYoosUUWKKLFFFiiixRTB6pkFAKAUAoBQxYEhoWM3K1BrZPaYxNy/EneP0Rt3ev8ASHzds69Xp8yuTU5HTKBlURQKbruO3F1F7WNpj0R6fDx+pzHkNMat018SvuFsnZq/4jiFSayKAUAoBQCgFAKAUAoBQCgFDTcZZNwDcA3ANwDcAsCw8Ix27Im+CNLrxOH8slR5PL1xxWUulUwpgVrixntwyebFKXy2H8clt4zL5xV+ymWxYCxQWA3ANwDcA3ANwDcA3ANwDcBqenoAAAAAABb+FY9umo+v+R7l+XL7HQ+NwrTf25/yOV7q+oTJYoLCgQXETO0wpHJ1Y5HFXz8e2uZ+lhwsuu2I+1VsoV6lNJ0aXUGpK96xQ9EWubvIsOLwMt0dpmoQOTzcdM9cYuUpLwxArPyppGuTxpUUmZ+K117Z9UPHyeyJ90WrmVjy4kzoZ205v1TxKjdqy1Zdc/lb6duO3Hti+RqbQAAAAAAAABrZlksBYCwFgLAKvJTNML7o8fY6bjMql7NFXzXmdRxceurGPxy/Jy7bcp/XaSGlq9aaqmJ+GY+UVlt7fHljXo5qoQtsdscolL1z1yiVMbbqTvXkc9GHrTobirehYcSQY8UTUpGtRPodVqwjDDHGHKbMpyznKf7fdehteVb4vgRG406JzRVYq+Ph9yo8rhFY5rXxefrlirSLyKalyWYZLAWAsBYCwFgLA1s9UyWKCxQWKCxQWKG8Le0mYxP7nIh7wx7ZRDxsnrhMvRo27WtanREo6rGKiHJTNy3PQ+WSu2JTxnNQ9YReSPVSKlKvFj3rbceuSzp8rsqMNf8Asxj+rjPP/VnL8XxDpHNsgQvEzO1wJE72JuQgc+O2qfxO4E9dsSpqurmvqc+6GHdDpOoTx9pHiu29yqqJf1JOPC35RcYo2XN0YzU5OSaOSCRY5mOY9O5xoz15YTWUU34bMc4vGbaWeaeyxQWKCxQWKCxQ1s9PVFgosFFgosFFgp3aFH22r4zP+25fRLJPDx7b8YQ+bn10ZSv6IdI5lkDlznUxqeKmrbPtbdMXLhvkR0lwYmPu4mY/uSJX/b7kfXr/ANuJ/G/bsriTj+rMhaqplQIvOTte1Z3ORWkTb7riUvV6VKr6BiNyNXZHK22stzkX4FRxNXfdUrfm7enHvH+16ROR0TnUDxbitfhNydv5kbkS/gpW+R1ROvv/AHCy8bsnHb0/qVRspF/RYZosFFgosFFgppZlksBYCwFgLAneD4t+qSSf44/3Wv5LDxuF7Zn6hVeUzrVGP3K6F4oQDg1B35jGr4WR93ykaY9Lcar4mi0h06dGizvmVPaRu1PL/wAhu04+7s0b8qxjFJElGYctJYkRD3qqqvxIcz6ym4xUOPQMbZq+oPrk2kRfPmaeJrrbnLdzdnbRrxWNOhZKxwa1F2+DJD7zV+fcR+THbCYSONPXZGTz6zm6dVHr6lhksBYCwFga2ZZLAWAsBYCwLZwRFUGTOvVz0ankif7LjxuNY5ZKHy2V7McfpZyzVLDgIB2X2+oZkV2kT0RPl/NkDLPtsyj6WOGrrqwn7bOUSzEJLTW1BfvOslaY9qHvn3uw2tL55DtkD3eCHnKah6xi5hDKvMhfafEO7TImtZJKie1IvP0JGjGotF5E3MQ7k6G9ocOa/wDM2+CGjZPrSRqj2qFnR9jmzx+D1ry7v3Of241nMOm0ZdtcS+FmtuLAWAsBYGLPTNFgosFFgosFFiil74Vi7LRoV/yKr/mpfcLHrphy/kM+3IyTJLQmr1RG2vRBZ8+ii6ZlLJq+Sq/qq5fOlKTTne7Kft0W/V10Yfiac4loUQm8Ru3HYnwsm64rFW7JvOX3PbwieI8r8LhMVF5umYi+V2v7EblZ9MLTOFq/ybJj6iXIq9V9DRMt8QmsFNuLH8Uv5k3X/FA2zecvsp7a0TlyXO/4KRM59ybrx9sKrxBGjMxJE/Ubz80KvlY+/suuDleHX6RlkVOosFFgosFFgppZl6LAWAsBYC7M0xM09M02LsMHGjqtsaJXodHqx64RDjd2XfZOTrNjW5dUm7DTsiX3I3L9DXty64TLbox7bcY/XnWmyrHmwuVf7qX1KDTNZxLquRheuYWpPaejU6q5ELOPWYUv9WsbEpqJ4JRPj4Vc/LK9DLCqcczcsWFO9Vcv7FZ5HL0xhc+IwucsmcOXtseF/vInzM657YwbceuUrRE3bG1vghYxFQp5m5mSR2xrnL0RLEzUSRFyr3bJMxJEW0fzQg3fwtIw6+korX27oGv72O5+SkXkxeFpvDms6QNkBalgLAWAsDWz1TJYoLFBYoLFD74Maz5uPD78jWr6qe9WPbPGGjfl01ZZfj1FqUdG45kCE4vm7LRJG98r2sT52v0RSLzMq1Sn+Nw7ciPz1UFHK1yOTqi2UkelOnmLil101UmyIFToqo77ltp9Zhz2/wBuMrGnQnqplegFD4xm36xs7o40T1Upufle2nR+JwrR2+3Rwy7to4o+9slKbOLPaoavIR0mZXNC1ULg12b8PpOXIi0qRKiea8vuaeRNa5lI4mHffjj+qto0+/BRirzjXb/BXaMrwXXK19dvp/b65qdpjSt71aZz9caeNXplEq0i8ufUr6XBYpksUFigsUNbPTJYCwFgLAluFYVm13GvpHuevolJ9VJPDxvbH4r/ACefXjZfr0Uu3LMKBVeOpvycXHvmr1evolfdSv5+XpGK58PheeWSnqVVOgXLhF3axRu74219f4Lbh+6HO+TjpMxH9rQT1QO6AeZa3N22sZb7tO1VE8k5fYod+XbZMuv4evpx8Y/ErwS69QkjVf09yft9yRwZ98wheYitUSvDS2c6gONZuz0fs++WRrflz+xD5uVa6WXisb5MT9Kdp+WuI9dyW13Uq9ezrK/36f8AJHo68rU43RK2FF3OSrVOhsz3RMVDRq42V3kiuhGpPLMhYCwFga2ZZLAWAsBYFn4Eh3ZuTOvRkaNT1X/RP4GPunJSeZzrHHFdi0UDDugFE42nR+qsiReUcaX6qVPOyvZEOj8PrrVOX6r1oQlut/AkjVjyo1X2kVFTyLPgT6TDn/MxMZYytxYKV88iRIYZJXLSMarl9DzlNRMvWGPbKMft5Mr1e9Xu6uW1U5/L1mZdthHWIh16Xnv07OjyY03beTm+KL1PerZOrLtDTytEb9c4Su8PFGlPh7R2TsXva5i2n0LaOXqmLmXN5eN5OOXWMbVTiTWk1WeNsaObBHe3clKqr3lfyd/+X0hdeP4U8eJnKfWURZFWRYCxQWAsBYCwNbPTJYCwFgLAuvAbWpg5L0/qWWl9ELPgx7Jc55qZ/wAuMfi1E5TsO6AeZcQzpPreY/uSTYnknL+Sk',
      categories: ['all', 'media'],
      error: false,
    },
    {
      name: 'Telegram',
      link: 'https://web.telegram.org/',
      image: '/assets/media/icons/apps/telegram.png',
      categories: ['all', 'social'],
      error: false,
    },
    {
      name: 'Tiktok',
      link: 'https://tiktok.com',
      image: '/assets/media/icons/apps/tiktok.png',
      categories: ['all', 'social', 'media'],
      error: false,
    },
    {
      name: 'Tumblr',
      link: 'https://tumblr.com/',
      image: '/assets/media/icons/apps/tumblr.png',
      categories: ['all', 'social'],
      error: false,
    },
    {
      name: 'Twitch',
      link: 'https://twitch.tv',
      image: '/assets/media/icons/apps/twitch-tv.png',
      categories: ['all', 'stream', 'media'],
      error: false,
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com',
      image: '/assets/media/icons/apps/twitter.png',
      categories: ['all', 'social', 'media'],
      error: false,
    },
    {
      name: 'VS Code',
      link: 'https://vscode.dev',
      image: '/assets/media/icons/apps/vscode.png',
      categories: ['all', 'tool'],
      error: false,
    },
    {
      name: 'Y8 Games',
      link: 'https://y8.com/',
      image: '/assets/media/icons/apps/y8.png',
      categories: ['all', 'game'],
      error: false,
    },
    {
      name: 'YouTube',
      link: 'https://youtube.com',
      image: '/assets/media/icons/apps/yt.png',
      categories: ['all', 'social', 'stream', 'media'],
      error: false,
    },
    {
      name: 'Whatsapp',
      link: 'https://web.whatsapp.com/',
      image: '/assets/media/icons/apps/whatsapp.png',
      categories: ['all', 'message', 'social'],
      error: false,
    },
    {
      name: 'Wattpad',
      link: 'https://wattpad.com/',
      image: '/assets/media/icons/apps/wattpad.webp',
      categories: ['all', 'social'],
      error: false,
    },
    {
      name: 'ChatGPT Clone',
      link: 'https://chat.shuttleai.app/',
      image: '/assets/media/icons/chatgpt.png',
      categories: ['all', 'AI'],
      error: false,
    },
    {
      name: 'Discord - Login',
      link: 'https://canary.discord.com/login',
      image: '/assets/media/icons/discord.jpg',
      categories: ['all', 'social'],
      blank: 'true',
      error: false,
    },
    {
      name: 'HD Today',
      link: 'https://hdtoday.tv',
      image: '/assets/media/icons/hd.png',
      categories: ['all', 'media', 'stream'],
      error: false,
    },
    {
      name: 'Roblox (Now.GG)',
      link: 'https://now.gg/iframe/snippet?app_pkg=com.roblox.client&partner=gamenora',
      image: '/assets/media/icons/roblox.png',
      categories: ['all', 'emu'],
    },
    {
      name: 'Now.GG',
      link: 'https://now.gg',
      image: '/assets/media/icons/now-gg.png',
      categories: ['all', 'emu'],
    },
    {
      name: 'Roblox (Now.GG Alternative)',
      link: 'https://nowgg.nl/play/roblox-corporation/5349/roblox',
      image: '/assets/media/icons/roblox.png',
      categories: ['all', 'emu'],
    },
    {
      name: 'Now.GG (Alternative)',
      link: 'https://nowgg.nl',
      image: '/assets/media/icons/now-gg.png',
      categories: ['all', 'emu'],
    },
    {
      name: 'Amazon Luna',
      link: 'https://luna.amazon.com/',
      image: '/assets/media/icons/amazon-luna.png',
      categories: ['all', 'game', 'cloud'],
      blank: 'true',
      error: false,
    },
     {
      name: 'CodeSandBox',
      link: 'https://codesandbox.io',
      image: 'https://avatars.githubusercontent.com/u/32880324?s=200&v=4',
      categories: ['all', 'tool'],
      blank: 'true',
      error: false,
    },
         {
      name: 'Aniwatch',
      link: 'https://aniwatchtv.to',
      image: 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/bc/43/89/bc43897a-b10d-7bdf-51e2-212b92097571/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg',
      categories: ['all', 'media'],
      blank: 'true',
      error: false,
    },
             {
      name: 'Replit',
      link: 'https://replit.com',
      image: 'https://pbs.twimg.com/profile_images/1577395477137526784/ECF9IL4v_400x400.jpg',
      categories: ['all', 'tool'],
      blank: 'true',
      error: false,
    },
    {
      name: 'Streamium',
      link: 'https://streamium.pm',
      image: 'https://streamium.st/assets/streamium.png',
      categories: ['all', 'watch'],
      blank: 'true',
      error: false,
    },
        {
      name: 'Enjoy4Fun',
      link: 'https://enjoy4fun.comf',
      image: 'https://pbs.twimg.com/profile_images/1536637553985847296/puORjh1t_400x400.jpg',
      categories: ['all', 'game'],
      blank: 'true',
      error: false,
      },
      {
      name: 'Crazy Games',
      link: 'https://crazygames.com',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Crazygames_jpg_logo.jpg',
      categories: ['all', 'game'],
      blank: 'true',
      error: false,
      },
      {
      name: 'Xbox Cloud Gaming',
      link: 'https://xbox.com/play',
      image: 'data:image/png;base64,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',
      categories: ['all', 'stream', 'cloud'],
      blank: 'true',
      error: false,
      },
          {
      name: 'Youtube Music',
      link: 'https://music.youtube.com',
      image: 'https://play-lh.googleusercontent.com/GnYnNfKBr2nysHBYgYRCQtcv_RRNN0Sosn47F5ArKJu89DMR3_jHRAazoIVsPUoaMg=w600-h300-pc0xffffff-pd',
      categories: ['all', 'media'],
      blank: 'true',
      error: false,
      },
      {
      name: 'Windows 11',
      link: 'https://win11.blueedge.me',
      image: 'https://avatars.githubusercontent.com/u/97238085?s=280&v=4',
      categories: ['all', 'emu'],
      error: false,
      },
  ]
  appsList.sort((a, b) => a.name.localeCompare(b.name))

  const nonPinnedApps = document.querySelector('.container-apps')
  const pinnedApps = document.querySelector('.pinned-apps')
  var pinList = localStorage.getItem('pinnedGames')
  try {
    pinList = pinList.split(',').map(Number)
  } catch {}
  var appInd = 0
  appsList.forEach((app) => {
    let pinNum = appInd
    const columnDiv = document.createElement('div')
    columnDiv.classList.add('column')
    columnDiv.setAttribute('data-category', app.categories.join(' '))

    const pinIcon = document.createElement('i')
    pinIcon.classList.add('fa')
    pinIcon.classList.add('fa-map-pin')
    pinIcon.ariaHidden = true

    const btn = document.createElement('button')
    btn.appendChild(pinIcon)
    btn.style.float = 'right'
    btn.style.backgroundColor = 'rgb(45,45,45)'
    btn.style.borderRadius = '50%'
    btn.style.borderColor = 'transparent'
    btn.style.color = 'white'
    btn.style.top = '-200px'
    btn.style.position = 'relative'
    btn.onclick = function () {
      setPin(pinNum)
    }
    btn.title = 'Pin'

    const link = document.createElement('a')

    if (app.local) {
      link.onclick = function () {
        if (typeof app.say !== 'undefined') {
          alert(app.say)
        }
        window.location.href = app.link
        return false
      }
    } else if (app.blank) {
      link.onclick = function () {
        if (typeof app.say !== 'undefined') {
          alert(app.say)
        }
        blank(app.link)
        return false
      }
    } else {
      link.onclick = function () {
        if (typeof app.say !== 'undefined') {
          alert(app.say)
        }
        images(app.link)
        return false
      }
    }

    const image = document.createElement('img')
    image.width = 145
    image.height = 145
    image.src = app.image
    image.loading = 'lazy'

    const paragraph = document.createElement('p')
    paragraph.textContent = app.name
    if (app.error) {
      paragraph.style.color = 'red'
    }

    link.appendChild(image)
    link.appendChild(paragraph)
    columnDiv.appendChild(link)
    if (appInd != 0) {
      columnDiv.appendChild(btn)
    }

    if (pinList != null && appInd != 0) {
      if (pinContains(appInd, pinList)) {
        pinnedApps.appendChild(columnDiv)
      } else {
        nonPinnedApps.appendChild(columnDiv)
      }
    } else {
      nonPinnedApps.appendChild(columnDiv)
    }
    appInd++
  })
  appsContainer.appendChild(pinnedApps)
  appsContainer.appendChild(nonPinnedApps)
})
function setPin(index) {
  pins = localStorage.getItem('pinnedGames')
  if (pins == null) {
    pins = []
  }
  if (pins == '') {
    pins = []
  } else {
    pins = pins.split(',').map(Number)
  }
  if (pinContains(index, pins)) {
    let remove = pins.indexOf(index)

    pins.splice(remove, 1)
  } else {
    pins.push(index)
  }
  localStorage.setItem('pinnedGames', pins)
  location.reload()
}
function pinContains(i, p) {
  if (p == '') {
    return false
  }
  for (var x = 0; x < p.length; x++) {
    if (p[x] === i) {
      return true
    }
  }
  return false
}

function show_category() {
  var selectedCategories = Array.from(document.querySelectorAll('#category option:checked')).map(
    (option) => option.value
  )
  var games = document.getElementsByClassName('column')

  for (var i = 0; i < games.length; i++) {
    var game = games[i]
    var categories = game.getAttribute('data-category').split(' ')

    if (selectedCategories.length === 0 || selectedCategories.some((category) => categories.includes(category))) {
      game.style.display = 'block'
    } else {
      game.style.display = 'none'
    }
  }
}

function search_bar() {
  var input = document.getElementById('searchbarbottom')
  var filter = input.value.toLowerCase()
  var games = document.getElementsByClassName('column')

  for (var i = 0; i < games.length; i++) {
    var game = games[i]
    var name = game.getElementsByTagName('p')[0].textContent.toLowerCase()

    if (name.includes(filter)) {
      game.style.display = 'block'
    } else {
      game.style.display = 'none'
    }
  }
}
