import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeTab, homePageUnloaded } from '../../reducers/articleList';
import MainView from './MainView';
import TagsSidebar from "../../features/tags/TagsSidebar";
import { selectIsAuthenticated } from "../../features/auth/authSlice";

/**
 * Home screen component
 *
 * @example
 * <Home />
 */

function Home() {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(selectIsAuthenticated);

  useEffect(() => {
    const defaultTab = isAuthenticated ? 'feed' : 'all';
    const fetchArticles = dispatch(changeTab(defaultTab))

    return () => {
      dispatch(homePageUnloaded());
      fetchArticles.abort();
    }
  }, [])

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">Conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div className="container page">
        <div className="row">
          <MainView />
          <div className="col-md-3">
            <TagsSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}



export default memo(Home)