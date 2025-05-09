var profiles_array_cached = [{"version":1,"model_version":1,"name":"standard-live-hd-720p-tier-1","display_name":"Standard Live HD 720p - Tier 1","description":"Well balanced setting to cover a variety of platforms including  mobile, desktop, and OTT.","account_id":-1,"brightcove_standard":true,"date_created":1528136204000,"date_last_modified":1528136204000,"renditions":[{"media_type":"video","format":"ts","segment_seconds":6,"label":"hls720p","live_stream":true,"video_codec":"h264","video_bitrate":2400,"keyframe_interval":60,"width":1280,"height":720,"h264_profile":"high"},{"media_type":"video","format":"ts","segment_seconds":6,"label":"hls540p","live_stream":true,"video_codec":"h264","video_bitrate":1700,"keyframe_interval":60,"width":960,"height":540,"h264_profile":"main"},{"media_type":"video","format":"ts","segment_seconds":6,"label":"hls360p","live_stream":true,"video_codec":"h264","video_bitrate":900,"keyframe_interval":60,"width":640,"height":360,"h264_profile":"main"},{"media_type":"video","format":"ts","segment_seconds":6,"label":"hls270p","live_stream":true,"video_codec":"h264","video_bitrate":450,"keyframe_interval":60,"width":480,"height":270,"h264_profile":"baseline"}],"packages":[],"id":"6e1af1a714ee45e7ac27c5ad"},{"version":1,"model_version":1,"name":"standard-live-sd-tier-1","display_name":"Standard Live SD - Tier 1","description":"Standard SD renditions to maximize device reach while balancing data consumption.","account_id":-1,"brightcove_standard":true,"date_created":1528136204000,"date_last_modified":1528136204000,"renditions":[{"media_type":"video","format":"ts","segment_seconds":6,"label":"hls540p","live_stream":true,"video_codec":"h264","video_bitrate":1700,"keyframe_interval":60,"width":960,"height":540,"h264_profile":"main"},{"media_type":"video","format":"ts","segment_seconds":6,"label":"hls360p","live_stream":true,"video_codec":"h264","video_bitrate":900,"keyframe_interval":60,"width":640,"height":360,"h264_profile":"main"},{"media_type":"video","format":"ts","segment_seconds":6,"label":"hls270p","live_stream":true,"video_codec":"h264","video_bitrate":450,"keyframe_interval":60,"width":480,"height":270,"h264_profile":"baseline"}],"packages":[],"id":"f34395bfcc7f487e802c8450"},{"version":1,"model_version":1,"name":"premium-live-hd-1080p-tier-2","display_name":"Premium Live HD 1080p - Tier 2","description":"Deliver a high-quality renditions to maximize quality for desktop and OTT.","account_id":-1,"brightcove_standard":true,"date_created":1528136204000,"date_last_modified":1528136204000,"renditions":[{"media_type":"video","format":"ts","segment_seconds":6,"label":"hls1080p","live_stream":true,"video_codec":"h264","video_bitrate":4000,"keyframe_interval":60,"width":1920,"height":1080,"h264_profile":"high"},{"media_type":"video","format":"ts","segment_seconds":6,"label":"hls720p","live_stream":true,"video_codec":"h264","video_bitrate":2400,"keyframe_interval":60,"width":1280,"height":720,"h264_profile":"high"},{"media_type":"video","format":"ts","segment_seconds":6,"label":"hls540p","live_stream":true,"video_codec":"h264","video_bitrate":1700,"keyframe_interval":60,"width":960,"height":540,"h264_profile":"main"},{"media_type":"video","format":"ts","segment_seconds":6,"label":"hls360p","live_stream":true,"video_codec":"h264","video_bitrate":900,"keyframe_interval":60,"width":640,"height":360,"h264_profile":"main"}],"packages":[],"id":"8d10b1667b864f94bd7cc03d"}];
var profiles_array_cached_2 = [
{
    "version" : 1,
    "model_version" : 2,
    "name" : "Live HD 1080",
    "display_name" : "Live HD 1080",
    "description" : "Live HD 1080",
    "account_id" : -1,
    "brightcove_standard" : true,
    "date_created" : 1722972238,
    "date_last_modified" : 1722972238,
    "renditions" : [ {
      "media_type" : "video",
      "label" : "hls270p",
      "video_codec" : "h264",
      "video_bitrate" : 450,
      "decoder_bitrate_cap" : 540,
      "decoder_buffer_size" : 675,
      "frame_rate" : 30.0,
      "keyframe_rate" : 0.5,
      "width" : 480,
      "height" : 270,
      "video_bframes" : 3,
      "sample_aspect_ratio" : "1:1",
      "deinterlace" : "detect",
      "video_codec_profile" : "main",
      "video_codec_level" : "3",
      "video_reference_frames" : 4,
      "allowed_frame_rates" : [ {
        "as_float" : 23.97,
        "as_fraction" : "24000/1001"
      }, {
        "as_float" : 24.0,
        "as_fraction" : "24/1"
      }, {
        "as_float" : 25.0,
        "as_fraction" : "25/1"
      }, {
        "as_float" : 29.97,
        "as_fraction" : "30000/1001"
      }, {
        "as_float" : 30.0,
        "as_fraction" : "30/1"
      } ]
    }, {
      "media_type" : "video",
      "label" : "hls360p",
      "video_codec" : "h264",
      "video_bitrate" : 780,
      "decoder_bitrate_cap" : 936,
      "decoder_buffer_size" : 1170,
      "frame_rate" : 30.0,
      "keyframe_rate" : 0.5,
      "width" : 640,
      "height" : 360,
      "video_bframes" : 3,
      "sample_aspect_ratio" : "1:1",
      "deinterlace" : "detect",
      "video_codec_profile" : "main",
      "video_codec_level" : "3",
      "video_reference_frames" : 4,
      "allowed_frame_rates" : [ {
        "as_float" : 23.97,
        "as_fraction" : "24000/1001"
      }, {
        "as_float" : 24.0,
        "as_fraction" : "24/1"
      }, {
        "as_float" : 25.0,
        "as_fraction" : "25/1"
      }, {
        "as_float" : 29.97,
        "as_fraction" : "30000/1001"
      }, {
        "as_float" : 30.0,
        "as_fraction" : "30/1"
      } ]
    }, {
      "media_type" : "video",
      "label" : "hls540p",
      "video_codec" : "h264",
      "video_bitrate" : 1500,
      "decoder_bitrate_cap" : 1800,
      "decoder_buffer_size" : 2250,
      "frame_rate" : 30.0,
      "keyframe_rate" : 0.5,
      "width" : 960,
      "height" : 540,
      "video_bframes" : 3,
      "sample_aspect_ratio" : "1:1",
      "deinterlace" : "detect",
      "video_codec_profile" : "main",
      "video_codec_level" : "3.2",
      "video_reference_frames" : 4,
      "allowed_frame_rates" : [ {
        "as_float" : 23.97,
        "as_fraction" : "24000/1001"
      }, {
        "as_float" : 24.0,
        "as_fraction" : "24/1"
      }, {
        "as_float" : 25.0,
        "as_fraction" : "25/1"
      }, {
        "as_float" : 29.97,
        "as_fraction" : "30000/1001"
      }, {
        "as_float" : 30.0,
        "as_fraction" : "30/1"
      } ]
    }, {
      "media_type" : "video",
      "label" : "hls720p",
      "video_codec" : "h264",
      "video_bitrate" : 2400,
      "decoder_bitrate_cap" : 2880,
      "decoder_buffer_size" : 3600,
      "frame_rate" : 30.0,
      "keyframe_rate" : 0.5,
      "width" : 1280,
      "height" : 720,
      "video_bframes" : 3,
      "sample_aspect_ratio" : "1:1",
      "deinterlace" : "detect",
      "video_codec_profile" : "high",
      "video_codec_level" : "4",
      "video_reference_frames" : 4,
      "allowed_frame_rates" : [ {
        "as_float" : 23.97,
        "as_fraction" : "24000/1001"
      }, {
        "as_float" : 24.0,
        "as_fraction" : "24/1"
      }, {
        "as_float" : 25.0,
        "as_fraction" : "25/1"
      }, {
        "as_float" : 29.97,
        "as_fraction" : "30000/1001"
      }, {
        "as_float" : 30.0,
        "as_fraction" : "30/1"
      } ]
    }, {
      "media_type" : "video",
      "label" : "hls1080p",
      "video_codec" : "h264",
      "video_bitrate" : 4500,
      "decoder_bitrate_cap" : 5400,
      "decoder_buffer_size" : 6750,
      "frame_rate" : 30.0,
      "keyframe_rate" : 0.5,
      "width" : 1920,
      "height" : 1080,
      "video_bframes" : 3,
      "sample_aspect_ratio" : "1:1",
      "deinterlace" : "detect",
      "video_codec_profile" : "high",
      "video_codec_level" : "4.2",
      "video_reference_frames" : 4,
      "allowed_frame_rates" : [ {
        "as_float" : 23.97,
        "as_fraction" : "24000/1001"
      }, {
        "as_float" : 24.0,
        "as_fraction" : "24/1"
      }, {
        "as_float" : 25.0,
        "as_fraction" : "25/1"
      }, {
        "as_float" : 29.97,
        "as_fraction" : "30000/1001"
      }, {
        "as_float" : 30.0,
        "as_fraction" : "30/1"
      } ]
    } ],
    "packages" : [ ],
    "manifest" : {
      "name" : "playlist",
      "segment_duration_seconds" : 6,
      "playlist_window_seconds" : 60,
      "hls" : {
        "startover_window_seconds" : 300
      }
    },
    "profile_type" : "live",
    "id" : "8d10b1777b864f94bd7cc03d"
},{
    "version" : 1,
    "model_version" : 2,
    "name" : "Live HD 1080 HFR",
    "display_name" : "Live HD 1080 HFR",
    "description" : "Live HD 1080 HFR",
    "account_id" : -1,
    "brightcove_standard" : true,
    "date_created" : 1722972238,
    "date_last_modified" : 1722972238,
    "renditions" : [ {
      "media_type" : "video",
      "label" : "hls270p",
      "video_codec" : "h264",
      "video_bitrate" : 450,
      "decoder_bitrate_cap" : 540,
      "decoder_buffer_size" : 675,
      "frame_rate" : 60.0,
      "keyframe_rate" : 0.5,
      "width" : 480,
      "height" : 270,
      "video_bframes" : 3,
      "sample_aspect_ratio" : "1:1",
      "deinterlace" : "detect",
      "video_codec_profile" : "main",
      "video_codec_level" : "3",
      "video_reference_frames" : 4,
      "allowed_frame_rates" : [ {
        "as_float" : 50.0,
        "as_fraction" : "50/1"
      }, {
        "as_float" : 59.94,
        "as_fraction" : "60000/1001"
      }, {
        "as_float" : 60.0,
        "as_fraction" : "60/1"
      } ]
    }, {
      "media_type" : "video",
      "label" : "hls360p",
      "video_codec" : "h264",
      "video_bitrate" : 900,
      "decoder_bitrate_cap" : 1080,
      "decoder_buffer_size" : 1350,
      "frame_rate" : 60.0,
      "keyframe_rate" : 0.5,
      "width" : 640,
      "height" : 360,
      "video_bframes" : 3,
      "sample_aspect_ratio" : "1:1",
      "deinterlace" : "detect",
      "video_codec_profile" : "main",
      "video_codec_level" : "3.1",
      "video_reference_frames" : 4,
      "allowed_frame_rates" : [ {
        "as_float" : 50.0,
        "as_fraction" : "50/1"
      }, {
        "as_float" : 59.94,
        "as_fraction" : "60000/1001"
      }, {
        "as_float" : 60.0,
        "as_fraction" : "60/1"
      } ]
    }, {
      "media_type" : "video",
      "label" : "hls576p",
      "video_codec" : "h264",
      "video_bitrate" : 1800,
      "decoder_bitrate_cap" : 2160,
      "decoder_buffer_size" : 2700,
      "frame_rate" : 60.0,
      "keyframe_rate" : 0.5,
      "width" : 1024,
      "height" : 576,
      "video_bframes" : 3,
      "sample_aspect_ratio" : "1:1",
      "deinterlace" : "detect",
      "video_codec_profile" : "main",
      "video_codec_level" : "3.2",
      "video_reference_frames" : 4,
      "allowed_frame_rates" : [ {
        "as_float" : 50.0,
        "as_fraction" : "50/1"
      }, {
        "as_float" : 59.94,
        "as_fraction" : "60000/1001"
      }, {
        "as_float" : 60.0,
        "as_fraction" : "60/1"
      } ]
    }, {
      "media_type" : "video",
      "label" : "hls720p",
      "video_codec" : "h264",
      "video_bitrate" : 3600,
      "decoder_bitrate_cap" : 4320,
      "decoder_buffer_size" : 5400,
      "frame_rate" : 60.0,
      "keyframe_rate" : 0.5,
      "width" : 1280,
      "height" : 720,
      "video_bframes" : 3,
      "sample_aspect_ratio" : "1:1",
      "deinterlace" : "detect",
      "video_codec_profile" : "high",
      "video_codec_level" : "4",
      "video_reference_frames" : 4,
      "allowed_frame_rates" : [ {
        "as_float" : 50.0,
        "as_fraction" : "50/1"
      }, {
        "as_float" : 59.94,
        "as_fraction" : "60000/1001"
      }, {
        "as_float" : 60.0,
        "as_fraction" : "60/1"
      } ]
    }, {
      "media_type" : "video",
      "label" : "hls1080p",
      "video_codec" : "h264",
      "video_bitrate" : 7200,
      "decoder_bitrate_cap" : 8640,
      "decoder_buffer_size" : 10800,
      "frame_rate" : 60.0,
      "keyframe_rate" : 0.5,
      "width" : 1920,
      "height" : 1080,
      "video_bframes" : 3,
      "sample_aspect_ratio" : "1:1",
      "deinterlace" : "detect",
      "video_codec_profile" : "high",
      "video_codec_level" : "4.2",
      "video_reference_frames" : 4,
      "allowed_frame_rates" : [ {
        "as_float" : 50.0,
        "as_fraction" : "50/1"
      }, {
        "as_float" : 59.94,
        "as_fraction" : "60000/1001"
      }, {
        "as_float" : 60.0,
        "as_fraction" : "60/1"
      } ]
    } ],
    "packages" : [ ],
    "manifest" : {
      "name" : "playlist",
      "segment_duration_seconds" : 6,
      "playlist_window_seconds" : 60,
      "hls" : {
        "startover_window_seconds" : 300
      }
    },
    "profile_type" : "live",
    "id" : "8d10b1999b864f94bd7cc03d"
},{
    "version" : 1,
    "model_version" : 2,
    "name" : "Live HD 720",
    "display_name" : "Live HD 720",
    "description" : "Live HD 720",
    "account_id" : -1,
    "brightcove_standard" : true,
    "date_created" : 1722972238,
    "date_last_modified" : 1722972238,
    "renditions" : [ {
      "media_type" : "video",
      "label" : "hls270p",
      "video_codec" : "h264",
      "video_bitrate" : 450,
      "decoder_bitrate_cap" : 540,
      "decoder_buffer_size" : 675,
      "frame_rate" : 30.0,
      "keyframe_rate" : 0.5,
      "width" : 480,
      "height" : 270,
      "video_bframes" : 3,
      "sample_aspect_ratio" : "1:1",
      "deinterlace" : "detect",
      "video_codec_profile" : "main",
      "video_codec_level" : "3",
      "video_reference_frames" : 4,
      "allowed_frame_rates" : [ {
        "as_float" : 23.97,
        "as_fraction" : "24000/1001"
      }, {
        "as_float" : 24.0,
        "as_fraction" : "24/1"
      }, {
        "as_float" : 25.0,
        "as_fraction" : "25/1"
      }, {
        "as_float" : 29.97,
        "as_fraction" : "30000/1001"
      }, {
        "as_float" : 30.0,
        "as_fraction" : "30/1"
      } ]
    }, {
      "media_type" : "video",
      "label" : "hls360p",
      "video_codec" : "h264",
      "video_bitrate" : 780,
      "decoder_bitrate_cap" : 936,
      "decoder_buffer_size" : 1170,
      "frame_rate" : 30.0,
      "keyframe_rate" : 0.5,
      "width" : 640,
      "height" : 360,
      "video_bframes" : 3,
      "sample_aspect_ratio" : "1:1",
      "deinterlace" : "detect",
      "video_codec_profile" : "main",
      "video_codec_level" : "3.1",
      "video_reference_frames" : 4,
      "allowed_frame_rates" : [ {
        "as_float" : 23.97,
        "as_fraction" : "24000/1001"
      }, {
        "as_float" : 24.0,
        "as_fraction" : "24/1"
      }, {
        "as_float" : 25.0,
        "as_fraction" : "25/1"
      }, {
        "as_float" : 29.97,
        "as_fraction" : "30000/1001"
      }, {
        "as_float" : 30.0,
        "as_fraction" : "30/1"
      } ]
    }, {
      "media_type" : "video",
      "label" : "hls540p",
      "video_codec" : "h264",
      "video_bitrate" : 1500,
      "decoder_bitrate_cap" : 1800,
      "decoder_buffer_size" : 2250,
      "frame_rate" : 30.0,
      "keyframe_rate" : 0.5,
      "width" : 960,
      "height" : 540,
      "video_bframes" : 3,
      "sample_aspect_ratio" : "1:1",
      "deinterlace" : "detect",
      "video_codec_profile" : "main",
      "video_codec_level" : "3.2",
      "video_reference_frames" : 4,
      "allowed_frame_rates" : [ {
        "as_float" : 23.97,
        "as_fraction" : "24000/1001"
      }, {
        "as_float" : 24.0,
        "as_fraction" : "24/1"
      }, {
        "as_float" : 25.0,
        "as_fraction" : "25/1"
      }, {
        "as_float" : 29.97,
        "as_fraction" : "30000/1001"
      }, {
        "as_float" : 30.0,
        "as_fraction" : "30/1"
      } ]
    }, {
      "media_type" : "video",
      "label" : "hls720p",
      "video_codec" : "h264",
      "video_bitrate" : 2800,
      "decoder_bitrate_cap" : 3360,
      "decoder_buffer_size" : 4200,
      "frame_rate" : 30.0,
      "keyframe_rate" : 0.5,
      "width" : 1280,
      "height" : 720,
      "video_bframes" : 3,
      "sample_aspect_ratio" : "1:1",
      "deinterlace" : "detect",
      "video_codec_profile" : "high",
      "video_codec_level" : "4",
      "video_reference_frames" : 4,
      "allowed_frame_rates" : [ {
        "as_float" : 23.97,
        "as_fraction" : "24000/1001"
      }, {
        "as_float" : 24.0,
        "as_fraction" : "24/1"
      }, {
        "as_float" : 25.0,
        "as_fraction" : "25/1"
      }, {
        "as_float" : 29.97,
        "as_fraction" : "30000/1001"
      }, {
        "as_float" : 30.0,
        "as_fraction" : "30/1"
      } ]
    } ],
    "packages" : [ ],
    "manifest" : {
      "name" : "playlist",
      "segment_duration_seconds" : 6,
      "playlist_window_seconds" : 60,
      "hls" : {
        "startover_window_seconds" : 300
      }
    },
    "profile_type" : "live",
    "id" : "8d10b1aaab864f94bd7cc03d"
}, {
    "version" : 1,
    "model_version" : 2,
    "name" : "Live HD 720 HFR",
    "display_name" : "Live HD 720 HFR",
    "description" : "Live HD 720 HFR",
    "account_id" : -1,
    "brightcove_standard" : true,
    "date_created" : 1722972238,
    "date_last_modified" : 1722972238,
    "renditions" : [ {
      "media_type" : "video",
      "label" : "hls270p",
      "video_codec" : "h264",
      "video_bitrate" : 450,
      "decoder_bitrate_cap" : 540,
      "decoder_buffer_size" : 675,
      "frame_rate" : 60.0,
      "keyframe_rate" : 0.5,
      "width" : 480,
      "height" : 270,
      "video_bframes" : 3,
      "sample_aspect_ratio" : "1:1",
      "deinterlace" : "detect",
      "video_codec_profile" : "main",
      "video_codec_level" : "3",
      "video_reference_frames" : 4,
      "allowed_frame_rates" : [ {
        "as_float" : 50.0,
        "as_fraction" : "50/1"
      }, {
        "as_float" : 59.94,
        "as_fraction" : "60000/1001"
      }, {
        "as_float" : 60.0,
        "as_fraction" : "60/1"
      } ]
    }, {
      "media_type" : "video",
      "label" : "hls360p",
      "video_codec" : "h264",
      "video_bitrate" : 900,
      "decoder_bitrate_cap" : 1080,
      "decoder_buffer_size" : 1350,
      "frame_rate" : 60.0,
      "keyframe_rate" : 0.5,
      "width" : 640,
      "height" : 360,
      "video_bframes" : 3,
      "sample_aspect_ratio" : "1:1",
      "deinterlace" : "detect",
      "video_codec_profile" : "main",
      "video_codec_level" : "3.1",
      "video_reference_frames" : 4,
      "allowed_frame_rates" : [ {
        "as_float" : 50.0,
        "as_fraction" : "50/1"
      }, {
        "as_float" : 59.94,
        "as_fraction" : "60000/1001"
      }, {
        "as_float" : 60.0,
        "as_fraction" : "60/1"
      } ]
    }, {
      "media_type" : "video",
      "label" : "hls576p",
      "video_codec" : "h264",
      "video_bitrate" : 1800,
      "decoder_bitrate_cap" : 2160,
      "decoder_buffer_size" : 2700,
      "frame_rate" : 60.0,
      "keyframe_rate" : 0.5,
      "width" : 1024,
      "height" : 576,
      "video_bframes" : 3,
      "sample_aspect_ratio" : "1:1",
      "deinterlace" : "detect",
      "video_codec_profile" : "main",
      "video_codec_level" : "3.2",
      "video_reference_frames" : 4,
      "allowed_frame_rates" : [ {
        "as_float" : 50.0,
        "as_fraction" : "50/1"
      }, {
        "as_float" : 59.94,
        "as_fraction" : "60000/1001"
      }, {
        "as_float" : 60.0,
        "as_fraction" : "60/1"
      } ]
    }, {
      "media_type" : "video",
      "label" : "hls720p",
      "video_codec" : "h264",
      "video_bitrate" : 3600,
      "decoder_bitrate_cap" : 4320,
      "decoder_buffer_size" : 5400,
      "frame_rate" : 60.0,
      "keyframe_rate" : 0.5,
      "width" : 1280,
      "height" : 720,
      "video_bframes" : 3,
      "sample_aspect_ratio" : "1:1",
      "deinterlace" : "detect",
      "video_codec_profile" : "high",
      "video_codec_level" : "4",
      "video_reference_frames" : 4,
      "allowed_frame_rates" : [ {
        "as_float" : 50.0,
        "as_fraction" : "50/1"
      }, {
        "as_float" : 59.94,
        "as_fraction" : "60000/1001"
      }, {
        "as_float" : 60.0,
        "as_fraction" : "60/1"
      } ]
    } ],
    "packages" : [ ],
    "manifest" : {
      "name" : "playlist",
      "segment_duration_seconds" : 6,
      "playlist_window_seconds" : 60,
      "hls" : {
        "startover_window_seconds" : 300
      }
    },
    "profile_type" : "live",
    "id" : "8d10b1bbbb864f94bd7cc03d"
  }, {
    "version" : 1,
    "model_version" : 2,
    "name" : "Live Low Latency HLS",
    "display_name" : "Live Low Latency HLS",
    "description" : "Live Low Latency HLS",
    "account_id" : -1,
    "brightcove_standard" : true,
    "low_latency" : true,
    "date_created" : 1722972238,
    "date_last_modified" : 1722972238,
    "renditions" : [ {
      "media_type" : "video",
      "label" : "hls720p_30fps",
      "video_codec" : "h264",
      "video_bitrate" : 3360,
      "max_video_bitrate" : 3360,
      "decoder_buffer_size" : 3360,
      "frame_rate" : 30.0,
      "keyframe_rate_units" : "frames",
      "keyframe_rate" : 16.0,
      "width" : 1280,
      "height" : 720,
      "h264_reference_frames" : 4,
      "h264_bframes" : 3,
      "rate_control_mode" : "cbr",
      "sample_aspect_ratio" : "1:1",
      "allowed_frame_rates" : [ {
        "as_float" : 30.0,
        "as_fraction" : "30/1"
      } ]
    }, {
      "media_type" : "video",
      "label" : "hls540p_30fps",
      "video_codec" : "h264",
      "video_bitrate" : 1800,
      "max_video_bitrate" : 1800,
      "decoder_buffer_size" : 1800,
      "frame_rate" : 30.0,
      "keyframe_rate_units" : "frames",
      "keyframe_rate" : 16.0,
      "width" : 960,
      "height" : 540,
      "h264_reference_frames" : 4,
      "h264_bframes" : 3,
      "rate_control_mode" : "cbr",
      "sample_aspect_ratio" : "1:1",
      "allowed_frame_rates" : [ {
        "as_float" : 30.0,
        "as_fraction" : "30/1"
      } ]
    }, {
      "media_type" : "video",
      "label" : "hls360p_30fps",
      "video_codec" : "h264",
      "video_bitrate" : 936,
      "max_video_bitrate" : 936,
      "decoder_buffer_size" : 936,
      "frame_rate" : 30.0,
      "keyframe_rate_units" : "frames",
      "keyframe_rate" : 16.0,
      "width" : 640,
      "height" : 360,
      "h264_reference_frames" : 4,
      "h264_bframes" : 3,
      "rate_control_mode" : "cbr",
      "sample_aspect_ratio" : "1:1",
      "allowed_frame_rates" : [ {
        "as_float" : 30.0,
        "as_fraction" : "30/1"
      } ]
    }, {
      "media_type" : "video",
      "label" : "hls270p_30fps",
      "video_codec" : "h264",
      "video_bitrate" : 540,
      "max_video_bitrate" : 540,
      "decoder_buffer_size" : 540,
      "frame_rate" : 30.0,
      "keyframe_rate_units" : "frames",
      "keyframe_rate" : 16.0,
      "width" : 480,
      "height" : 270,
      "h264_reference_frames" : 4,
      "h264_bframes" : 3,
      "rate_control_mode" : "cbr",
      "sample_aspect_ratio" : "1:1",
      "allowed_frame_rates" : [ {
        "as_float" : 30.0,
        "as_fraction" : "30/1"
      } ]
    }, {
      "media_type" : "audio",
      "format" : "aac",
      "label" : "aac",
      "audio_bitrate" : 192,
      "audio_sample_rate" : 48000
    } ],
    "packages" : [ ],
    "manifest" : {
      "name" : "playlist",
      "segment_duration_seconds" : 2,
      "playlist_window_seconds" : 60,
      "include_iframe_only_stream" : true,
      "hls" : {
        "startover_window_seconds" : 900
      },
      "low_latency" : { }
    },
    "profile_type" : "live",
    "id" : "8d10b1333b864f94bd7cc03d"
  }, {
    "version" : 1,
    "model_version" : 2,
    "name" : "Live SD 4:3 576",
    "display_name" : "Live SD 4:3 576",
    "description" : "Live SD 4:3 576",
    "account_id" : -1,
    "brightcove_standard" : true,
    "date_created" : 1722972238,
    "date_last_modified" : 1722972238,
    "renditions" : [ {
      "media_type" : "video",
      "label" : "hls270p",
      "video_codec" : "h264",
      "video_bitrate" : 450,
      "decoder_bitrate_cap" : 540,
      "decoder_buffer_size" : 675,
      "frame_rate" : 30.0,
      "keyframe_rate" : 0.5,
      "width" : 360,
      "height" : 270,
      "h264_reference_frames" : 4,
      "h264_profile" : "main",
      "h264_level" : "3",
      "h264_bframes" : 3,
      "sample_aspect_ratio" : "1:1",
      "deinterlace" : "detect",
      "allowed_frame_rates" : [ {
        "as_float" : 23.97,
        "as_fraction" : "24000/1001"
      }, {
        "as_float" : 24.0,
        "as_fraction" : "24/1"
      }, {
        "as_float" : 25.0,
        "as_fraction" : "25/1"
      }, {
        "as_float" : 29.97,
        "as_fraction" : "30000/1001"
      }, {
        "as_float" : 30.0,
        "as_fraction" : "30/1"
      } ]
    }, {
      "media_type" : "video",
      "label" : "hls384p",
      "video_codec" : "h264",
      "video_bitrate" : 900,
      "decoder_bitrate_cap" : 1080,
      "decoder_buffer_size" : 1350,
      "frame_rate" : 30.0,
      "keyframe_rate" : 0.5,
      "width" : 512,
      "height" : 384,
      "h264_reference_frames" : 4,
      "h264_profile" : "main",
      "h264_level" : "3.1",
      "h264_bframes" : 3,
      "sample_aspect_ratio" : "1:1",
      "deinterlace" : "detect",
      "allowed_frame_rates" : [ {
        "as_float" : 23.97,
        "as_fraction" : "24000/1001"
      }, {
        "as_float" : 24.0,
        "as_fraction" : "24/1"
      }, {
        "as_float" : 25.0,
        "as_fraction" : "25/1"
      }, {
        "as_float" : 29.97,
        "as_fraction" : "30000/1001"
      }, {
        "as_float" : 30.0,
        "as_fraction" : "30/1"
      } ]
    }, {
      "media_type" : "video",
      "label" : "hls576p",
      "video_codec" : "h264",
      "video_bitrate" : 1800,
      "decoder_bitrate_cap" : 2160,
      "decoder_buffer_size" : 2700,
      "frame_rate" : 30.0,
      "keyframe_rate" : 0.5,
      "width" : 768,
      "height" : 576,
      "h264_reference_frames" : 4,
      "h264_profile" : "main",
      "h264_level" : "3.2",
      "h264_bframes" : 3,
      "sample_aspect_ratio" : "1:1",
      "deinterlace" : "detect",
      "allowed_frame_rates" : [ {
        "as_float" : 23.97,
        "as_fraction" : "24000/1001"
      }, {
        "as_float" : 24.0,
        "as_fraction" : "24/1"
      }, {
        "as_float" : 25.0,
        "as_fraction" : "25/1"
      }, {
        "as_float" : 29.97,
        "as_fraction" : "30000/1001"
      }, {
        "as_float" : 30.0,
        "as_fraction" : "30/1"
      } ]
    } ],
    "packages" : [ ],
    "manifest" : {
      "name" : "playlist",
      "segment_duration_seconds" : 6,
      "playlist_window_seconds" : 60,
      "hls" : {
        "startover_window_seconds" : 300
      }
    },
    "profile_type" : "live",
    "id" : "8d10b1dddb864f94bd7cc03d"
  }, {
    "version" : 1,
    "model_version" : 2,
    "name" : "Live SD 576",
    "display_name" : "Live SD 576",
    "description" : "Live SD 576",
    "account_id" : -1,
    "brightcove_standard" : true,
    "date_created" : 1722972238,
    "date_last_modified" : 1722972238,
    "renditions" : [ {
      "media_type" : "video",
      "label" : "hls270p",
      "video_codec" : "h264",
      "video_bitrate" : 450,
      "decoder_bitrate_cap" : 540,
      "decoder_buffer_size" : 675,
      "frame_rate" : 30.0,
      "keyframe_rate" : 0.5,
      "width" : 480,
      "height" : 270,
      "profile" : "main",
      "h264_reference_frames" : 4,
      "h264_level" : "3",
      "h264_bframes" : 3,
      "sample_aspect_ratio" : "1:1",
      "deinterlace" : "detect",
      "allowed_frame_rates" : [ {
        "as_float" : 23.97,
        "as_fraction" : "24000/1001"
      }, {
        "as_float" : 24.0,
        "as_fraction" : "24/1"
      }, {
        "as_float" : 25.0,
        "as_fraction" : "25/1"
      }, {
        "as_float" : 29.97,
        "as_fraction" : "30000/1001"
      }, {
        "as_float" : 30.0,
        "as_fraction" : "30/1"
      } ]
    }, {
      "media_type" : "video",
      "label" : "hls360p",
      "video_codec" : "h264",
      "video_bitrate" : 900,
      "decoder_bitrate_cap" : 1080,
      "decoder_buffer_size" : 1350,
      "frame_rate" : 30.0,
      "keyframe_rate" : 0.5,
      "width" : 640,
      "height" : 360,
      "profile" : "main",
      "h264_reference_frames" : 4,
      "h264_level" : "3.1",
      "h264_bframes" : 3,
      "sample_aspect_ratio" : "1:1",
      "deinterlace" : "detect",
      "allowed_frame_rates" : [ {
        "as_float" : 23.97,
        "as_fraction" : "24000/1001"
      }, {
        "as_float" : 24.0,
        "as_fraction" : "24/1"
      }, {
        "as_float" : 25.0,
        "as_fraction" : "25/1"
      }, {
        "as_float" : 29.97,
        "as_fraction" : "30000/1001"
      }, {
        "as_float" : 30.0,
        "as_fraction" : "30/1"
      } ]
    }, {
      "media_type" : "video",
      "label" : "hls576p",
      "video_codec" : "h264",
      "video_bitrate" : 1800,
      "decoder_bitrate_cap" : 2160,
      "decoder_buffer_size" : 2700,
      "frame_rate" : 30.0,
      "keyframe_rate" : 0.5,
      "width" : 1024,
      "height" : 576,
      "profile" : "main",
      "h264_reference_frames" : 4,
      "h264_level" : "3.2",
      "h264_bframes" : 3,
      "sample_aspect_ratio" : "1:1",
      "deinterlace" : "detect",
      "allowed_frame_rates" : [ {
        "as_float" : 23.97,
        "as_fraction" : "24000/1001"
      }, {
        "as_float" : 24.0,
        "as_fraction" : "24/1"
      }, {
        "as_float" : 25.0,
        "as_fraction" : "25/1"
      }, {
        "as_float" : 29.97,
        "as_fraction" : "30000/1001"
      }, {
        "as_float" : 30.0,
        "as_fraction" : "30/1"
      } ]
    } ],
    "packages" : [ ],
    "manifest" : {
      "name" : "playlist",
      "segment_duration_seconds" : 6,
      "playlist_window_seconds" : 60,
      "hls" : {
        "startover_window_seconds" : 300
      }
    },
    "profile_type" : "live",
    "id" : "8d10b1cccb864f94bd7cc03d"
}]