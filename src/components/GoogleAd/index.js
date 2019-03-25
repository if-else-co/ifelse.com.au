import React from 'react'

import './styles.css'

const GoogleAd = ({ adClient, adSlot, adFormat, fullWidthResponse }) => (
  navigator.userAgent !== 'ReactSnap'
  ? (
    <React.Fragment>
      <ins className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={adClient}
          data-ad-slot={adSlot}
          data-ad-format={adFormat}
          data-full-width-responsive={fullWidthResponse}></ins>
      <script>
      (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    </React.Fragment>
  ) : (
    null
  )
)

export default GoogleAd