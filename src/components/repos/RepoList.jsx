import PropTypes from 'prop-types'
import RepoItem from './RepoItem'

function RepoList({ repos }) {
    console.log(repos);
    return (
        <div className='rounded-lg shaodw-lg card bg-base-100'>
            <div className="card-body">
                <h2 className="text-3xl my-2 font-bold card-title">Latest Repotiories</h2>
                {repos.map((repo) => (
                    <RepoItem key={repo.id} repo={repo} />
                ))}
            </div>
        </div>
    )
}

RepoList.propTypes = {
    repos: PropTypes.array.isRequired
}

export default RepoList