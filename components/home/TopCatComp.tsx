import { useState, useRef } from 'react';
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
    let [showDropDown, setShowDropDown] = useState(false);
    let userMouseNowInDropDown = useRef(false); // if true, means the user mouse has hovered into the drop down menu

    let heart:any = '';
    let timer: NodeJS.Timer;

    const updateDropDown = () => {
        setShowDropDown(true);
        clearTimeout(timer);
    }

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

                    return (
                        <div className={styles.eachCatM} key={ech.title}
                            onMouseOver={updateDropDown}
                            onMouseMove={updateDropDown}
                            onMouseOut={() => {
                                timer = setTimeout(() => {
                                    if (!userMouseNowInDropDown.current) { setShowDropDown(false) }
                                }, 100)
                            }}
                        >
                            {heart} {ech.title}
                        </div>
                    )
                })}
            </div>
            {showDropDown && (
                <div className={styles.showDownSect}
                    onMouseMove ={() => { updateDropDown(); userMouseNowInDropDown.current = true; }}
                    onMouseOver ={() => { updateDropDown(); userMouseNowInDropDown.current = true; }}
                    onMouseLeave={() => { setShowDropDown(false); userMouseNowInDropDown.current = false; }}
                >
                    <div className={styles.showB2hover}>
                        <div className={styles.showBh1}>
                            <nav aria-label="Most popular categories" className={styles.showBNavs}>
                                <h4>Most popular categories</h4>
                                <ul>
                                    <li><a href="https://www.ebay.com/b/Shoes/bn_7000259122" className="hl-cat-nav__js-link">Footwear</a></li>
                                    <li><a href="https://www.ebay.com/b/Womens-Clothing/15724/bn_661783" className="hl-cat-nav__js-link">Women clothing</a></li>
                                    <li><a href="https://www.ebay.com/b/Womens-Shoes/3034/bn_740022" className="hl-cat-nav__js-link">Footwear for women</a></li>
                                    <li><a href="https://www.ebay.com/b/Mens-Clothing/1059/bn_696958" className="hl-cat-nav__js-link">Men clothing</a></li>
                                    <li><a href="https://www.ebay.com/b/Mens-Shoes/93427/bn_61999" className="hl-cat-nav__js-link">Men footwear</a></li>
                                    <li><a href="https://www.ebay.com/b/Watches/260325/bn_7117208191" className="hl-cat-nav__js-link">Watches</a></li>
                                    <li><a href="https://www.ebay.com/b/Jewelry/bn_7000259126" className="hl-cat-nav__js-link">Jewelry</a></li>
                                </ul>
                            </nav>
                            <nav aria-label="More categories" className={styles.showBNavs}>
                                <h4>More categories</h4>
                                <ul>
                                    <li><a href="https://www.ebay.com/b/Mens-Accessories/4250/bn_1642245" className="hl-cat-nav__js-link">Accessories for men</a></li>
                                    <li><a href="https://www.ebay.com/b/Womens-Accessories/4251/bn_1519247" className="hl-cat-nav__js-link">Accessories for women</a></li>
                                    <li><a href="https://www.ebay.com/b/Womens-Bags-Handbags/169291/bn_738272" className="hl-cat-nav__js-link">Bags and wallets for women</a></li>
                                    <li><a href="https://www.ebay.com/b/Mens-Sunglasses/79720/bn_739004" className="hl-cat-nav__js-link">Mens sunglasses</a></li>
                                    <li><a href="https://www.ebay.com/b/Womens-Sunglasses-Sunglasses-Accessories/179247/bn_1519274" className="hl-cat-nav__js-link">Womens sunglasess</a></li>
                                    <li><a href="https://www.ebay.com/b/Collectible-Sneakers-LATM/bn_7116358158" className="hl-cat-nav__js-link">Sneakers</a></li>
                                    <li><a href="https://www.ebay.com/globaldeals/moda" className="hl-cat-nav__js-link">Deals</a></li>
                                    <li><a href="https://export.ebay.com/en/?utm_source=ebay&amp;utm_medium=flyout&amp;utm_campaign=sell" className="hl-cat-nav__js-link">Sell on eBay</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className={styles.showBh2}>
                            <div><img src="https://i.ebayimg.com/00/s/MjcwWDc3MA==/z/VgYAAOSwyDVg1bLh/$_57.PNG" alt="" /></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
