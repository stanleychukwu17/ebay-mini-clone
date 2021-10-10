import styles from '../../styles/partials/Header.module.scss';

type HeaderPropsType = {
    wch?: string
}

export default function HeaderComp(props: HeaderPropsType) {
    return (
        <>
            <div className={styles.mainCover}>
                <div className={styles.firNav}>
                    <div className="">Hi <a href="jonah.com">Sign in</a> or <a href="mumu.com">Register</a></div>
                    <div className="">Daily deals!</div>
                    <div className="">Help &amp; Contact</div>
                </div>
                <div className={styles.secondNaV}>
                    <div className="">Ships to</div>
                    <div className="">Sell</div>
                    <div className="">Watchlist</div>
                    <div className="">My eBay</div>
                </div>
            </div>
            <div className={styles.benDwnSec}>
                <div className={styles.benLogo}><img src="/logo/ebay.png" alt="" /></div>
                <div className={styles.shopByCat}>Shop by category</div>
                <div className={styles.inputSrch}>
                    <input type="text" />
                    <select id="">
                        <option value="">All categories</option>
                    </select>
                </div>
                <div className={styles.inputBtn}><button>Search</button></div>
                <div className={styles.inpAdvncd}>Advanced</div>
            </div>
        </>
    )
}
