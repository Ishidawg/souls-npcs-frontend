const FANDOM_API_ROOT = {
  "Demon's Souls":   'https://demonssouls.fandom.com/api.php',
  'Dark Souls 1':    'https://darksouls.fandom.com/api.php',
  'Dark Souls 2':    'https://darksouls2.fandom.com/api.php',
  'Dark Souls 3':    'https://darksouls3.fandom.com/api.php',
};

export async function fetchNpcImage(npcName, game) {
  const api = FANDOM_API_ROOT[game];
  if (!api) return null

  const title = npcName.replace(/ /g, '_')

  const url = `${api
    }?action=query
    &titles=${encodeURIComponent(title)}
    &prop=pageimages
    &pithumbsize=300
    &format=json
    &origin=*`
    .replace(/\s+/g, '')

  try {
    const res  = await fetch(url)
    const json = await res.json()
    // console.log('respnose', title, json); // debug as well
    const pages = json.query && json.query.pages
    if (!pages) return null

    const page = Object.values(pages)[0]
    return page.original?.source || page.thumbnail?.source || null
  }
  catch {
    // console.error('fetchNpcImage error:', err, url); // just to debug, because I cant get this to work like I imagine! - WORKS!
    return null
  }
}
