import profile_img from './images/profile_img.jpg'
import slack from './images/slack.png'
import github from './images/git.png'

const Links = () => {
    const links = [{
        name: 'Twitter Link',
        linkDir: 'https://twitter.com/Cyril_Ikechukw',
        id: 'twitter'
    },
    {
        name: 'Zuri Team',
        linkDir: 'https://training.zuri.team/',
        id: 'btn__zuri'
    },
    {
        name: 'Zuri Books',
        linkDir: 'http://books.zuri.team/',
        id: 'books'
    },
    {
        name: 'Python Books',
        linkDir: 'https://books.zuri.team/python-for-beginners?ref_id=<cyrilikechukwuidu>',
        id: 'book__python'
    },
    {
        name: 'Background Check for Coders',
        linkDir: 'https://background.zuri.team/',
        id: 'pitch'
    },
    {
        name: 'Design Books',
        linkDir: 'https://books.zuri.team/design-rules',
        id: 'book__design'
    }]


    return (
        <main>
            <img src={profile_img} id='profile__img'/>
            <h3 id='twitter'>Cyril</h3>
            <h3 id='slack'>Slack username</h3>
            <div id="cont">
                {
                    links.map((e) => (
                        <a href={e.linkDir} target="_blank">
                            <button id={e.id} className='ele'>
                                <h2>{e.name}</h2>
                            </button>
                        </a>
                    ))
                }
            </div>
            <div id='media'>
                <img src={slack} alt="" />
                <a href="https://github.com/Dev-cyril"><img src={github}/></a>
            </div>
        </main>
    )
}

export default Links