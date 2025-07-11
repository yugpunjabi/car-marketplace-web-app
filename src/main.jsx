import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'

// Pages
import Home from './home'
import Contact from './contact'
import Profile from './profile'
import AddListing from './add-listing'
import SearchByCategory from './search/[category]'
import SearchByOptions from './search'
import ListingDetail from './listing-details/[id]'

// Clerk
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn
} from '@clerk/clerk-react'

// Toast
import { Toaster } from './../src/components/ui/sonner'
import AboutUs from './aboutus/AboutUs'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <SignedIn>
          <Home />
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </>
    )
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/about-us',
    element: <AboutUs/>
  },
  {
    path: '/profile',
    element: (
      <>
        <SignedIn>
          <Profile />
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </>
    )
  },
  {
    path: '/add-listing',
    element: (
      <>
        <SignedIn>
          <AddListing />
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </>
    )
  },
  {
    path: '/search',
    element: <SearchByOptions />
  },
  {
    path: '/search/:category',
    element: <SearchByCategory />
  },
  {
    path: '/listing-details/:id',
    element: <ListingDetail />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
      <RouterProvider router={router} />
      <Toaster richColors position="top-right" />
    </ClerkProvider>
  </StrictMode>
)
