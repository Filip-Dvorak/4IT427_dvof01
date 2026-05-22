import { useContext } from 'react'
import { WatchlistContext } from '../Context/WatchListContext'

export default function useWatchlist() {
  const context = useContext(WatchlistContext)
    if (!context) {
      throw new Error('useWatchlistContext must be used within a WatchlistProvider')
    }
    return context
}
