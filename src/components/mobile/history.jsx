import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  update,
  edit,
  changeChart,
  changeGroup,
  changeSearch,
  toggleMobileMenu,
  switchMobileView,
} from "../../store/slice";
import MobileSidebar from "../sidemenu/mobilesidebar";
import { FaBars } from "react-icons/fa";
import { MdClose, MdAccountCircle } from "react-icons/md";
function History() {
  const marketData = useSelector((state) => state.asset.data);
  const searchData = useSelector((state) => state.search.search);

  const orderDetail = useSelector((state) => state.order.asset);
  const menuStatus = useSelector((state) => state.mobilemenu.mobilemenu.status);
  const selectedMenu = useSelector(
    (state) => state.mobilemenu.mobilemenu.currentView
  );

  const dispatch = useDispatch();
  const [headSearchActive, setHeadSearchActive] = useState(true);

  const setHeadSearch = () => {
    setHeadSearchActive(!headSearchActive);
  };
  const onSearchInputChange = (e) => {
    let { value } = e.target;
    dispatch(changeSearch(value));
  };

  const searchWord = (SearchedString, StringToSearch) => {
    let refinedSearchedString = SearchedString.toLowerCase();
    let refinedStringToSearch = StringToSearch.toLowerCase();
    let startIndex = 0;
    let resultIndex = -1;
    resultIndex = refinedSearchedString.indexOf(
      refinedStringToSearch,
      startIndex
    );
    return resultIndex;
  };
  return (
    <div>
      <header className="mobile-app-header">
        <div className="mobile-header d-flex">
          <div className="mobile-header-left">
            <div className="mobile-navigation ">
              <div className="mobile-navigation-hamburger mobile-menu-item-balance">
                <div
                  className="mobile-hamburger"
                  onClick={() =>
                    dispatch(toggleMobileMenu({ status: !menuStatus }))
                  }
                >
                  {menuStatus ? (
                    <MdClose style={{ color: "white" }} />
                  ) : (
                    <FaBars />
                  )}
                </div>
              </div>

              <div className=""></div>
            </div>

            <div className="">
              <div className="mobile-header-search-inner">
                <div
                  className={
                    headSearchActive
                      ? "mobile-header-search-title-active"
                      : "mobile-header-search-title"
                  }
                >
                  <span>History</span>
                </div>
                <label
                  className={
                    headSearchActive
                      ? "mobile-header-search-input__active"
                      : "mobile-header-search-input"
                  }
                >
                  <input value="" />
                  <button
                    className="mobile-header-search-input-button"
                    onClick={() => setHeadSearch()}
                  ></button>
                </label>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="mobile-app-section">
        <div className="mobile-assets">
          <div className="mobile-table">
            <div className="mobile-table-row mobile-table-row__head">
              <div className="mobile-table-col">
                <span>ID</span>
              </div>
              <div className="mobile-table-col">
                <span>Symbol</span>
              </div>
              <div className="mobile-table-col">
                <span>Volume</span>
              </div>
              <div className="mobile-table-col ">
                <span>Type</span>
              </div>

              <div className="mobile-table-col ">
                <span>Profit</span>
              </div>
            </div>
            <div className="mobile-table-body">
              {marketData.map(
                (index) =>
                  (searchWord(index.name, searchData) === 0 ||
                    searchWord(index.name, searchData) > 0) && (
                    <>
                      <div
                        className="mobile-table-row asset"
                        onClick={() => dispatch(edit(index.data))}
                      >
                        <div className="mobile-table-col">
                          <img className="asset-icon" src={index.img} />
                          <div className="mobile-asset-name">{index.name}</div>
                        </div>

                        <div className="mobile-table-col withstyle1-mobile">
                          <span className="mobile-asset-value">
                            {index.ask}
                          </span>
                        </div>

                        <div className="mobile-table-col withstyle1-mobile">
                          <span className="mobile-asset-value">
                            {index.bid}
                          </span>
                        </div>
                      </div>

                      <MobileSidebar />
                    </>
                  )
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default History;
