import styles from '../../styles/home/TopCat.module.scss';

const topLine: {title:string, innerCat:string}[] = [
    {'title':'home', 'innerCat':'no'},
    {'title':'Saved', 'innerCat':'no'},
    {'title':'Electronics', 'innerCat':'no'},
    {'title':'Fashion', 'innerCat':'no'},
    {'title':'Health & Beauty', 'innerCat':'no'},
    {'title':'Motors', 'innerCat':'no'},
    {'title':'Collectibles and Art', 'innerCat':'no'},
    {'title':'Industrial equipment', 'innerCat':'no'},
    {'title':'Home & Garden', 'innerCat':'no'},
    {'title':'Sports', 'innerCat':'no'},
    {'title':'Deals', 'innerCat':'no'},
    {'title':'Sell', 'innerCat':'no'}
]


export default function TopCatComp() {
    let heart:any = '';

    return (
        <div className={styles.overBaba}>
            {/* displays all of the clickable links for top categories */}
            <div className={styles.eachCatCover}>
                {topLine.map((ech, index) => {
                    if (index === 1) {
                        heart = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                </svg>)
                    } else {
                        heart = null
                    }

                    return (<div className={styles.eachCatM} key={ech.title}>{heart} {ech.title}</div>)
                })}
            </div>
            <div className={styles.showDownSect}>
                The fall down section
            </div>
        </div>
    )
}
