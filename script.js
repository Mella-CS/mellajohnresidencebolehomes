(function(){
    var script = {
 "shadow": false,
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "children": [
  "this.MainViewer",
  "this.Container_22BB12F4_3075_D173_4184_EC3BC4955417",
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
  "this.Container_50E57579_424B_1CC1_41C7_2A7D7DE232E6",
  "this.Container_58B883FD_4396_7C5F_41B3_61F626F14414"
 ],
 "width": "100%",
 "id": "rootPlayer",
 "start": "this.playAudioList([this.audio_356F6C33_245A_BC2F_417F_504D349CDFC3]); this.init(); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "definitions": [{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30BBC923_23D3_4002_417D_576254F701F0_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_30BBC923_23D3_4002_417D_576254F701F0_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30BBC923_23D3_4002_417D_576254F701F0_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_30BBC923_23D3_4002_417D_576254F701F0_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30BBC923_23D3_4002_417D_576254F701F0_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_30BBC923_23D3_4002_417D_576254F701F0_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30BBC923_23D3_4002_417D_576254F701F0_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_30BBC923_23D3_4002_417D_576254F701F0_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30BBC923_23D3_4002_417D_576254F701F0_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_30BBC923_23D3_4002_417D_576254F701F0_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_30BBC923_23D3_4002_417D_576254F701F0_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30BBC923_23D3_4002_417D_576254F701F0_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_30BBC923_23D3_4002_417D_576254F701F0_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "150%",
 "id": "panorama_30BBC923_23D3_4002_417D_576254F701F0",
 "label": "Living Room",
 "overlays": [
  "this.overlay_39B290F7_2457_C002_41C0_D150906B5770",
  "this.overlay_3DDC605D_2456_C006_41AE_DEC381D178A5"
 ],
 "partial": false,
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "yaw": 58.97,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3084C678_23D3_400E_41B3_7F382DA76EC4",
   "backwardYaw": 79.28,
   "distance": 1
  },
  {
   "yaw": -1.03,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_37D3FFC9_23D3_C001_41B2_070EBD681BA9",
   "backwardYaw": -0.65,
   "distance": 1
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_30BBC923_23D3_4002_417D_576254F701F0_t.jpg",
 "hfovMax": 130
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "displayOriginPosition": {
  "yaw": 0,
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "stereographicFactor": 1,
  "pitch": -90
 },
 "id": "panorama_37D3FFC9_23D3_C001_41B2_070EBD681BA9_camera",
 "class": "PanoramaCamera",
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "duration": 3000,
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "cubic_in_out",
   "targetPitch": 0
  }
 ],
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": 179.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_29D5CA86_26F0_56A4_419D_DCAFFDEAD7B9",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30E7CC7C_23D3_4006_41B6_94E8F9557C89_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_30E7CC7C_23D3_4006_41B6_94E8F9557C89_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30E7CC7C_23D3_4006_41B6_94E8F9557C89_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_30E7CC7C_23D3_4006_41B6_94E8F9557C89_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30E7CC7C_23D3_4006_41B6_94E8F9557C89_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_30E7CC7C_23D3_4006_41B6_94E8F9557C89_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30E7CC7C_23D3_4006_41B6_94E8F9557C89_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_30E7CC7C_23D3_4006_41B6_94E8F9557C89_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30E7CC7C_23D3_4006_41B6_94E8F9557C89_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_30E7CC7C_23D3_4006_41B6_94E8F9557C89_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_30E7CC7C_23D3_4006_41B6_94E8F9557C89_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30E7CC7C_23D3_4006_41B6_94E8F9557C89_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_30E7CC7C_23D3_4006_41B6_94E8F9557C89_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "150%",
 "id": "panorama_30E7CC7C_23D3_4006_41B6_94E8F9557C89",
 "label": "Kitchen",
 "overlays": [
  "this.overlay_3A45B8C4_2451_4006_41B3_6C3E0D54A811",
  "this.overlay_389D697A_2451_C002_41B6_5DB7187A73EA",
  "this.overlay_3F9C0238_2456_C00E_41C1_B7E214BD5D9C"
 ],
 "partial": false,
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3608E48C_23D2_C006_41A7_873AF3CD8BDA"
  },
  {
   "yaw": -128.62,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3047CF2F_23D3_4002_419A_CB44D8511577",
   "backwardYaw": 42.79,
   "distance": 1
  },
  {
   "yaw": 44.22,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3084C678_23D3_400E_41B3_7F382DA76EC4",
   "backwardYaw": -57.12,
   "distance": 1
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_30E7CC7C_23D3_4006_41B6_94E8F9557C89_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3608E48C_23D2_C006_41A7_873AF3CD8BDA_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3608E48C_23D2_C006_41A7_873AF3CD8BDA_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3608E48C_23D2_C006_41A7_873AF3CD8BDA_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3608E48C_23D2_C006_41A7_873AF3CD8BDA_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3608E48C_23D2_C006_41A7_873AF3CD8BDA_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3608E48C_23D2_C006_41A7_873AF3CD8BDA_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3608E48C_23D2_C006_41A7_873AF3CD8BDA_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3608E48C_23D2_C006_41A7_873AF3CD8BDA_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3608E48C_23D2_C006_41A7_873AF3CD8BDA_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3608E48C_23D2_C006_41A7_873AF3CD8BDA_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3608E48C_23D2_C006_41A7_873AF3CD8BDA_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3608E48C_23D2_C006_41A7_873AF3CD8BDA_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3608E48C_23D2_C006_41A7_873AF3CD8BDA_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "150%",
 "id": "panorama_3608E48C_23D2_C006_41A7_873AF3CD8BDA",
 "label": "Entrance 2",
 "overlays": [
  "this.overlay_38C153B8_23D7_400F_4195_7F19DB9BA9E0",
  "this.overlay_34EB3E41_23D1_407E_41B2_36B1DBC5AF45"
 ],
 "partial": false,
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "yaw": -68.32,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30DF61F2_23D3_4002_41B2_E2751DC62B8A",
   "backwardYaw": 92.96,
   "distance": 1
  },
  {
   "yaw": 92.96,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_37D3FFC9_23D3_C001_41B2_070EBD681BA9",
   "backwardYaw": -58.77,
   "distance": 1
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3608E48C_23D2_C006_41A7_873AF3CD8BDA_t.jpg",
 "hfovMax": 130
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_30BBC923_23D3_4002_417D_576254F701F0_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "camera": "this.panorama_37D3FFC9_23D3_C001_41B2_070EBD681BA9_camera",
   "media": "this.panorama_37D3FFC9_23D3_C001_41B2_070EBD681BA9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_3608E48C_23D2_C006_41A7_873AF3CD8BDA_camera",
   "media": "this.panorama_3608E48C_23D2_C006_41A7_873AF3CD8BDA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_30DF61F2_23D3_4002_41B2_E2751DC62B8A_camera",
   "media": "this.panorama_30DF61F2_23D3_4002_41B2_E2751DC62B8A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_3047CF2F_23D3_4002_419A_CB44D8511577_camera",
   "media": "this.panorama_3047CF2F_23D3_4002_419A_CB44D8511577",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_30E7CC7C_23D3_4006_41B6_94E8F9557C89_camera",
   "media": "this.panorama_30E7CC7C_23D3_4006_41B6_94E8F9557C89",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_30BBC923_23D3_4002_417D_576254F701F0_camera",
   "media": "this.panorama_30BBC923_23D3_4002_417D_576254F701F0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_3084C678_23D3_400E_41B3_7F382DA76EC4_camera",
   "media": "this.panorama_3084C678_23D3_400E_41B3_7F382DA76EC4",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3084C678_23D3_400E_41B3_7F382DA76EC4_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37D3FFC9_23D3_C001_41B2_070EBD681BA9_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_37D3FFC9_23D3_C001_41B2_070EBD681BA9_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37D3FFC9_23D3_C001_41B2_070EBD681BA9_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_37D3FFC9_23D3_C001_41B2_070EBD681BA9_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37D3FFC9_23D3_C001_41B2_070EBD681BA9_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_37D3FFC9_23D3_C001_41B2_070EBD681BA9_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37D3FFC9_23D3_C001_41B2_070EBD681BA9_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_37D3FFC9_23D3_C001_41B2_070EBD681BA9_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37D3FFC9_23D3_C001_41B2_070EBD681BA9_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_37D3FFC9_23D3_C001_41B2_070EBD681BA9_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_37D3FFC9_23D3_C001_41B2_070EBD681BA9_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37D3FFC9_23D3_C001_41B2_070EBD681BA9_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_37D3FFC9_23D3_C001_41B2_070EBD681BA9_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "150%",
 "id": "panorama_37D3FFC9_23D3_C001_41B2_070EBD681BA9",
 "label": "Entrance",
 "overlays": [
  "this.overlay_3B3602FE_23F2_C002_41BB_E1BB48CDCF96",
  "this.overlay_363C677C_23F7_4006_41B0_0417237B0EBD",
  "this.overlay_393EC6C7_23D6_C002_41A4_D41F7D31127C"
 ],
 "partial": false,
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "yaw": -69.07,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30DF61F2_23D3_4002_41B2_E2751DC62B8A",
   "backwardYaw": 93.92,
   "distance": 1
  },
  {
   "yaw": -58.77,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3608E48C_23D2_C006_41A7_873AF3CD8BDA",
   "backwardYaw": 92.96,
   "distance": 1
  },
  {
   "yaw": -0.65,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30BBC923_23D3_4002_417D_576254F701F0",
   "backwardYaw": -1.03,
   "distance": 1
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_37D3FFC9_23D3_C001_41B2_070EBD681BA9_t.jpg",
 "hfovMax": 130
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": -135.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2A618AF1_26F0_567C_41B3_48B57407AA78",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": 122.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_295D2ABB_26F0_56EC_41BE_80EEBB79CB98",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": 130.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_29F3AA7A_26F0_566C_419C_EC7E264B33D0",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": -156.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_294CAAC1_26F0_569C_419E_5970629004A3",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": -100.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_29E5AA80_26F0_569C_4190_9AB4542AAD9C",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": -146.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2A65BAEA_26F0_566C_418A_E5ED4F2F4530",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3084C678_23D3_400E_41B3_7F382DA76EC4_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3084C678_23D3_400E_41B3_7F382DA76EC4_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3084C678_23D3_400E_41B3_7F382DA76EC4_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3084C678_23D3_400E_41B3_7F382DA76EC4_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3084C678_23D3_400E_41B3_7F382DA76EC4_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3084C678_23D3_400E_41B3_7F382DA76EC4_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3084C678_23D3_400E_41B3_7F382DA76EC4_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3084C678_23D3_400E_41B3_7F382DA76EC4_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3084C678_23D3_400E_41B3_7F382DA76EC4_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3084C678_23D3_400E_41B3_7F382DA76EC4_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3084C678_23D3_400E_41B3_7F382DA76EC4_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3084C678_23D3_400E_41B3_7F382DA76EC4_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3084C678_23D3_400E_41B3_7F382DA76EC4_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "150%",
 "id": "panorama_3084C678_23D3_400E_41B3_7F382DA76EC4",
 "label": "Dining",
 "overlays": [
  "this.overlay_39395D5D_2453_4006_41B0_F6340CAB9C3F",
  "this.overlay_3BACF387_2453_C002_41BB_6F2C53657271",
  "this.overlay_3A5C2B60_2451_403E_41AD_51441370FF76",
  "this.overlay_3A6A503E_2451_4002_41B3_4904CCC0E7E0"
 ],
 "partial": false,
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "yaw": -111.79,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30DF61F2_23D3_4002_41B2_E2751DC62B8A",
   "backwardYaw": 23.62,
   "distance": 1
  },
  {
   "yaw": -49.68,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3047CF2F_23D3_4002_419A_CB44D8511577",
   "backwardYaw": 33.03,
   "distance": 1
  },
  {
   "yaw": -57.12,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30E7CC7C_23D3_4006_41B6_94E8F9557C89",
   "backwardYaw": 44.22,
   "distance": 1
  },
  {
   "yaw": 79.28,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30BBC923_23D3_4002_417D_576254F701F0",
   "backwardYaw": 58.97,
   "distance": 1
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3084C678_23D3_400E_41B3_7F382DA76EC4_t.jpg",
 "hfovMax": 130
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": -137.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_296AEAB4_26F0_56E4_41BB_9F6A72172BEB",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3047CF2F_23D3_4002_419A_CB44D8511577_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3047CF2F_23D3_4002_419A_CB44D8511577_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3047CF2F_23D3_4002_419A_CB44D8511577_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3047CF2F_23D3_4002_419A_CB44D8511577_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3047CF2F_23D3_4002_419A_CB44D8511577_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3047CF2F_23D3_4002_419A_CB44D8511577_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3047CF2F_23D3_4002_419A_CB44D8511577_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3047CF2F_23D3_4002_419A_CB44D8511577_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3047CF2F_23D3_4002_419A_CB44D8511577_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3047CF2F_23D3_4002_419A_CB44D8511577_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3047CF2F_23D3_4002_419A_CB44D8511577_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3047CF2F_23D3_4002_419A_CB44D8511577_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3047CF2F_23D3_4002_419A_CB44D8511577_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "150%",
 "id": "panorama_3047CF2F_23D3_4002_419A_CB44D8511577",
 "label": "Kitchen Island",
 "overlays": [
  "this.overlay_391982CB_2453_4002_41C1_1D27AE926C06",
  "this.overlay_043F7987_2451_4002_41BC_CB0E56FBDF75"
 ],
 "partial": false,
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "yaw": 42.79,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_30E7CC7C_23D3_4006_41B6_94E8F9557C89",
   "backwardYaw": -128.62,
   "distance": 1
  },
  {
   "yaw": 33.03,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3084C678_23D3_400E_41B3_7F382DA76EC4",
   "backwardYaw": -49.68,
   "distance": 1
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3047CF2F_23D3_4002_419A_CB44D8511577_t.jpg",
 "hfovMax": 130
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": -121.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2A5BAAF7_26F0_5664_4178_72BACD96CFEC",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": -87.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_29B64A93_26F0_56BC_41C2_97E37A7A86B3",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30DF61F2_23D3_4002_41B2_E2751DC62B8A_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_30DF61F2_23D3_4002_41B2_E2751DC62B8A_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30DF61F2_23D3_4002_41B2_E2751DC62B8A_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_30DF61F2_23D3_4002_41B2_E2751DC62B8A_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30DF61F2_23D3_4002_41B2_E2751DC62B8A_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_30DF61F2_23D3_4002_41B2_E2751DC62B8A_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30DF61F2_23D3_4002_41B2_E2751DC62B8A_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_30DF61F2_23D3_4002_41B2_E2751DC62B8A_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30DF61F2_23D3_4002_41B2_E2751DC62B8A_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_30DF61F2_23D3_4002_41B2_E2751DC62B8A_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_30DF61F2_23D3_4002_41B2_E2751DC62B8A_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30DF61F2_23D3_4002_41B2_E2751DC62B8A_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_30DF61F2_23D3_4002_41B2_E2751DC62B8A_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "150%",
 "id": "panorama_30DF61F2_23D3_4002_41B2_E2751DC62B8A",
 "label": "Entrance to dining",
 "overlays": [
  "this.overlay_3867E512_23D1_4002_41AD_2EACBE84CD6C",
  "this.overlay_3CD134B6_2451_4003_41BF_DAC9D33FA10A",
  "this.overlay_3D58ED48_2451_C00E_41AB_3E80B83BDB38"
 ],
 "partial": false,
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "yaw": 23.62,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3084C678_23D3_400E_41B3_7F382DA76EC4",
   "backwardYaw": -111.79,
   "distance": 1
  },
  {
   "yaw": 92.96,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3608E48C_23D2_C006_41A7_873AF3CD8BDA",
   "backwardYaw": -68.32,
   "distance": 1
  },
  {
   "yaw": 93.92,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_37D3FFC9_23D3_C001_41B2_070EBD681BA9",
   "backwardYaw": -69.07,
   "distance": 1
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_30DF61F2_23D3_4002_41B2_E2751DC62B8A_t.jpg",
 "hfovMax": 130
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": 121.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_280ECA6C_26F0_5664_41B0_E533C530C15C",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": 178.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_29A69A9A_26F0_56AC_4175_305D7A55E956",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "camera": "this.panorama_37D3FFC9_23D3_C001_41B2_070EBD681BA9_camera",
   "media": "this.panorama_37D3FFC9_23D3_C001_41B2_070EBD681BA9",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_3608E48C_23D2_C006_41A7_873AF3CD8BDA_camera",
   "media": "this.panorama_3608E48C_23D2_C006_41A7_873AF3CD8BDA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_30DF61F2_23D3_4002_41B2_E2751DC62B8A_camera",
   "media": "this.panorama_30DF61F2_23D3_4002_41B2_E2751DC62B8A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_3047CF2F_23D3_4002_419A_CB44D8511577_camera",
   "media": "this.panorama_3047CF2F_23D3_4002_419A_CB44D8511577",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_30E7CC7C_23D3_4006_41B6_94E8F9557C89_camera",
   "media": "this.panorama_30E7CC7C_23D3_4006_41B6_94E8F9557C89",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_30BBC923_23D3_4002_417D_576254F701F0_camera",
   "media": "this.panorama_30BBC923_23D3_4002_417D_576254F701F0",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_3084C678_23D3_400E_41B3_7F382DA76EC4_camera",
   "media": "this.panorama_3084C678_23D3_400E_41B3_7F382DA76EC4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": -86.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_29C4BA8D_26F0_56A4_41B9_6ED070897E75",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": 51.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_28033A73_26F0_567C_41C2_A3C6C34BF2EB",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": 111.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2988FAA7_26F0_56E4_4190_0F8144799E71",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": 110.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_297AEAAD_26F0_56E4_41C3_6666F46C373A",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_30DF61F2_23D3_4002_41B2_E2751DC62B8A_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": -87.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_281E1A63_26F0_519D_41C1_F854B85D65FD",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPanoramaPlayer",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "mouseControlMode": "drag_acceleration",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "touchControlMode": "drag_rotation",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "gyroscopeEnabled": true,
 "class": "PanoramaPlayer"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": 68.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_29989AA1_26F0_569C_41A4_F839380AD242",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_356F6C33_245A_BC2F_417F_504D349CDFC3.ogg",
  "mp3Url": "media/audio_356F6C33_245A_BC2F_417F_504D349CDFC3.mp3",
  "class": "AudioResource"
 },
 "id": "audio_356F6C33_245A_BC2F_417F_504D349CDFC3",
 "class": "MediaAudio",
 "data": {
  "label": "abassel"
 }
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3608E48C_23D2_C006_41A7_873AF3CD8BDA_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_30E7CC7C_23D3_4006_41B6_94E8F9557C89_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3047CF2F_23D3_4002_419A_CB44D8511577_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "left": 0,
 "progressBarBorderSize": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "id": "MainViewer",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "width": "100%",
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarBorderRadius": 0,
 "minHeight": 50,
 "toolTipShadowOpacity": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "transitionDuration": 500,
 "minWidth": 100,
 "toolTipFontFamily": "Georgia",
 "propagateClick": true,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "borderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#000000",
 "class": "ViewerArea",
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 10,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "displayTooltipInTouchScreens": true,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "transitionMode": "blending",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "top": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarLeft": 0,
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "playbackBarHeadOpacity": 1,
 "paddingTop": 0,
 "toolTipBorderColor": "#767676",
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "toolTipShadowSpread": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 13,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBackgroundColorDirection": "vertical",
 "data": {
  "name": "Main Viewer"
 },
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6
},
{
 "children": [
  "this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
  "this.Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
  "this.Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83"
 ],
 "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
 "left": 70,
 "width": 550,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "propagateClick": true,
 "minWidth": 1,
 "height": 98,
 "top": 34,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "--STICKER"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 58,
 "right": "1.27%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "bottom": "2.51%",
 "propagateClick": true,
 "minWidth": 1,
 "height": 58,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "data": {
  "name": "IconButton VR"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "cursor": "hand"
},
{
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "right": "0%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "paddingLeft": 0,
 "minWidth": 1,
 "height": 641,
 "top": "0%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "-- SETTINGS"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "id": "Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
 "left": "0%",
 "width": 330,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "minWidth": 1,
 "height": "100%",
 "top": "0%",
 "creationPolicy": "inAdvance",
 "gap": 10,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "right": "0%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "bottom": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "--INFO photo"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "right": "0%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "bottom": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "right": "0%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "bottom": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "--LOCATION"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "right": "0%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "bottom": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "--FLOORPLAN"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "right": "0%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "bottom": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
  "this.Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C"
 ],
 "id": "Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
 "left": "0%",
 "right": "0%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "bottom": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "--REALTOR"
 },
 "visible": false,
 "scrollBarColor": "#04A3E1",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_50F91F27_424B_0C40_41C3_4AC948480017",
  "this.Container_546964AC_4259_1C47_41B4_89BC8EEE450A"
 ],
 "id": "Container_50E57579_424B_1CC1_41C7_2A7D7DE232E6",
 "left": "0%",
 "width": "5.247%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "bottom": "3.14%",
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "height": "43.457%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Container7538"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_4DF6648C_43C9_009F_41B4_06D470FF1669",
  "this.Container_4D37021E_43C9_03B8_41CC_28E8F98A7511"
 ],
 "id": "Container_58B883FD_4396_7C5F_41B3_61F626F14414",
 "left": "7.24%",
 "width": "76.357%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "bottom": "3.04%",
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "height": "76.859%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Container4248"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "minWidth": 1,
 "height": 58,
 "mode": "toggle",
 "borderSize": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "data": {
  "name": "IconButton MUTE"
 },
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed_rollover.png"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "minWidth": 1,
 "height": 58,
 "mode": "toggle",
 "borderSize": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed_rollover.png"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.42,
   "yaw": -1.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30BBC923_23D3_4002_417D_576254F701F0_1_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.05
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_37D3FFC9_23D3_C001_41B2_070EBD681BA9, this.camera_29D5CA86_26F0_56A4_419D_DCAFFDEAD7B9); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2852BA38_26F0_51EC_41B8_9A436089186F",
   "pitch": -12.05,
   "hfov": 12.42,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -1.03,
   "distance": 100
  }
 ],
 "id": "overlay_39B290F7_2457_C002_41C0_D150906B5770",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.53,
   "yaw": 58.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30BBC923_23D3_4002_417D_576254F701F0_1_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.35
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3084C678_23D3_400E_41B3_7F382DA76EC4, this.camera_29E5AA80_26F0_569C_4190_9AB4542AAD9C); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_28527A38_26F0_51EC_41BB_69ADFFFA7119",
   "pitch": -9.35,
   "hfov": 12.53,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 58.97,
   "distance": 100
  }
 ],
 "id": "overlay_3DDC605D_2456_C006_41AE_DEC381D178A5",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.89,
   "yaw": 44.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30E7CC7C_23D3_4006_41B6_94E8F9557C89_1_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.62
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3084C678_23D3_400E_41B3_7F382DA76EC4, this.camera_295D2ABB_26F0_56EC_41BE_80EEBB79CB98); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_28554A37_26F0_51E4_41B7_3A07374AB83B",
   "pitch": -20.62,
   "hfov": 11.89,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 44.22,
   "distance": 100
  }
 ],
 "id": "overlay_3A45B8C4_2451_4006_41B3_6C3E0D54A811",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.66,
   "yaw": -128.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30E7CC7C_23D3_4006_41B6_94E8F9557C89_1_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.38
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3047CF2F_23D3_4002_419A_CB44D8511577, this.camera_296AEAB4_26F0_56E4_41BB_9F6A72172BEB); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_28550A37_26F0_51E4_4195_C546958068B8",
   "pitch": -23.38,
   "hfov": 11.66,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -128.62,
   "distance": 100
  }
 ],
 "id": "overlay_389D697A_2451_C002_41B6_5DB7187A73EA",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.43,
   "yaw": 68.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30E7CC7C_23D3_4006_41B6_94E8F9557C89_1_HS_2_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.82
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2852EA38_26F0_51EC_41A5_1EED546BAA7C",
   "pitch": -11.82,
   "hfov": 12.43,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 68.29,
   "distance": 100
  }
 ],
 "id": "overlay_3F9C0238_2456_C00E_41C1_B7E214BD5D9C",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.85,
   "yaw": -68.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3608E48C_23D2_C006_41A7_873AF3CD8BDA_1_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.13
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30DF61F2_23D3_4002_41B2_E2751DC62B8A, this.camera_281E1A63_26F0_519D_41C1_F854B85D65FD); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2857EA31_26F0_51FC_419A_FBD7F5CFFF9F",
   "pitch": -21.13,
   "hfov": 11.85,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -68.32,
   "distance": 100
  }
 ],
 "id": "overlay_38C153B8_23D7_400F_4195_7F19DB9BA9E0",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.98,
   "yaw": 92.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3608E48C_23D2_C006_41A7_873AF3CD8BDA_1_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.38
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_37D3FFC9_23D3_C001_41B2_070EBD681BA9, this.camera_280ECA6C_26F0_5664_41B0_E533C530C15C); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_28574A32_26F0_51FC_41A4_7CC4DDDA923A",
   "pitch": -19.38,
   "hfov": 11.98,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 92.96,
   "distance": 100
  }
 ],
 "id": "overlay_34EB3E41_23D1_407E_41B2_36B1DBC5AF45",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.53,
   "yaw": -69.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37D3FFC9_23D3_C001_41B2_070EBD681BA9_1_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.54
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30DF61F2_23D3_4002_41B2_E2751DC62B8A, this.camera_29C4BA8D_26F0_56A4_41B9_6ED070897E75); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2856DA30_26F0_51FC_419E_68B441031EF8",
   "pitch": -9.54,
   "hfov": 12.53,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -69.07,
   "distance": 100
  }
 ],
 "id": "overlay_3B3602FE_23F2_C002_41BB_E1BB48CDCF96",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.23,
   "yaw": -58.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37D3FFC9_23D3_C001_41B2_070EBD681BA9_1_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.62
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3608E48C_23D2_C006_41A7_873AF3CD8BDA, this.camera_29B64A93_26F0_56BC_41C2_97E37A7A86B3); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_28566A31_26F0_51FC_41BB_AA34D236442A",
   "pitch": -15.62,
   "hfov": 12.23,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -58.77,
   "distance": 100
  }
 ],
 "id": "overlay_363C677C_23F7_4006_41B0_0417237B0EBD",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.61,
   "yaw": -0.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_37D3FFC9_23D3_C001_41B2_070EBD681BA9_1_HS_2_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.99
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30BBC923_23D3_4002_417D_576254F701F0, this.camera_29A69A9A_26F0_56AC_4175_305D7A55E956); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_28562A31_26F0_51FC_415A_A8D22CD87F8A",
   "pitch": -6.99,
   "hfov": 12.61,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -0.65,
   "distance": 100
  }
 ],
 "id": "overlay_393EC6C7_23D6_C002_41A4_D41F7D31127C",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.7,
   "yaw": -111.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3084C678_23D3_400E_41B3_7F382DA76EC4_1_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.88
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30DF61F2_23D3_4002_41B2_E2751DC62B8A, this.camera_294CAAC1_26F0_569C_419E_5970629004A3); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2853DA38_26F0_51EC_41B8_3C669297A4CA",
   "pitch": -22.88,
   "hfov": 11.7,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -111.79,
   "distance": 100
  }
 ],
 "id": "overlay_39395D5D_2453_4006_41B0_F6340CAB9C3F",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.46,
   "yaw": -49.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3084C678_23D3_400E_41B3_7F382DA76EC4_1_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.12
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3047CF2F_23D3_4002_419A_CB44D8511577, this.camera_2A65BAEA_26F0_566C_418A_E5ED4F2F4530); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_28539A38_26F0_51EC_41B9_B17A79BC011C",
   "pitch": -11.12,
   "hfov": 12.46,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -49.68,
   "distance": 100
  }
 ],
 "id": "overlay_3BACF387_2453_C002_41BB_6F2C53657271",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.08,
   "yaw": -57.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3084C678_23D3_400E_41B3_7F382DA76EC4_1_HS_2_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30E7CC7C_23D3_4006_41B6_94E8F9557C89, this.camera_2A618AF1_26F0_567C_41B3_48B57407AA78); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2852DA38_26F0_51EC_41BB_6735FE752472",
   "pitch": -18,
   "hfov": 12.08,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -57.12,
   "distance": 100
  }
 ],
 "id": "overlay_3A5C2B60_2451_403E_41AD_51441370FF76",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.49,
   "yaw": 79.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3084C678_23D3_400E_41B3_7F382DA76EC4_1_HS_3_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.53
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30BBC923_23D3_4002_417D_576254F701F0, this.camera_2A5BAAF7_26F0_5664_4178_72BACD96CFEC); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_28529A38_26F0_51EC_416B_263276E2895E",
   "pitch": -10.53,
   "hfov": 12.49,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 79.28,
   "distance": 100
  }
 ],
 "id": "overlay_3A6A503E_2451_4002_41B3_4904CCC0E7E0",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.36,
   "yaw": 33.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3047CF2F_23D3_4002_419A_CB44D8511577_1_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.36
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3084C678_23D3_400E_41B3_7F382DA76EC4, this.camera_29F3AA7A_26F0_566C_419C_EC7E264B33D0); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_28542A37_26F0_51E4_41C1_2232EDC3FCA5",
   "pitch": -13.36,
   "hfov": 12.36,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 33.03,
   "distance": 100
  }
 ],
 "id": "overlay_391982CB_2453_4002_41C1_1D27AE926C06",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.71,
   "yaw": 42.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3047CF2F_23D3_4002_419A_CB44D8511577_1_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.84
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30E7CC7C_23D3_4006_41B6_94E8F9557C89, this.camera_28033A73_26F0_567C_41C2_A3C6C34BF2EB); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2855EA37_26F0_51E4_41A4_80BB054286FB",
   "pitch": -22.84,
   "hfov": 11.71,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 42.79,
   "distance": 100
  }
 ],
 "id": "overlay_043F7987_2451_4002_41BC_CB0E56FBDF75",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.74,
   "yaw": 23.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30DF61F2_23D3_4002_41B2_E2751DC62B8A_1_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.39
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3084C678_23D3_400E_41B3_7F382DA76EC4, this.camera_29989AA1_26F0_569C_41A4_F839380AD242); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_28571A32_26F0_51FC_41B0_06D21296ABF0",
   "pitch": -22.39,
   "hfov": 11.74,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 23.62,
   "distance": 100
  }
 ],
 "id": "overlay_3867E512_23D1_4002_41AD_2EACBE84CD6C",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.64,
   "yaw": 92.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30DF61F2_23D3_4002_41B2_E2751DC62B8A_1_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.65
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3608E48C_23D2_C006_41A7_873AF3CD8BDA, this.camera_2988FAA7_26F0_56E4_4190_0F8144799E71); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2854FA37_26F0_51E4_41AB_5ABFE21C028B",
   "pitch": -23.65,
   "hfov": 11.64,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 92.96,
   "distance": 100
  }
 ],
 "id": "overlay_3CD134B6_2451_4003_41BF_DAC9D33FA10A",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.4,
   "yaw": 93.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30DF61F2_23D3_4002_41B2_E2751DC62B8A_1_HS_2_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.59
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_37D3FFC9_23D3_C001_41B2_070EBD681BA9, this.camera_297AEAAD_26F0_56E4_41C3_6666F46C373A); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2854BA37_26F0_51E4_41B8_0D45162ED053",
   "pitch": -12.59,
   "hfov": 12.4,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 93.92,
   "distance": 100
  }
 ],
 "id": "overlay_3D58ED48_2451_C00E_41AB_3E80B83BDB38",
 "class": "HotspotPanoramaOverlay"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "minWidth": 1,
 "height": 58,
 "mode": "toggle",
 "borderSize": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "data": {
  "name": "IconButton HS "
 },
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed_rollover.png"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "minWidth": 1,
 "height": 58,
 "mode": "toggle",
 "borderSize": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "data": {
  "name": "IconButton GYRO"
 },
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed_rollover.png"
},
{
 "shadow": true,
 "layout": "absolute",
 "shadowSpread": 1,
 "children": [
  "this.Image_4EE5F6BF_41A0_81CB_41B1_1DE1A6565D38"
 ],
 "shadowBlurRadius": 7,
 "id": "Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
 "left": "0.18%",
 "width": 314,
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "minWidth": 1,
 "propagateClick": true,
 "top": 0,
 "gap": 10,
 "borderSize": 0,
 "height": 42,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "white block"
 },
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "layout": "absolute",
 "shadowSpread": 1,
 "children": [
  "this.Image_4ED9537E_41A1_874A_41C1_08E8B3C9B069",
  "this.Image_588A0363_41A0_877B_41C3_5D919767CB3D",
  "this.Image_5963ECFE_41A7_814A_41B1_28ADA8FA79F2",
  "this.Image_59FD31E7_41A1_837B_41CA_5FDA1A844094",
  "this.Image_5B84D225_41A1_80FE_4182_5744BD082173",
  "this.Image_5BF1307D_41E0_814E_41C3_7BE679482BFB"
 ],
 "shadowBlurRadius": 7,
 "id": "Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
 "left": 0,
 "width": 314,
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "bottom": 1,
 "backgroundColorRatios": [
  0.01
 ],
 "backgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "height": 53,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "visible": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "blue block"
 },
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
 "left": 10,
 "width": 391,
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "text": "LOREM IPSUM",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "minWidth": 1,
 "height": 75,
 "top": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Label",
 "fontSize": 61,
 "fontColor": "#000000",
 "fontStyle": "italic",
 "visible": false,
 "horizontalAlign": "left",
 "data": {
  "name": "text 1"
 },
 "fontWeight": "bold",
 "shadow": false
},
{
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "right": "0%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "paddingLeft": 0,
 "minWidth": 1,
 "height": 110,
 "top": "0%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "button menu sup"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "center",
 "layout": "horizontal",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.Image_4D3870DF_4257_15C2_41C3_D3DCF8869E88",
  "this.Image_5244FDC1_4259_0FC1_416D_239F8C833A78"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "width": "91.304%",
 "right": "0%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "bottom": "0%",
 "minWidth": 1,
 "propagateClick": true,
 "gap": 3,
 "borderSize": 0,
 "height": "85.959%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "-button set"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "center",
 "layout": "vertical",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "left": "0%",
 "width": 66,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "minWidth": 1,
 "height": "100%",
 "top": "0%",
 "gap": 10,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "- COLLAPSE"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
  "this.HTMLText_4E82D1A1_41A0_83F6_41C1_8F0D3A250167"
 ],
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "width": 330,
 "right": 0,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "propagateClick": false,
 "minWidth": 1,
 "height": "100%",
 "top": "0%",
 "gap": 10,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "- EXPANDED"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "layout": "horizontal",
 "shadowSpread": 1,
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "shadowBlurRadius": 25,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "right": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "10%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "right": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 20,
 "verticalAlign": "top",
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "bottom": "80%",
 "propagateClick": false,
 "minWidth": 1,
 "top": "10%",
 "gap": 10,
 "borderSize": 0,
 "paddingTop": 20,
 "paddingBottom": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Container X global"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "right",
 "layout": "vertical",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "layout": "absolute",
 "shadowSpread": 1,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "shadowBlurRadius": 25,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "right": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "paddingLeft": 0,
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "10%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "layout": "horizontal",
 "shadowSpread": 1,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "shadowBlurRadius": 25,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "right": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "10%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "right": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 20,
 "verticalAlign": "top",
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "bottom": "80%",
 "propagateClick": true,
 "minWidth": 1,
 "top": "10%",
 "gap": 10,
 "borderSize": 0,
 "paddingTop": 20,
 "paddingBottom": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Container X global"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "right",
 "layout": "vertical",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "layout": "absolute",
 "shadowSpread": 1,
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "shadowBlurRadius": 25,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "right": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "paddingLeft": 0,
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "10%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "layout": "vertical",
 "shadowSpread": 1,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "shadowBlurRadius": 25,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "right": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "paddingLeft": 0,
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "10%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "layout": "horizontal",
 "shadowSpread": 1,
 "children": [
  "this.Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
  "this.Container_1E19D23C_57F1_802D_41B0_92437DF80B82"
 ],
 "shadowBlurRadius": 25,
 "id": "Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
 "left": "15%",
 "right": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "bottom": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "verticalAlign": "top",
 "shadowHorizontalLength": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "10%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF"
 ],
 "id": "Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C",
 "left": "15%",
 "right": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 20,
 "verticalAlign": "top",
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "bottom": "80%",
 "propagateClick": false,
 "minWidth": 1,
 "top": "10%",
 "gap": 10,
 "borderSize": 0,
 "paddingTop": 20,
 "paddingBottom": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Container X global"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "right",
 "layout": "vertical",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_2B90E40F_3593_B9CB_41B4_408768336038"
 ],
 "id": "Container_50F91F27_424B_0C40_41C3_4AC948480017",
 "left": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "bottom": "0%",
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "height": "21.928%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Container8437"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Image_4D3C7CFD_4392_045F_41BD_B71D1DBE1518",
  "this.Image_4D2F7E58_4392_07A5_41C0_C535119A8467",
  "this.IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F"
 ],
 "id": "Container_546964AC_4259_1C47_41B4_89BC8EEE450A",
 "left": "0%",
 "width": "71.91%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "bottom": "23.39%",
 "minWidth": 1,
 "propagateClick": false,
 "gap": 10,
 "borderSize": 0,
 "height": "48.2%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Container9886"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Image_5617B085_43AE_1CAE_41CC_8FF53A5EBA65"
 ],
 "id": "Container_4DF6648C_43C9_009F_41B4_06D470FF1669",
 "left": "0%",
 "width": "66.351%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "minWidth": 1,
 "height": "100%",
 "top": "0%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Container3396"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Image_58A0CA8B_4392_0CBA_41A3_BAE15310237F"
 ],
 "id": "Container_4D37021E_43C9_03B8_41CC_28E8F98A7511",
 "left": "0%",
 "width": "77.883%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "minWidth": 1,
 "height": "98.501%",
 "top": "0%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Container3434"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30BBC923_23D3_4002_417D_576254F701F0_1_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_2852BA38_26F0_51EC_41B8_9A436089186F",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30BBC923_23D3_4002_417D_576254F701F0_1_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_28527A38_26F0_51EC_41BB_69ADFFFA7119",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30E7CC7C_23D3_4006_41B6_94E8F9557C89_1_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_28554A37_26F0_51E4_41B7_3A07374AB83B",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30E7CC7C_23D3_4006_41B6_94E8F9557C89_1_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_28550A37_26F0_51E4_4195_C546958068B8",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30E7CC7C_23D3_4006_41B6_94E8F9557C89_1_HS_2_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_2852EA38_26F0_51EC_41A5_1EED546BAA7C",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3608E48C_23D2_C006_41A7_873AF3CD8BDA_1_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_2857EA31_26F0_51FC_419A_FBD7F5CFFF9F",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3608E48C_23D2_C006_41A7_873AF3CD8BDA_1_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_28574A32_26F0_51FC_41A4_7CC4DDDA923A",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_37D3FFC9_23D3_C001_41B2_070EBD681BA9_1_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_2856DA30_26F0_51FC_419E_68B441031EF8",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_37D3FFC9_23D3_C001_41B2_070EBD681BA9_1_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_28566A31_26F0_51FC_41BB_AA34D236442A",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_37D3FFC9_23D3_C001_41B2_070EBD681BA9_1_HS_2_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_28562A31_26F0_51FC_415A_A8D22CD87F8A",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3084C678_23D3_400E_41B3_7F382DA76EC4_1_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_2853DA38_26F0_51EC_41B8_3C669297A4CA",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3084C678_23D3_400E_41B3_7F382DA76EC4_1_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_28539A38_26F0_51EC_41B9_B17A79BC011C",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3084C678_23D3_400E_41B3_7F382DA76EC4_1_HS_2_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_2852DA38_26F0_51EC_41BB_6735FE752472",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3084C678_23D3_400E_41B3_7F382DA76EC4_1_HS_3_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_28529A38_26F0_51EC_416B_263276E2895E",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3047CF2F_23D3_4002_419A_CB44D8511577_1_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_28542A37_26F0_51E4_41C1_2232EDC3FCA5",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3047CF2F_23D3_4002_419A_CB44D8511577_1_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_2855EA37_26F0_51E4_41A4_80BB054286FB",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30DF61F2_23D3_4002_41B2_E2751DC62B8A_1_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_28571A32_26F0_51FC_41B0_06D21296ABF0",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30DF61F2_23D3_4002_41B2_E2751DC62B8A_1_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_2854FA37_26F0_51E4_41AB_5ABFE21C028B",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_30DF61F2_23D3_4002_41B2_E2751DC62B8A_1_HS_2_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 930
  }
 ],
 "id": "AnimatedImageResource_2854BA37_26F0_51E4_41B8_0D45162ED053",
 "rowCount": 6,
 "frameCount": 24
},
{
 "maxHeight": 59,
 "maxWidth": 635,
 "id": "Image_4EE5F6BF_41A0_81CB_41B1_1DE1A6565D38",
 "left": "0%",
 "width": "100%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_4EE5F6BF_41A0_81CB_41B1_1DE1A6565D38.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "bottom": "8.75%",
 "propagateClick": false,
 "minWidth": 1,
 "height": "67.391%",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "ministry of revenue"
 },
 "visible": false,
 "horizontalAlign": "center",
 "shadow": false
},
{
 "maxHeight": 59,
 "maxWidth": 167,
 "id": "Image_4ED9537E_41A1_874A_41C1_08E8B3C9B069",
 "left": "0%",
 "width": "32.903%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_4ED9537E_41A1_874A_41C1_08E8B3C9B069.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "top": "19.43%",
 "propagateClick": false,
 "minWidth": 1,
 "height": "60.377%",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image5496"
 },
 "visible": false,
 "horizontalAlign": "center",
 "shadow": false
},
{
 "maxHeight": 59,
 "maxWidth": 469,
 "id": "Image_588A0363_41A0_877B_41C3_5D919767CB3D",
 "left": "0%",
 "width": "79.355%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_588A0363_41A0_877B_41C3_5D919767CB3D.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0%",
 "propagateClick": false,
 "minWidth": 1,
 "height": "98.113%",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image11167"
 },
 "visible": false,
 "horizontalAlign": "center",
 "shadow": false
},
{
 "maxHeight": 59,
 "maxWidth": 880,
 "id": "Image_5963ECFE_41A7_814A_41B1_28ADA8FA79F2",
 "left": "0%",
 "width": "100%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_5963ECFE_41A7_814A_41B1_28ADA8FA79F2.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0%",
 "propagateClick": false,
 "minWidth": 1,
 "height": "94.34%",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image11246"
 },
 "visible": false,
 "horizontalAlign": "center",
 "shadow": false
},
{
 "maxHeight": 59,
 "maxWidth": 321,
 "id": "Image_59FD31E7_41A1_837B_41CA_5FDA1A844094",
 "left": "0%",
 "width": "46.774%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_59FD31E7_41A1_837B_41CA_5FDA1A844094.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "top": "20.75%",
 "propagateClick": false,
 "minWidth": 1,
 "height": "47.17%",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image11319"
 },
 "visible": false,
 "horizontalAlign": "center",
 "shadow": false
},
{
 "maxHeight": 59,
 "maxWidth": 395,
 "id": "Image_5B84D225_41A1_80FE_4182_5744BD082173",
 "left": "0%",
 "width": "50.645%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_5B84D225_41A1_80FE_4182_5744BD082173.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "top": "16.98%",
 "propagateClick": false,
 "minWidth": 1,
 "height": "49.057%",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image11499"
 },
 "visible": false,
 "horizontalAlign": "center",
 "shadow": false
},
{
 "maxHeight": 59,
 "maxWidth": 396,
 "id": "Image_5BF1307D_41E0_814E_41C3_7BE679482BFB",
 "left": "0%",
 "width": "53.226%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_5BF1307D_41E0_814E_41C3_7BE679482BFB.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "top": "11.32%",
 "propagateClick": false,
 "minWidth": 1,
 "height": "62.264%",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image11621"
 },
 "visible": false,
 "horizontalAlign": "center",
 "shadow": false
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "minWidth": 1,
 "height": 60,
 "mode": "toggle",
 "borderSize": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "class": "IconButton",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "data": {
  "name": "image button menu"
 },
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed_rollover.png"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "Image_4D3870DF_4257_15C2_41C3_D3DCF8869E88",
 "width": "45.71%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_4D3870DF_4257_15C2_41C3_D3DCF8869E88.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "minWidth": 1,
 "height": "10.163%",
 "borderSize": 0,
 "paddingBottom": 0,
 "click": "this.openLink('http://https://www.instagram.com/mellacreatives/', '_blank')",
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image5138"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "Image_5244FDC1_4259_0FC1_416D_239F8C833A78",
 "width": "100%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_5244FDC1_4259_0FC1_416D_239F8C833A78.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "height": "8.167%",
 "borderSize": 0,
 "paddingBottom": 0,
 "click": "this.openLink('http://https://www.linkedin.com/company/mella-creative-studio/', '_blank')",
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image4905"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "cursor": "hand"
},
{
 "shadow": false,
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "width": 36,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.4,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "top": "0%",
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Container black"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 10,
 "width": 50,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "top": "40%",
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "bottom": "40%",
 "propagateClick": true,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "data": {
  "name": "IconButton arrow"
 },
 "shadow": false,
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "shadow": false,
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C"
 ],
 "left": "0%",
 "width": "90%",
 "id": "Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Container"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "width": 50,
 "right": 9,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "top": "40%",
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "bottom": "40%",
 "propagateClick": true,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "data": {
  "name": "IconButton collapse"
 },
 "shadow": false,
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "id": "HTMLText_4E82D1A1_41A0_83F6_41C1_8F0D3A250167",
 "width": "30.303%",
 "right": "0%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "propagateClick": false,
 "minWidth": 1,
 "height": "5.236%",
 "top": "5.97%",
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:1.05vmin;\"><BR STYLE=\"letter-spacing:0vmin;color:#000000;font-size:1.05vmin;font-family:'Segoe UI';\"/></p></div>",
 "data": {
  "name": "HTMLText5367"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "width": "85%",
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "width": "50%",
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 50,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 50,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 460,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 20,
 "paddingTop": 20,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "layout": "vertical",
 "scrollBarOpacity": 0.51
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "width": "25%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "propagateClick": false,
 "minWidth": 50,
 "height": "75%",
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "data": {
  "name": "X"
 },
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "shadow": false,
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed_rollover.jpg"
},
{
 "shadow": false,
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "height": 140,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "header"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "rollOverItemLabelFontColor": "#04A3E1",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "width": "100%",
 "itemBorderRadius": 0,
 "itemVerticalAlign": "top",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "itemPaddingLeft": 3,
 "verticalAlign": "middle",
 "paddingLeft": 70,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "itemMinHeight": 50,
 "itemOpacity": 1,
 "propagateClick": true,
 "minWidth": 1,
 "height": "92%",
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "itemThumbnailOpacity": 1,
 "itemMinWidth": 50,
 "borderSize": 0,
 "itemBackgroundColor": [],
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "itemPaddingRight": 3,
 "class": "ThumbnailGrid",
 "scrollBarColor": "#04A3E1",
 "itemHeight": 160,
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemLabelFontWeight": "normal",
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "scrollBarOpacity": 0.5,
 "rollOverItemThumbnailShadow": true,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 16,
 "itemThumbnailHeight": 125,
 "itemLabelGap": 7,
 "paddingRight": 70,
 "itemThumbnailShadow": false,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemLabelFontColor": "#666666",
 "borderRadius": 5,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "bottom": -0.2,
 "itemThumbnailWidth": 220,
 "itemMaxWidth": 1000,
 "itemBackgroundColorDirection": "vertical",
 "selectedItemThumbnailShadow": true,
 "gap": 26,
 "itemHorizontalAlign": "center",
 "paddingBottom": 70,
 "itemPaddingBottom": 3,
 "itemMaxHeight": 1000,
 "selectedItemLabelFontWeight": "bold",
 "itemWidth": 220,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "italic",
 "itemMode": "normal",
 "data": {
  "name": "ThumbnailList"
 },
 "horizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemLabelFontFamily": "Oswald",
 "itemThumbnailBorderRadius": 0
},
{
 "shadow": false,
 "width": "100%",
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "WebFrame",
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame"
 },
 "backgroundColorDirection": "vertical"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "width": "25%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "propagateClick": true,
 "minWidth": 50,
 "height": "75%",
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "data": {
  "name": "X"
 },
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "shadow": false,
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed_rollover.jpg"
},
{
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "left": 0,
 "progressBarBorderSize": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "id": "MapViewer",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "width": "100%",
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarBorderRadius": 0,
 "minHeight": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": true,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "borderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "height": "99.975%",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "class": "ViewerArea",
 "toolTipFontColor": "#606060",
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "displayTooltipInTouchScreens": true,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "transitionMode": "blending",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "top": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarLeft": 0,
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "playbackBarHeadOpacity": 1,
 "paddingTop": 0,
 "toolTipBorderColor": "#767676",
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBackgroundColorDirection": "vertical",
 "data": {
  "name": "Floor Plan"
 },
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6
},
{
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "propagateClick": true,
 "minWidth": 1,
 "height": 140,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "header"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "width": "100%",
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Container photo"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1"
 ],
 "width": "55%",
 "id": "Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
  "this.Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
  "this.Container_1E18523C_57F1_802D_41B1_88C86CD9A273"
 ],
 "width": "45%",
 "id": "Container_1E19D23C_57F1_802D_41B0_92437DF80B82",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 60,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 60,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 460,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 20,
 "paddingTop": 20,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "layout": "vertical",
 "scrollBarOpacity": 0.51
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF",
 "width": "25%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_rollover.jpg",
 "propagateClick": false,
 "minWidth": 50,
 "height": "75%",
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF.jpg",
 "data": {
  "name": "X"
 },
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_pressed.jpg",
 "shadow": false,
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_pressed_rollover.jpg"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
 "left": "7.87%",
 "width": 71,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038_rollover.png",
 "bottom": "1.5%",
 "propagateClick": true,
 "minWidth": 1,
 "height": 61,
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "click": "if(!this.Container_546964AC_4259_1C47_41B4_89BC8EEE450A.get('visible')){ this.setComponentVisibility(this.Container_546964AC_4259_1C47_41B4_89BC8EEE450A, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_546964AC_4259_1C47_41B4_89BC8EEE450A, false, 0, null, null, false) }",
 "class": "IconButton",
 "iconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038.png",
 "data": {
  "name": "IconButton Info"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "cursor": "hand"
},
{
 "maxHeight": 84,
 "maxWidth": 84,
 "id": "Image_4D3C7CFD_4392_045F_41BD_B71D1DBE1518",
 "width": "60.938%",
 "right": "3.13%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_4D3C7CFD_4392_045F_41BD_B71D1DBE1518.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "top": "3.5%",
 "propagateClick": false,
 "minWidth": 1,
 "height": "42.529%",
 "borderSize": 0,
 "paddingBottom": 0,
 "click": "this.openLink('http://mella@mella-cs.com', '_blank')",
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image2783"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "cursor": "hand"
},
{
 "maxHeight": 84,
 "maxWidth": 84,
 "id": "Image_4D2F7E58_4392_07A5_41C0_C535119A8467",
 "width": "57.813%",
 "right": "4.69%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_4D2F7E58_4392_07A5_41C0_C535119A8467.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "bottom": "30.53%",
 "propagateClick": false,
 "minWidth": 1,
 "height": "28.5%",
 "borderSize": 0,
 "paddingBottom": 0,
 "click": "this.openLink('http://mella-cs.com', '_blank')",
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image2877"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "cursor": "hand"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
 "width": 44,
 "right": "0%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F_rollover.png",
 "bottom": "4.5%",
 "propagateClick": false,
 "minWidth": 1,
 "height": 44,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false); this.openLink('http://https://maps.google.com/maps?q=8.998697,38.747010&ll=8.998697,38.747010&z=16', '_blank')",
 "class": "IconButton",
 "iconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F.png",
 "data": {
  "name": "IconButton Location"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "cursor": "hand"
},
{
 "maxHeight": 998,
 "maxWidth": 1202,
 "id": "Image_5617B085_43AE_1CAE_41CC_8FF53A5EBA65",
 "left": "0%",
 "width": "6.786%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_5617B085_43AE_1CAE_41CC_8FF53A5EBA65.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "bottom": "1.63%",
 "propagateClick": true,
 "minWidth": 1,
 "height": "5.865%",
 "borderSize": 0,
 "paddingBottom": 0,
 "click": "if(!this.Container_4D37021E_43C9_03B8_41CC_28E8F98A7511.get('visible')){ this.setComponentVisibility(this.Container_4D37021E_43C9_03B8_41CC_28E8F98A7511, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_4D37021E_43C9_03B8_41CC_28E8F98A7511, false, 0, null, null, false) }",
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image3661"
 },
 "horizontalAlign": "center",
 "shadow": false
},
{
 "maxHeight": 1185,
 "maxWidth": 1012,
 "id": "Image_58A0CA8B_4392_0CBA_41A3_BAE15310237F",
 "left": "0%",
 "width": "100%",
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_58A0CA8B_4392_0CBA_41A3_BAE15310237F.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0%",
 "propagateClick": false,
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_4D37021E_43C9_03B8_41CC_28E8F98A7511, false, 0, null, null, false)",
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image4301"
 },
 "horizontalAlign": "center",
 "shadow": false
},
{
 "shadow": false,
 "children": [
  "this.Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
  "this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
  "this.Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
  "this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
  "this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
  "this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
  "this.Container_1758A215_31FA_0014_41B6_9A4A5384548B",
  "this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
  "this.Container_168D8311_3106_01EC_41B0_F2D40886AB88"
 ],
 "left": "0%",
 "width": "100%",
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.7,
 "paddingRight": 40,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 40,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 40,
 "paddingTop": 40,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "- Buttons set"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "width": "100%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0%",
 "propagateClick": false,
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 },
 "horizontalAlign": "center",
 "shadow": false
},
{
 "shadow": false,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 60,
 "minWidth": 1,
 "propagateClick": false,
 "gap": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "paddingTop": 20,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "right",
 "layout": "horizontal",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "width": "100%",
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 30,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Container text"
 },
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "layout": "vertical",
 "scrollBarOpacity": 0.79
},
{
 "shadow": false,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "width": 370,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "gap": 10,
 "borderSize": 0,
 "height": 40,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "layout": "horizontal",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "width": "100%",
 "right": 20,
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "top": 20,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "propagateClick": true,
 "minWidth": 50,
 "height": "36.14%",
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "data": {
  "name": "IconButton X"
 },
 "horizontalAlign": "right",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "shadow": false,
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed_rollover.jpg"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "width": "100%",
 "right": 20,
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "top": 20,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "propagateClick": true,
 "minWidth": 50,
 "height": "36.14%",
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "data": {
  "name": "IconButton X"
 },
 "horizontalAlign": "right",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "shadow": false,
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed_rollover.jpg"
},
{
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "left": "0%",
 "progressBarBorderSize": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "width": "100%",
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarBorderRadius": 0,
 "minHeight": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": true,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "borderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "class": "ViewerArea",
 "toolTipFontColor": "#606060",
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "displayTooltipInTouchScreens": true,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "transitionMode": "blending",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "top": "0%",
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarLeft": 0,
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "playbackBarHeadOpacity": 1,
 "paddingTop": 0,
 "toolTipBorderColor": "#767676",
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBackgroundColorDirection": "vertical",
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "width": "14.22%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "top": "20%",
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "bottom": "20%",
 "propagateClick": true,
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "data": {
  "name": "IconButton <"
 },
 "shadow": false,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed_rollover.png"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "width": "14.22%",
 "right": 10,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "top": "20%",
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "bottom": "20%",
 "propagateClick": true,
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "data": {
  "name": "IconButton >"
 },
 "shadow": false,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed_rollover.png"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "width": "10%",
 "right": 20,
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "top": 20,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "propagateClick": true,
 "minWidth": 50,
 "height": "10%",
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "data": {
  "name": "IconButton X"
 },
 "horizontalAlign": "right",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "shadow": false,
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed_rollover.jpg"
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1",
 "left": "0%",
 "width": "100%",
 "verticalAlign": "bottom",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1.jpg",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0%",
 "propagateClick": false,
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image40635"
 },
 "horizontalAlign": "center",
 "shadow": false
},
{
 "shadow": false,
 "width": "100%",
 "id": "Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "height": "5%",
 "paddingBottom": 0,
 "paddingTop": 20,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "right",
 "layout": "horizontal",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
  "this.Container_1E18623C_57F1_802D_41D5_C4D10C61A206"
 ],
 "width": "100%",
 "id": "Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 30,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Container text"
 },
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "layout": "vertical",
 "scrollBarOpacity": 0.79
},
{
 "shadow": false,
 "id": "Container_1E18523C_57F1_802D_41B1_88C86CD9A273",
 "width": 370,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "gap": 10,
 "borderSize": 0,
 "height": 40,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "layout": "horizontal",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
 "left": "0%",
 "width": "100%",
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19.png",
 "paddingLeft": 0,
 "minHeight": 30,
 "borderRadius": 0,
 "top": "0%",
 "propagateClick": true,
 "minWidth": 40,
 "height": "25%",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image Company"
 },
 "horizontalAlign": "left",
 "shadow": false
},
{
 "children": [
  "this.Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
  "this.Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
  "this.Container_106C4A62_2D09_C594_41C0_0D00619DF541",
  "this.Button_0A054365_2D09_CB9F_4145_8C365B373D19",
  "this.Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
  "this.Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
  "this.Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
  "this.Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
  "this.Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
  "this.Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
  "this.Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
  "this.Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
  "this.Container_207ECEAD_3035_51EC_41A3_EE49910C654D"
 ],
 "id": "Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
 "width": "100%",
 "right": "0%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "bottom": "26%",
 "propagateClick": true,
 "minWidth": 1,
 "top": "26%",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "-Level 1"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "vertical",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
  "this.HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
  "this.Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
  "this.Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6"
 ],
 "id": "Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
 "left": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "bottom",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "bottom": "0%",
 "propagateClick": true,
 "minWidth": 1,
 "height": 130,
 "gap": 5,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "-Container footer"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "vertical",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
  "this.Container_2A2DB53B_310E_001C_41BA_0206228E495C",
  "this.Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
  "this.Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
  "this.Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
  "this.Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
  "this.Button_2A2C053B_310E_001C_41A2_583DE489828C",
  "this.Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
  "this.Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
  "this.Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
  "this.Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
  "this.Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
  "this.Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA"
 ],
 "id": "Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
 "left": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "paddingLeft": 0,
 "bottom": "25%",
 "propagateClick": true,
 "minWidth": 1,
 "top": "25%",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "-Level 2-1"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "vertical",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
  "this.Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
  "this.Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
  "this.Button_15A10DDC_31FA_0014_4185_021C898E177D",
  "this.Button_15A13DDC_31FA_0014_41C5_41AE80876834",
  "this.Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
  "this.Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
  "this.Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
  "this.Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
  "this.Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
  "this.Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
  "this.Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
  "this.Button_159EBDDD_31FA_0014_41C8_935504B30727"
 ],
 "id": "Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
 "left": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "paddingLeft": 0,
 "bottom": "25%",
 "propagateClick": true,
 "minWidth": 1,
 "top": "25%",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "-Level 2-2"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "vertical",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
  "this.Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
  "this.Container_17578D7D_31FA_0015_41BE_353D3005648A",
  "this.Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
  "this.Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
  "this.Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
  "this.Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
  "this.Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
  "this.Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
  "this.Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
  "this.Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
  "this.Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
  "this.Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC"
 ],
 "id": "Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
 "left": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "paddingLeft": 0,
 "bottom": "25%",
 "propagateClick": true,
 "minWidth": 1,
 "top": "25%",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "-Level 2-3"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "vertical",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Button_175A5214_31FA_0014_4198_930DF49BADD9",
  "this.Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
  "this.Container_1759B215_31FA_0014_41C0_84C99CBD5517",
  "this.Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
  "this.Button_17598215_31FA_0014_41AC_1166AB319171",
  "this.Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
  "this.Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
  "this.Button_17593215_31FA_0014_41C0_42BAFB0080F0",
  "this.Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
  "this.Button_17590215_31FA_0014_41C1_2B2D012DCC76",
  "this.Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
  "this.Button_17596215_31FA_0014_41C6_A42670770708",
  "this.Button_1758B215_31FA_0014_41BC_C4EAC2A9544B"
 ],
 "id": "Container_1758A215_31FA_0014_41B6_9A4A5384548B",
 "left": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "paddingLeft": 0,
 "bottom": "25%",
 "propagateClick": true,
 "minWidth": 1,
 "top": "25%",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "-Level 2-4"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "vertical",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
  "this.Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
  "this.Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
  "this.Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
  "this.Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
  "this.Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
  "this.Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
  "this.Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
  "this.Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
  "this.Button_17EB52B7_3106_0014_419C_439E593AEC43",
  "this.Button_17EB62B7_3106_0014_41C5_43B38271B353",
  "this.Button_17EB72B7_3106_0014_41B9_61857077BF4A",
  "this.Button_17EB92B7_3106_0014_41B2_34A3E3F63779"
 ],
 "id": "Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
 "left": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "paddingLeft": 0,
 "bottom": "25%",
 "propagateClick": true,
 "minWidth": 1,
 "top": "25%",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "-Level 2-5"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "vertical",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Button_168CA310_3106_01EC_41C7_72CE0522951A",
  "this.Container_168C8310_3106_01EC_4187_B16F315A4A23",
  "this.Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
  "this.Button_168D6310_3106_01EC_41B8_A0B6BE627547",
  "this.Button_168D5310_3106_01EC_41B5_96D9387401B8",
  "this.Button_168D3310_3106_01EC_41AC_5D524E4677A5",
  "this.Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
  "this.Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
  "this.Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
  "this.Button_168DD310_3106_01EC_4190_7815FA70349E",
  "this.Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
  "this.Button_168DA310_3106_01EC_41BE_DF88732C2A28",
  "this.Button_168D9311_3106_01EC_41A8_3BD8769525D6"
 ],
 "id": "Container_168D8311_3106_01EC_41B0_F2D40886AB88",
 "left": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "paddingLeft": 0,
 "bottom": "25%",
 "propagateClick": true,
 "minWidth": 1,
 "top": "25%",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "-Level 2-6"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "vertical",
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 20,
 "paddingTop": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.38vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.82vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.82vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.41vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.05vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.05vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.41vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.68vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.41vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.83vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 },
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 1,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "width": 180,
 "pressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0.7,
 "paddingRight": 0,
 "iconHeight": 32,
 "paddingLeft": 0,
 "minHeight": 1,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "borderRadius": 50,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#04A3E1"
 ],
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "propagateClick": false,
 "label": "LOREM IPSUM",
 "mode": "push",
 "borderSize": 0,
 "height": 50,
 "paddingBottom": 0,
 "gap": 5,
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "class": "Button",
 "fontSize": "2.39vh",
 "iconWidth": 32,
 "fontStyle": "italic",
 "horizontalAlign": "center",
 "data": {
  "name": "Button"
 },
 "fontWeight": "bold",
 "backgroundColorDirection": "vertical",
 "cursor": "hand",
 "fontColor": "#FFFFFF"
},
{
 "id": "HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "46%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.38vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.82vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.82vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText18899"
 },
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "scrollBarOpacity": 0
},
{
 "shadow": false,
 "children": [
  "this.Image_1E18723C_57F1_802D_41C5_8325536874A5",
  "this.HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC"
 ],
 "width": "100%",
 "id": "Container_1E18623C_57F1_802D_41D5_C4D10C61A206",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "75%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "- content"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "layout": "horizontal",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "id": "Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "line"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 50,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "RECEPTION >",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, true, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button Tour Info"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "shadow": false,
 "id": "Container_106C4A62_2D09_C594_41C0_0D00619DF541",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "line"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_0A054365_2D09_CB9F_4145_8C365B373D19",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 50,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "ROOMS >",
 "paddingTop": 0,
 "gap": 23,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, true, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button Panorama List"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "shadow": false,
 "id": "Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "line"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedLabel": "Inserdt Text",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 50,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "AMENITIES >",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, true, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button Location"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "shadow": false,
 "id": "Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "line"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 50,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "SPORTS AREA >",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, true, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button Floorplan"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "shadow": false,
 "id": "Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "line"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 50,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "SWIMMING POOL >",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, true, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button Photoalbum"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "shadow": false,
 "id": "Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "line"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 50,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "RESTAURANTS >",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, true, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button Contact"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "shadow": false,
 "id": "Container_207ECEAD_3035_51EC_41A3_EE49910C654D",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "line"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "id": "Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
 "width": 40,
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "height": 2,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "blue line"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "layout": "horizontal",
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "propagateClick": true,
 "minWidth": 1,
 "height": 78,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText47602"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
  "this.IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5"
 ],
 "id": "Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "verticalAlign": "bottom",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "propagateClick": false,
 "minWidth": 1,
 "height": 56,
 "gap": 7,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "-Container Icons 1"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
  "this.IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
  "this.IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
  "this.IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F"
 ],
 "id": "Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "propagateClick": false,
 "minWidth": 1,
 "height": 44,
 "gap": 7,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "-Container Icons 2"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "scrollBarOpacity": 0.5
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverFontFamily": "Oswald",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 30,
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B_rollover.png",
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 5,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 50,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "BACK",
 "rollOverFontSize": 18,
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "iconWidth": 30,
 "iconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B.png",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button <BACK"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "shadow": false,
 "id": "Container_2A2DB53B_310E_001C_41BA_0206228E495C",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.5,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "line"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "propagateClick": true,
 "minWidth": 1,
 "height": 8,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "line separator"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 15,
 "rollOverShadowBlurRadius": 18,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Main Entrance",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverShadow": false,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 1"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lobby",
 "paddingTop": 0,
 "gap": 23,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 2"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedLabel": "Reception",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Reception",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 3"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_2A2C053B_310E_001C_41A2_583DE489828C",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Meeting Area 1",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 4"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Meeting Area 2",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 5"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Bar",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 6"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Chill Out",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 7"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Terrace",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 8"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 0,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Garden",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "visible": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 9"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 0,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "visible": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 10"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverFontFamily": "Oswald",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 30,
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1_rollover.png",
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 5,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 50,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "BACK",
 "rollOverFontSize": 18,
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "iconWidth": 30,
 "iconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1.png",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button <BACK"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "shadow": false,
 "id": "Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.5,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "line"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "propagateClick": true,
 "minWidth": 1,
 "height": 8,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "line separator"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_15A10DDC_31FA_0014_4185_021C898E177D",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 15,
 "rollOverShadowBlurRadius": 18,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverShadow": false,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 1"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_15A13DDC_31FA_0014_41C5_41AE80876834",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 23,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 2"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedLabel": "Lorem Ipsum",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 3"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 4"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 5"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem ipsum",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 6"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 7"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 8"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 9"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_159EBDDD_31FA_0014_41C8_935504B30727",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 10"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverFontFamily": "Oswald",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 30,
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B_rollover.png",
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 5,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 50,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "BACK",
 "rollOverFontSize": 18,
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "iconWidth": 30,
 "iconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B.png",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button <BACK"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "shadow": false,
 "id": "Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.5,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "line"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_17578D7D_31FA_0015_41BE_353D3005648A",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "propagateClick": true,
 "minWidth": 1,
 "height": 8,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "line separator"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 15,
 "rollOverShadowBlurRadius": 18,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverShadow": false,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 1"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 23,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 2"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedLabel": "Lorem Ipsum",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 3"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 4"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 5"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem ipsum",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 6"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 7"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 8"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 9"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 10"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_175A5214_31FA_0014_4198_930DF49BADD9",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverFontFamily": "Oswald",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 30,
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9_rollover.png",
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 5,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 50,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "BACK",
 "rollOverFontSize": 18,
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "iconWidth": 30,
 "iconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9.png",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button <BACK"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "shadow": false,
 "id": "Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.5,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "line"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_1759B215_31FA_0014_41C0_84C99CBD5517",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "propagateClick": true,
 "minWidth": 1,
 "height": 8,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "line separator"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 15,
 "rollOverShadowBlurRadius": 18,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverShadow": false,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 1"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17598215_31FA_0014_41AC_1166AB319171",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 23,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 2"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedLabel": "Lorem Ipsum",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 3"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 4"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17593215_31FA_0014_41C0_42BAFB0080F0",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 5"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem ipsum",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 6"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17590215_31FA_0014_41C1_2B2D012DCC76",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 7"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 8"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17596215_31FA_0014_41C6_A42670770708",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 9"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_1758B215_31FA_0014_41BC_C4EAC2A9544B",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 10"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverFontFamily": "Oswald",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 30,
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C_rollover.png",
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 5,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 50,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "BACK",
 "rollOverFontSize": 18,
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "iconWidth": 30,
 "iconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C.png",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button <BACK"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "shadow": false,
 "id": "Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.5,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "line"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "propagateClick": true,
 "minWidth": 1,
 "height": 8,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "line separator"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 15,
 "rollOverShadowBlurRadius": 18,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverShadow": false,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 1"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 23,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 2"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedLabel": "Lorem Ipsum",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 3"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 4"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 5"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem ipsum",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 6"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17EB52B7_3106_0014_419C_439E593AEC43",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 7"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17EB62B7_3106_0014_41C5_43B38271B353",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 8"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17EB72B7_3106_0014_41B9_61857077BF4A",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 9"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_17EB92B7_3106_0014_41B2_34A3E3F63779",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 10"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_168CA310_3106_01EC_41C7_72CE0522951A",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverFontFamily": "Oswald",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 30,
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A_rollover.png",
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 5,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 50,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "BACK",
 "rollOverFontSize": 18,
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "iconWidth": 30,
 "iconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A.png",
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button <BACK"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "shadow": false,
 "id": "Container_168C8310_3106_01EC_4187_B16F315A4A23",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.5,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "line"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "propagateClick": true,
 "minWidth": 1,
 "height": 8,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "data": {
  "name": "line separator"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_168D6310_3106_01EC_41B8_A0B6BE627547",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 15,
 "rollOverShadowBlurRadius": 18,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "rollOverShadow": false,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 1"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_168D5310_3106_01EC_41B5_96D9387401B8",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 23,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 2"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_168D3310_3106_01EC_41AC_5D524E4677A5",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedLabel": "Lorem Ipsum",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 3"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 4"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 5"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem ipsum",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 6"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_168DD310_3106_01EC_4190_7815FA70349E",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 7"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 8"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_168DA310_3106_01EC_41BE_DF88732C2A28",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 9"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "rollOverBackgroundOpacity": 0.8,
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_168D9311_3106_01EC_41A8_3BD8769525D6",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 36,
 "mode": "push",
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "gap": 5,
 "class": "Button",
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 10"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000"
},
{
 "maxHeight": 200,
 "maxWidth": 200,
 "id": "Image_1E18723C_57F1_802D_41C5_8325536874A5",
 "width": "25%",
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_1E18723C_57F1_802D_41C5_8325536874A5.jpg",
 "minHeight": 1,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "agent photo"
 },
 "horizontalAlign": "left",
 "shadow": false
},
{
 "id": "HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC",
 "width": "75%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 10,
 "paddingTop": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.41vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.41vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.68vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.68vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.68vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.68vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.05vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.05vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
 "width": 44,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83_rollover.png",
 "propagateClick": false,
 "minWidth": 1,
 "height": 44,
 "mode": "push",
 "borderSize": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83.png",
 "data": {
  "name": "IconButton Thumblist"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "cursor": "hand"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5",
 "width": 44,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5_rollover.png",
 "propagateClick": false,
 "minWidth": 1,
 "height": 44,
 "mode": "push",
 "borderSize": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5.png",
 "data": {
  "name": "IconButton Photoalbum"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "cursor": "hand"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
 "width": 44,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15_rollover.png",
 "propagateClick": false,
 "minWidth": 1,
 "height": 44,
 "mode": "push",
 "borderSize": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15.png",
 "data": {
  "name": "IconButton Floorplan"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "cursor": "hand"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
 "width": 44,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_rollover.png",
 "propagateClick": false,
 "minWidth": 1,
 "height": 44,
 "mode": "push",
 "borderSize": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7.png",
 "data": {
  "name": "IconButton Realtor"
 },
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_pressed_rollover.png"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
 "width": 44,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF_rollover.png",
 "propagateClick": false,
 "minWidth": 1,
 "height": 44,
 "mode": "push",
 "borderSize": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF.png",
 "data": {
  "name": "IconButton Video"
 },
 "horizontalAlign": "center",
 "shadow": false,
 "cursor": "hand"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F",
 "width": 50,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "height": 50,
 "mode": "push",
 "borderSize": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "paddingBottom": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F.png",
 "data": {
  "name": "IconButton --"
 },
 "visible": false,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F_pressed_rollover.png"
}],
 "desktopMipmappingEnabled": false,
 "propagateClick": true,
 "minWidth": 20,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "mobileMipmappingEnabled": false,
 "gap": 10,
 "paddingTop": 0,
 "vrPolyfillScale": 1,
 "class": "Player",
 "contentOpaque": false,
 "scripts": {
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "existsKey": function(key){  return key in window; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getKey": function(key){  return window[key]; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "registerKey": function(key, value){  window[key] = value; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } }
 },
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "data": {
  "name": "Player468"
 },
 "scrollBarColor": "#000000",
 "mouseWheelEnabled": true,
 "horizontalAlign": "left",
 "layout": "absolute",
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
