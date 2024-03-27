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
      name: 'Spotify',
      link: 'https://open.spotify.com',
      image: '/assets/media/icons/apps/spotify.png',
      categories: ['all', 'media'],
      say: 'Spotify is currently not working on the proxy.',
      error: true,
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
