window.onload = (event) => {
  console.log('page is fully loaded');
  var profileData = [{"version":8,"name":"Live - HD","display_name":"Live - HD","description":"profile.descriptions.live_hd","account_id":-1,"brightcove_standard":true,"date_created":1359992036954,"date_last_modified":1503002226672,"renditions":[{"media_type":"video","format":"flv","audio_codec":"aac","audio_bitrate":64,"live_stream":true,"video_codec":"h264","video_bitrate":300,"decoder_bitrate_cap":450,"decoder_buffer_size":1200,"keyframe_rate":0.5,"max_frame_rate":30,"width":640,"height":360,"h264_profile":"main","id":"54d10824e4b09dcd1831110c"},{"media_type":"video","format":"flv","audio_codec":"aac","audio_bitrate":64,"live_stream":true,"video_codec":"h264","video_bitrate":600,"decoder_bitrate_cap":900,"decoder_buffer_size":2400,"keyframe_rate":0.5,"max_frame_rate":30,"width":854,"height":480,"h264_profile":"main","id":"54d10824e4b09dcd1831110d"},{"media_type":"video","format":"flv","audio_codec":"aac","audio_bitrate":128,"live_stream":true,"video_codec":"h264","video_bitrate":1100,"decoder_bitrate_cap":1650,"decoder_buffer_size":4400,"keyframe_rate":0.5,"max_frame_rate":30,"width":1024,"height":576,"h264_profile":"main","id":"54d10824e4b09dcd1831110e"},{"media_type":"video","format":"flv","audio_codec":"aac","audio_bitrate":128,"live_stream":true,"video_codec":"h264","video_bitrate":2500,"decoder_bitrate_cap":3750,"decoder_buffer_size":10000,"keyframe_rate":0.5,"max_frame_rate":30,"width":1280,"height":720,"h264_profile":"main","id":"54d10824e4b09dcd1831110f"},{"media_type":"video","format":"ts","type":"segmented","audio_codec":"aac","audio_bitrate":64,"hls_optimized_ts":true,"live_stream":true,"live_sliding_window_duration":300,"video_codec":"h264","video_bitrate":265,"decoder_bitrate_cap":398,"decoder_buffer_size":1060,"max_frame_rate":30,"forced_keyframe_rate":0.5,"width":428,"height":240,"h264_profile":"main","id":"54d10824e4b09dcd18311110"},{"media_type":"video","format":"ts","type":"segmented","audio_codec":"aac","audio_bitrate":64,"hls_optimized_ts":true,"live_stream":true,"live_sliding_window_duration":300,"video_codec":"h264","video_bitrate":600,"decoder_bitrate_cap":900,"decoder_buffer_size":2400,"max_frame_rate":30,"forced_keyframe_rate":0.5,"width":640,"height":360,"h264_profile":"main","id":"54d10824e4b09dcd18311111"},{"media_type":"video","format":"ts","type":"segmented","audio_codec":"aac","audio_bitrate":64,"hls_optimized_ts":true,"live_stream":true,"live_sliding_window_duration":300,"video_codec":"h264","video_bitrate":1100,"decoder_bitrate_cap":1650,"decoder_buffer_size":4400,"max_frame_rate":30,"forced_keyframe_rate":0.5,"width":960,"height":540,"h264_profile":"main","id":"54d10824e4b09dcd18311112"},{"media_type":"video","format":"ts","type":"segmented","audio_codec":"aac","audio_bitrate":128,"hls_optimized_ts":true,"live_stream":true,"live_sliding_window_duration":300,"video_codec":"h264","video_bitrate":2500,"decoder_bitrate_cap":3750,"decoder_buffer_size":10000,"max_frame_rate":30,"forced_keyframe_rate":0.5,"width":1280,"height":720,"h264_profile":"main","id":"54d10824e4b09dcd18311113"}],"packages":[],"id":"510fd4e4e4b0c9164cbe9b2d"},{"version":2,"name":"multi-platform-extended-static-hevc-with-mp4","display_name":"Multiplatform Extended HEVC with MP4","description":"Deliver high quality content for a wide range content types and screen sizes including mobile, desktop, large screens, and syndication.","account_id":-1,"brightcove_standard":true,"date_created":1581706195164,"date_last_modified":1594847451135,"digital_master":{"rendition":"passthrough","distribute":false},"renditions":[],"packages":[],"dynamic_origin":{"renditions":["default/audio128","default/video300hevc","default/video1600hevc","default/video550hevc","default/video1000hevc","default/video2850hevc","default/progressive2000","default/video1300hevc","default/audio64"],"images":[{"label":"poster","height":720,"width":1280},{"label":"thumbnail","height":90,"width":160}],"hevc":true},"id":"5e46e57e708a441e00a7ba1a"},{"version":2,"name":"multi-platform-extended-dynamic-mixed-codec","display_name":"Multiplatform Extended (CAE) H.264 + HEVC","description":"Deliver high quality content for a wide range content types and screen sizes including mobile, desktop and large screens.","account_id":-1,"brightcove_standard":true,"date_created":1594855034000,"date_last_modified":1626801002193,"digital_master":{"rendition":"passthrough","distribute":false},"renditions":[],"packages":[],"dynamic_origin":{"renditions":["default/audio128","default/audio64"],"images":[{"label":"poster","height":720,"width":1280},{"label":"thumbnail","height":90,"width":160}],"dynamic_profile_options":{"min_renditions":3,"max_renditions":12,"max_frame_rate":30,"video_codecs":["h264","hevc"],"video_codec_options":{"h264":{"min_renditions":2,"max_bitrate":4200,"max_first_rendition_bitrate":250,"min_resolution":{"width":320,"height":180},"max_resolution":{"width":1920,"height":1080},"max_first_rendition_resolution":{"width":640,"height":360},"max_renditions":8},"hevc":{"min_renditions":1,"max_bitrate":3200,"max_first_rendition_bitrate":250,"min_resolution":{"width":480,"height":270},"max_resolution":{"width":1920,"height":1080},"max_first_rendition_resolution":{"width":960,"height":540},"max_renditions":6}},"fixed_frame_rate":true,"bitrate_cap_to_bitrate_ratio":1.5,"buffer_size_to_bitrate_ratio":2,"bitrate_cap_offset":0,"buffer_size_offset":0,"sample_aspect_ratio":"1:1"},"hevc":true},"id":"5ff75ebbf6f005f6c71b0d1d"},{"version":1,"model_version":1,"name":"premium-live-hd-1080p-tier-2","display_name":"Premium Live HD 1080p - Tier 2","description":"Deliver high-quality renditions to maximize quality for desktop and OTT.","account_id":-1,"brightcove_standard":true,"date_created":1528136204000,"date_last_modified":1528136204000,"renditions":[{"media_type":"video","format":"ts","segment_seconds":6,"label":"hls1080p","live_stream":true,"video_codec":"h264","video_bitrate":4000,"keyframe_interval":60,"width":1920,"height":1080,"h264_profile":"high"},{"media_type":"video","format":"ts","segment_seconds":6,"label":"hls720p","live_stream":true,"video_codec":"h264","video_bitrate":2400,"keyframe_interval":60,"width":1280,"height":720,"h264_profile":"high"},{"media_type":"video","format":"ts","segment_seconds":6,"label":"hls540p","live_stream":true,"video_codec":"h264","video_bitrate":1700,"keyframe_interval":60,"width":960,"height":540,"h264_profile":"main"},{"media_type":"video","format":"ts","segment_seconds":6,"label":"hls360p","live_stream":true,"video_codec":"h264","video_bitrate":900,"keyframe_interval":60,"width":640,"height":360,"h264_profile":"main"}],"packages":[],"id":"8d10b1667b864f94bd7cc03d"},{"version":4,"name":"multi-platform-extended-dynamic","display_name":"Multiplatform Extended (CAE)","description":"Deliver high quality content for a wide range content types and screen sizes including mobile, desktop and large screens.","account_id":-1,"brightcove_standard":true,"date_created":1495114240899,"date_last_modified":1510693542326,"digital_master":{"rendition":"passthrough","distribute":false},"renditions":[],"packages":[],"dynamic_origin":{"renditions":["default/audio128","default/audio64","default/audio96","default/audio192"],"images":[{"label":"poster","height":720,"width":1280},{"label":"thumbnail","height":90,"width":160}],"dynamic_profile_options":{"min_renditions":2,"max_renditions":8,"min_resolution":{"width":320,"height":180},"max_resolution":{"width":1920,"height":1080},"max_frame_rate":30,"max_bitrate":4200,"max_first_rendition_bitrate":250,"fixed_frame_rate":true,"bitrate_cap_to_bitrate_ratio":1.5,"buffer_size_to_bitrate_ratio":2,"bitrate_cap_offset":0,"buffer_size_offset":0,"select_baseline_profile_configuration":true,"sample_aspect_ratio":"1:1"}},"id":"86895c0c460a4c238676e0ad"},{"version":1,"model_version":1,"name":"standard-live-hd-720p-tier-1","display_name":"Standard Live HD 720p - Tier 1","description":"Well balanced setting to cover a variety of platforms including  mobile, desktop, and OTT.","account_id":-1,"brightcove_standard":true,"date_created":1528136204000,"date_last_modified":1528136204000,"renditions":[{"media_type":"video","format":"ts","segment_seconds":6,"label":"hls720p","live_stream":true,"video_codec":"h264","video_bitrate":2400,"keyframe_interval":60,"width":1280,"height":720,"h264_profile":"high"},{"media_type":"video","format":"ts","segment_seconds":6,"label":"hls540p","live_stream":true,"video_codec":"h264","video_bitrate":1700,"keyframe_interval":60,"width":960,"height":540,"h264_profile":"main"},{"media_type":"video","format":"ts","segment_seconds":6,"label":"hls360p","live_stream":true,"video_codec":"h264","video_bitrate":900,"keyframe_interval":60,"width":640,"height":360,"h264_profile":"main"},{"media_type":"video","format":"ts","segment_seconds":6,"label":"hls270p","live_stream":true,"video_codec":"h264","video_bitrate":450,"keyframe_interval":60,"width":480,"height":270,"h264_profile":"baseline"}],"packages":[],"id":"6e1af1a714ee45e7ac27c5ad"},{"version":2,"name":"multi-platform-standard-static","display_name":"Multiplatform Standard","description":"Deliver a wide range of content types across a variety of platforms on mobile and desktop.","account_id":-1,"brightcove_standard":true,"date_created":1495114240899,"date_last_modified":1503002227773,"digital_master":{"rendition":"passthrough","distribute":false},"renditions":[],"packages":[],"dynamic_origin":{"renditions":["default/video450","default/video1200","default/audio128","default/video700","default/video2000","default/video1700","default/audio64","default/audio96","default/video900"],"images":[{"label":"poster","height":720,"width":1280},{"label":"thumbnail","height":90,"width":160}]},"id":"6198c17bbbdc42a4bb60a41f"},{"version":4,"name":"low-bandwidth-dynamic","display_name":"Bandwidth Limited (CAE)","description":"Provide optimal playback experience to end users in low bandwidth zones","account_id":-1,"brightcove_standard":true,"date_created":1495114240899,"date_last_modified":1510693542181,"digital_master":{"rendition":"passthrough","distribute":false},"renditions":[],"packages":[],"dynamic_origin":{"renditions":["default/audio128","default/audio64","default/audio96"],"images":[{"label":"poster","height":720,"width":1280},{"label":"thumbnail","height":90,"width":160}],"dynamic_profile_options":{"min_renditions":2,"max_renditions":6,"min_resolution":{"width":192,"height":108},"max_resolution":{"width":1280,"height":720},"max_frame_rate":30,"max_bitrate":1800,"max_first_rendition_bitrate":120,"fixed_frame_rate":true,"bitrate_cap_to_bitrate_ratio":1.5,"buffer_size_to_bitrate_ratio":2,"bitrate_cap_offset":0,"buffer_size_offset":0,"select_baseline_profile_configuration":true,"sample_aspect_ratio":"1:1"}},"id":"4d11dc18c66c4720a0418e4c"},{"version":2,"name":"multi-platform-extended-static-mixed-codec","display_name":"Multiplatform Extended Static H.264 + HEVC","description":"Deliver high quality content for a wide range content types and screen sizes including mobile, desktop and large screens.","account_id":-1,"brightcove_standard":true,"date_created":1581706195164,"date_last_modified":1594847451265,"digital_master":{"rendition":"passthrough","distribute":false},"renditions":[],"packages":[],"dynamic_origin":{"renditions":["default/video2500","default/video1200","default/video3800","default/video300hevc","default/video1600hevc","default/video550hevc","default/video1000hevc","default/audio64","default/video450","default/audio128","default/video2850hevc","default/video700","default/video2000","default/video1300hevc","default/video900","default/video3500"],"images":[{"label":"poster","height":720,"width":1280},{"label":"thumbnail","height":90,"width":160}],"hevc":true},"id":"5e46e57f305eb2517f27a543"},{"version":3,"name":"multi-platform-extended-static","display_name":"Multiplatform Extended","description":"Deliver high quality content for a wide range content types and screen sizes including mobile, desktop and large screens.","account_id":-1,"brightcove_standard":true,"date_created":1495114240899,"date_last_modified":1528922949000,"digital_master":{"rendition":"passthrough","distribute":false},"renditions":[],"packages":[],"dynamic_origin":{"renditions":["default/video450","default/video1200","default/audio128","default/video700","default/video2000","default/video1700","default/audio64","default/audio96","default/audio192","default/video900","default/video3500"],"images":[{"label":"poster","height":720,"width":1280},{"label":"thumbnail","height":90,"width":160}]},"id":"f1b16093e2dc4f81810f1488"},{"version":1,"name":"multi-platform-extended-static-with-mp4","display_name":"Multiplatform Extended with MP4","description":"Deliver high quality content for a wide range content types and screen sizes including mobile, desktop, large screens, and syndication.","account_id":-1,"brightcove_standard":true,"date_created":1528922949000,"date_last_modified":1528922949000,"digital_master":{"rendition":"passthrough","distribute":false},"renditions":[],"packages":[],"dynamic_origin":{"renditions":["default/video450","default/video1200","default/audio128","default/progressive2000","default/video700","default/video2000","default/video1700","default/audio64","default/audio96","default/audio192","default/video900","default/video3500"],"images":[{"label":"poster","height":720,"width":1280},{"label":"thumbnail","height":90,"width":160}]},"id":"f984445692374bd99e6270d8"},{"version":2,"name":"multi-platform-extended-static-mixed-codec-with-mp4","display_name":"Multiplatform Extended Static H.264 + HEVC with MP4","description":"Deliver high quality content for a wide range content types and screen sizes including mobile, desktop and large screens, and syndication.","account_id":-1,"brightcove_standard":true,"date_created":1581706195164,"date_last_modified":1594847451222,"digital_master":{"rendition":"passthrough","distribute":false},"renditions":[],"packages":[],"dynamic_origin":{"renditions":["default/video2500","default/video1200","default/video3800","default/video300hevc","default/video1600hevc","default/video550hevc","default/video1000hevc","default/audio64","default/video450","default/audio128","default/video2850hevc","default/progressive2000","default/video700","default/video2000","default/video1300hevc","default/video900","default/video3500"],"images":[{"label":"poster","height":720,"width":1280},{"label":"thumbnail","height":90,"width":160}],"hevc":true},"id":"5e46e59b135b6662f386559d"},{"version":8,"name":"Live - Standard","display_name":"Live - Standard","description":"profile.descriptions.live_standard","account_id":-1,"brightcove_standard":true,"date_created":1359992037660,"date_last_modified":1503002226829,"renditions":[{"media_type":"video","format":"flv","audio_codec":"aac","audio_bitrate":64,"live_stream":true,"video_codec":"h264","video_bitrate":750,"decoder_bitrate_cap":1125,"decoder_buffer_size":3000,"keyframe_rate":0.5,"max_frame_rate":30,"width":640,"height":360,"h264_profile":"main","id":"54d10825e4b0f66e5c937e2a"},{"media_type":"video","format":"flv","audio_codec":"aac","audio_bitrate":128,"live_stream":true,"video_codec":"h264","video_bitrate":1100,"decoder_bitrate_cap":1650,"decoder_buffer_size":4400,"keyframe_rate":0.5,"max_frame_rate":30,"width":854,"height":480,"h264_profile":"main","id":"54d10825e4b0f66e5c937e2b"},{"media_type":"video","format":"ts","type":"segmented","audio_codec":"aac","audio_bitrate":64,"hls_optimized_ts":true,"live_stream":true,"live_sliding_window_duration":300,"video_codec":"h264","video_bitrate":580,"decoder_bitrate_cap":870,"decoder_buffer_size":2320,"max_frame_rate":30,"forced_keyframe_rate":0.5,"width":640,"height":360,"h264_profile":"main","id":"54d10825e4b0f66e5c937e2c"},{"media_type":"video","format":"ts","type":"segmented","audio_codec":"aac","audio_bitrate":64,"hls_optimized_ts":true,"live_stream":true,"live_sliding_window_duration":300,"video_codec":"h264","video_bitrate":910,"decoder_bitrate_cap":1365,"decoder_buffer_size":3640,"max_frame_rate":30,"forced_keyframe_rate":0.5,"width":854,"height":480,"h264_profile":"main","id":"54d10825e4b0f66e5c937e2d"}],"packages":[],"id":"510fd4e5e4b0c9164cbe9b48"},{"version":1,"model_version":1,"name":"standard-live-sd-tier-1","display_name":"Standard Live SD - Tier 1","description":"Standard SD renditions to maximize device reach while balancing data consumption.","account_id":-1,"brightcove_standard":true,"date_created":1528136204000,"date_last_modified":1528136204000,"renditions":[{"media_type":"video","format":"ts","segment_seconds":6,"label":"hls540p","live_stream":true,"video_codec":"h264","video_bitrate":1700,"keyframe_interval":60,"width":960,"height":540,"h264_profile":"main"},{"media_type":"video","format":"ts","segment_seconds":6,"label":"hls360p","live_stream":true,"video_codec":"h264","video_bitrate":900,"keyframe_interval":60,"width":640,"height":360,"h264_profile":"main"},{"media_type":"video","format":"ts","segment_seconds":6,"label":"hls270p","live_stream":true,"video_codec":"h264","video_bitrate":450,"keyframe_interval":60,"width":480,"height":270,"h264_profile":"baseline"}],"packages":[],"id":"f34395bfcc7f487e802c8450"},{"version":1,"name":"multi-platform-standard-static-with-mp4","display_name":"Multiplatform Standard with MP4","description":"Deliver a wide range of content types across a variety of platforms on mobile, desktop and syndication.","account_id":-1,"brightcove_standard":true,"date_created":1528922949000,"date_last_modified":1528922949000,"digital_master":{"rendition":"passthrough","distribute":false},"renditions":[],"packages":[],"dynamic_origin":{"renditions":["default/video450","default/video1200","default/audio128","default/progressive2000","default/video700","default/video2000","default/video1700","default/audio64","default/audio96","default/video900"],"images":[{"label":"poster","height":720,"width":1280},{"label":"thumbnail","height":90,"width":160}]},"id":"5f74620ae6804c1792ba2bc4"},{"version":1,"name":"multi-platform-standard-dynamic-with-mp4","display_name":"Multiplatform Standard (CAE) with MP4","description":"Deliver a wide range of content types across a variety of platforms on mobile, desktop, and syndication.","account_id":-1,"brightcove_standard":true,"date_created":1528922949000,"date_last_modified":1528922949000,"digital_master":{"rendition":"passthrough","distribute":false},"renditions":[],"packages":[],"dynamic_origin":{"renditions":["default/audio128","default/progressive2000","default/audio64","default/audio96"],"images":[{"label":"poster","height":720,"width":1280},{"label":"thumbnail","height":90,"width":160}],"dynamic_profile_options":{"min_renditions":2,"max_renditions":6,"min_resolution":{"width":320,"height":180},"max_resolution":{"width":1280,"height":720},"max_frame_rate":30,"max_bitrate":2400,"max_first_rendition_bitrate":250,"fixed_frame_rate":true,"bitrate_cap_to_bitrate_ratio":1.5,"buffer_size_to_bitrate_ratio":2,"bitrate_cap_offset":0,"buffer_size_offset":0,"select_baseline_profile_configuration":true,"sample_aspect_ratio":"1:1"}},"id":"1f6f2d9a603f4b7d871e149d"},{"version":2,"name":"multi-platform-extended-dynamic-hevc-with-mp4","display_name":"Multiplatform Extended HEVC (CAE) with MP4","description":"Deliver high quality content for a wide range content types and screen sizes including mobile, desktop, large screens, and syndication.","account_id":-1,"brightcove_standard":true,"date_created":1581706195164,"date_last_modified":1594847450965,"digital_master":{"rendition":"passthrough","distribute":false},"renditions":[],"packages":[],"dynamic_origin":{"renditions":["default/audio128","default/progressive2000","default/audio64"],"images":[{"label":"poster","height":720,"width":1280},{"label":"thumbnail","height":90,"width":160}],"dynamic_profile_options":{"min_renditions":2,"max_renditions":8,"min_resolution":{"width":320,"height":180},"max_resolution":{"width":1920,"height":1080},"max_frame_rate":30,"max_bitrate":3200,"max_first_rendition_bitrate":200,"video_codec":"hevc","fixed_frame_rate":true,"bitrate_cap_to_bitrate_ratio":1.5,"buffer_size_to_bitrate_ratio":2,"bitrate_cap_offset":0,"buffer_size_offset":0,"sample_aspect_ratio":"1:1"},"hevc":true},"id":"5e470e0c4c881c16fffdb88d"},{"version":8,"name":"Live - Premium HD","display_name":"Live - Premium HD","description":"profile.descriptions.live_premium_hd","account_id":-1,"brightcove_standard":true,"date_created":1359992037245,"date_last_modified":1503002226756,"renditions":[{"media_type":"video","format":"flv","audio_codec":"aac","audio_bitrate":64,"live_stream":true,"video_codec":"h264","video_bitrate":270,"decoder_bitrate_cap":405,"decoder_buffer_size":1080,"keyframe_rate":0.5,"max_frame_rate":30,"width":640,"height":360,"h264_profile":"main","id":"54d10825e4b09dcd18311115"},{"media_type":"video","format":"flv","audio_codec":"aac","audio_bitrate":64,"live_stream":true,"video_codec":"h264","video_bitrate":425,"decoder_bitrate_cap":638,"decoder_buffer_size":1700,"keyframe_rate":0.5,"max_frame_rate":30,"width":640,"height":360,"h264_profile":"main","id":"54d10825e4b09dcd18311116"},{"media_type":"video","format":"flv","audio_codec":"aac","audio_bitrate":64,"live_stream":true,"video_codec":"h264","video_bitrate":800,"decoder_bitrate_cap":1200,"decoder_buffer_size":3200,"keyframe_rate":0.5,"max_frame_rate":30,"width":1024,"height":576,"h264_profile":"main","id":"54d10825e4b09dcd18311117"},{"media_type":"video","format":"flv","audio_codec":"aac","audio_bitrate":128,"live_stream":true,"video_codec":"h264","video_bitrate":1700,"decoder_bitrate_cap":2550,"decoder_buffer_size":6800,"keyframe_rate":0.5,"max_frame_rate":30,"width":1024,"height":576,"h264_profile":"main","id":"54d10825e4b09dcd18311118"},{"media_type":"video","format":"flv","audio_codec":"aac","audio_bitrate":128,"live_stream":true,"video_codec":"h264","video_bitrate":2500,"decoder_bitrate_cap":3750,"decoder_buffer_size":10000,"keyframe_rate":0.5,"max_frame_rate":30,"width":1280,"height":720,"h264_profile":"main","id":"54d10825e4b09dcd18311119"},{"media_type":"video","format":"flv","audio_codec":"aac","audio_bitrate":128,"live_stream":true,"video_codec":"h264","video_bitrate":3250,"decoder_bitrate_cap":4875,"decoder_buffer_size":13000,"keyframe_rate":0.5,"max_frame_rate":30,"width":1920,"height":1080,"h264_profile":"main","id":"54d10825e4b09dcd1831111a"},{"media_type":"video","format":"ts","type":"segmented","audio_codec":"aac","audio_bitrate":64,"hls_optimized_ts":true,"live_stream":true,"live_sliding_window_duration":300,"video_codec":"h264","video_bitrate":600,"decoder_bitrate_cap":900,"decoder_buffer_size":2400,"max_frame_rate":30,"forced_keyframe_rate":0.5,"width":640,"height":360,"h264_profile":"main","id":"54d10825e4b09dcd1831111b"},{"media_type":"video","format":"ts","type":"segmented","audio_codec":"aac","audio_bitrate":64,"hls_optimized_ts":true,"live_stream":true,"live_sliding_window_duration":300,"video_codec":"h264","video_bitrate":910,"decoder_bitrate_cap":1365,"decoder_buffer_size":3640,"max_frame_rate":30,"forced_keyframe_rate":0.5,"width":960,"height":540,"h264_profile":"main","id":"54d10825e4b09dcd1831111c"},{"media_type":"video","format":"ts","type":"segmented","audio_codec":"aac","audio_bitrate":128,"hls_optimized_ts":true,"live_stream":true,"live_sliding_window_duration":300,"video_codec":"h264","video_bitrate":1250,"decoder_bitrate_cap":1875,"decoder_buffer_size":5000,"max_frame_rate":30,"forced_keyframe_rate":0.5,"width":1024,"height":576,"h264_profile":"main","id":"54d10825e4b09dcd1831111d"},{"media_type":"video","format":"ts","type":"segmented","audio_codec":"aac","audio_bitrate":128,"hls_optimized_ts":true,"live_stream":true,"live_sliding_window_duration":300,"video_codec":"h264","video_bitrate":1750,"decoder_bitrate_cap":2625,"decoder_buffer_size":7000,"max_frame_rate":30,"forced_keyframe_rate":0.5,"width":1280,"height":720,"h264_profile":"main","id":"54d10825e4b09dcd1831111e"},{"media_type":"video","format":"ts","type":"segmented","audio_codec":"aac","audio_bitrate":128,"hls_optimized_ts":true,"live_stream":true,"live_sliding_window_duration":300,"video_codec":"h264","video_bitrate":2750,"decoder_bitrate_cap":4125,"decoder_buffer_size":11000,"max_frame_rate":30,"forced_keyframe_rate":0.5,"width":1280,"height":720,"h264_profile":"main","id":"54d10825e4b09dcd1831111f"}],"packages":[],"id":"510fd4e5e4b0c9164cbe9b3a"},{"version":4,"name":"multi-platform-standard-dynamic","display_name":"Multiplatform Standard (CAE)","description":"Deliver a wide range of content types across a variety of platforms on mobile and desktop.","account_id":-1,"brightcove_standard":true,"date_created":1495114240899,"date_last_modified":1510693542451,"digital_master":{"rendition":"passthrough","distribute":false},"renditions":[],"packages":[],"dynamic_origin":{"renditions":["default/audio128","default/audio64","default/audio96"],"images":[{"label":"poster","height":720,"width":1280},{"label":"thumbnail","height":90,"width":160}],"dynamic_profile_options":{"min_renditions":2,"max_renditions":6,"min_resolution":{"width":320,"height":180},"max_resolution":{"width":1280,"height":720},"max_frame_rate":30,"max_bitrate":2400,"max_first_rendition_bitrate":250,"fixed_frame_rate":true,"bitrate_cap_to_bitrate_ratio":1.5,"buffer_size_to_bitrate_ratio":2,"bitrate_cap_offset":0,"buffer_size_offset":0,"select_baseline_profile_configuration":true,"sample_aspect_ratio":"1:1"}},"id":"39659dfe5b8a47ec9c5f31bb"},{"version":2,"name":"multi-platform-extended-static-hevc","display_name":"Multiplatform Extended HEVC","description":"Deliver high quality content for a wide range content types and screen sizes including mobile, desktop and large screens.","account_id":-1,"brightcove_standard":true,"date_created":1581706195164,"date_last_modified":1594847451180,"digital_master":{"rendition":"passthrough","distribute":false},"renditions":[],"packages":[],"dynamic_origin":{"renditions":["default/audio128","default/video300hevc","default/video1600hevc","default/video550hevc","default/video1000hevc","default/video2850hevc","default/video1300hevc","default/audio64"],"images":[{"label":"poster","height":720,"width":1280},{"label":"thumbnail","height":90,"width":160}],"hevc":true},"id":"5e46e572eced91e206108b82"},{"version":1,"name":"multi-platform-extended-dynamic-with-mp4","display_name":"Multiplatform Extended (CAE) with MP4","description":"Deliver high quality content for a wide range content types and screen sizes including mobile, desktop, large screens, and syndication.","account_id":-1,"brightcove_standard":true,"date_created":1528922949000,"date_last_modified":1528922949000,"digital_master":{"rendition":"passthrough","distribute":false},"renditions":[],"packages":[],"dynamic_origin":{"renditions":["default/audio128","default/progressive2000","default/audio64","default/audio96","default/audio192"],"images":[{"label":"poster","height":720,"width":1280},{"label":"thumbnail","height":90,"width":160}],"dynamic_profile_options":{"min_renditions":2,"max_renditions":8,"min_resolution":{"width":320,"height":180},"max_resolution":{"width":1920,"height":1080},"max_frame_rate":30,"max_bitrate":4200,"max_first_rendition_bitrate":250,"fixed_frame_rate":true,"bitrate_cap_to_bitrate_ratio":1.5,"buffer_size_to_bitrate_ratio":2,"bitrate_cap_offset":0,"buffer_size_offset":0,"select_baseline_profile_configuration":true,"sample_aspect_ratio":"1:1"}},"id":"8e763cc040da4923bb171322"},{"version":1,"name":"low-bandwidth-dynamic-with-mp4","display_name":"Bandwidth Limited (CAE) with MP4","description":"Provide optimal playback experience to end users in low bandwidth zones and syndication","account_id":-1,"brightcove_standard":true,"date_created":1528922949000,"date_last_modified":1528922949000,"digital_master":{"rendition":"passthrough","distribute":false},"renditions":[],"packages":[],"dynamic_origin":{"renditions":["default/audio128","default/audio64","default/progressive1200","default/audio96"],"images":[{"label":"poster","height":720,"width":1280},{"label":"thumbnail","height":90,"width":160}],"dynamic_profile_options":{"min_renditions":2,"max_renditions":6,"min_resolution":{"width":192,"height":108},"max_resolution":{"width":1280,"height":720},"max_frame_rate":30,"max_bitrate":1800,"max_first_rendition_bitrate":120,"fixed_frame_rate":true,"bitrate_cap_to_bitrate_ratio":1.5,"buffer_size_to_bitrate_ratio":2,"bitrate_cap_offset":0,"buffer_size_offset":0,"select_baseline_profile_configuration":true,"sample_aspect_ratio":"1:1"}},"id":"5b660d11cd574e65b3d17ca7"},{"version":2,"name":"multi-platform-extended-dynamic-hevc","display_name":"Multiplatform Extended HEVC (CAE)","description":"Deliver high quality content for a wide range content types and screen sizes including mobile, desktop and large screens.","account_id":-1,"brightcove_standard":true,"date_created":1581706195164,"date_last_modified":1594847451012,"digital_master":{"rendition":"passthrough","distribute":false},"renditions":[],"packages":[],"dynamic_origin":{"renditions":["default/audio128","default/audio64"],"images":[{"label":"poster","height":720,"width":1280},{"label":"thumbnail","height":90,"width":160}],"dynamic_profile_options":{"min_renditions":2,"max_renditions":8,"min_resolution":{"width":320,"height":180},"max_resolution":{"width":1920,"height":1080},"max_frame_rate":30,"max_bitrate":3200,"max_first_rendition_bitrate":200,"video_codec":"hevc","fixed_frame_rate":true,"bitrate_cap_to_bitrate_ratio":1.5,"buffer_size_to_bitrate_ratio":2,"bitrate_cap_offset":0,"buffer_size_offset":0,"sample_aspect_ratio":"1:1"},"hevc":true},"id":"5e470e014b23617ad079c486"}],
    staticProfiles = [],
    dynamicProfiles = [],
    mainSection = document.querySelector('.bcls-article'),
    dd_profile_summary = document.getElementById('dd_profile_summary'),
    cae_profile_summary = document.getElementById('cae_profile_summary'),
    headersArray,
    prop,
    side_nav_created = false;



  /**
   * Removes all child elements (eg the items in a list)
   * @param {node} parent the element to remove children from
   */
  function removeAllChildNodes(parent) {
    if (parent) {
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
    } else {
      console.log(parent, 'Either the parent node was not passed in or does not exist');
    }
  }


    function create_inpage_nav() {
      var h2s = document.getElementsByTagName('h2'),
        in_page_nav = document.getElementById('in_page_nav'),
        h2,
        li,
        link,
        i,
        iMax,
        frag = document.createDocumentFragment(),
        parent,
        grandparent;

      // clear any current in-page nav items
      removeAllChildNodes(in_page_nav);

          iMax = h2s.length;
          for (i = 0; i < iMax; i++) {
            h2 = h2s[i];
            if (h2.id) {
              li = document.createElement('li');
              li.setAttribute('class', 'toc-item');
              link = document.createElement('a');
              link.setAttribute('href', '#' + h2.id);
              link.textContent = h2.textContent;
              li.appendChild(link);
              frag.appendChild(li);
            }
          }

          if (frag.firstChild) {
            in_page_nav.appendChild(frag);
            implementHighlighting();
            // side nav is being generated; set the flag
            side_nav_created = true;
          } else {
            parent = in_page_nav.parentNode;
            grandparent = parent.parentNode;
            grandparent.removeChild(parent);
          }

          // implement highlighting
          // smooth scrolling for Safari

          function implementHighlighting() {
            var navItems = document.getElementsByClassName('toc-item'),
              linkEl,
              j,
              jMax,
              linkTarget;

            iMax = navItems.length;
            for (i = 0; i < iMax; i++) {
              linkEl = navItems[i];
              linkTarget = linkEl.firstElementChild.getAttribute('href');

              linkEl.addEventListener('click', function(e) {
                document.querySelector(linkTarget).scrollIntoView({
                  behavior: 'smooth'
                });
                jMax = navItems.length;
                for (j = 0; j < jMax; j++) {
                  navItems[j].removeAttribute('style');
                }
                console.log('this', this);

                this.setAttribute('style', 'color:rgb(220, 243, 251);background-color:rgb(21, 160, 183);');
              });
            }
          }
    }


/**
 * sort an array of objects based on an object property
 * @param {array} targetArray - array to be sorted
 * @param {string|number} objProperty - object property to sort on
 * @return sorted array
 */
function sortArray(targetArray, objProperty) {
  targetArray.sort(function (a, b) {
    var propA = a[objProperty].toLowerCase(), propB = b[objProperty].toLowerCase();
    // sort ascending; reverse propA and propB to sort descending
    if (propA < propB) {
          return -1;
    } else if (propA > propB) {
          return 1;
    } else {
          return 0;
    }
  });
  return targetArray;
}

  /**
   * determines whether specified item is in an array
   *
   * @param {array} array to check
   * @param {string} item to check for
   * @return {boolean} true if item is in the array, else false
   */
  function isItemInArray(arr, item) {
    var i,
      iMax = arr.length;
    for (i = 0; i < iMax; i++) {
      if (arr[i] === item) {
        return true;
      }
    }
    return false;
  }


  /**
   * determine if a rendition is audio
   */
  function isAudio(item) {
    if (item.indexOf('audio') >= 0) {
      return true;
    }
    return false;
  }


  /**
   * remove spaces from passed string
   * @param  {string} str - the string to remove spaces from
   * @return {str}   - string with spaces removed
   */
  function removeSpaces(str) {
    if (isDefined(str)) {
      return str.replace(/\s/g, "");
    }
    return "";
  }
  /**
   * tests for all the ways a variable might be undefined or not have a value
   * @param {*} x the variable to test
   * @return {Boolean} true if variable is defined and has a value
   */
  function isDefined(x) {
    if (x === '' || x === null || x === undefined) {
      return false;
    } else {
      return true;
    }
  }

  /**
   * dedupe a simple array of strings or numbers
   * @param {array} arr the array to be deduped
   * @return {array} out the deduped array
   */
  function dedupe(arr) {
    var i,
      len = arr.length,
      out = [],
      obj = {};

    for (i = 0; i < len; i++) {
      obj[arr[i]] = 0;
    }
    for (i in obj) {
      out.push(i);
    }
    return out;
  }


  /**
   * create an element
   * @param  {string} type - the element type
   * @param  {object} attributes - attributes to add to the element
   * @return {object} the HTML element
   */
  function createEl(type, attributes) {
    var el;
    if (isDefined(type)) {
      el = document.createElement(type);
      if (isDefined(attributes)) {
        var attr;
        for (attr in attributes) {
          el.setAttribute(attr, attributes[attr]);
        }
      }
      return el;
    }
  }



  function buildDetailTables() {
    console.log('building detail tables');

    // build the details of each rendition as a section
    var section,
      fragment = document.createDocumentFragment(),
      sectionHeading,
      sectionSubHeading,
      sectionJsonHeading,
      sectionJsonP,
      sectionTableHeading,
      renditionList,
      renditionListNote,
      renditionListNoteA,
      renditionTable,
      renditionthead,
      renditiontbody,
      profileSettingsTable,
      profileSettingsTableHeading,
      profileSettingsthead,
      profileSettingstbody,
      tr,
      th,
      td,
      ul,
      li,
      link,
      profilePre,
      profileCode,
      i, j, k, jMax, iMax, kMax,
      headings,
      profile,
      rendition,
      renditionProperty,
      text,
      str,
      l,
      lMax,
      re = /_/g;
    // static profiles
    iMax = staticProfiles.length;
    for (i = 0; i < iMax; i++) {
      var renditionsArray = [],
        renditionListHead,
        renditionListItem;
      headersArray = [];
      profile = staticProfiles[i];
      renditionsArray = profile.dynamic_origin.renditions;
      renditionsArray.sort();
      // remove id's and other stuff from data
      delete profile.id;
      delete profile.version;
      delete profile.brightcove_standard;
      delete profile.date_created;
      delete profile.date_last_modified;
      delete profile.videoRenditions;
      delete profile.audioRenditions;
      delete profile.imageRenditions;
      delete profile.numRenditions;
      // profile.name = profile.name + ' Copy';
      profile.account_id = null;
      section = createEl("section", {
        class: "bcls-section"
      });
      sectionHeading = createEl("h2", {
        id: removeSpaces(profile.name)
      });
      sectionSubHeading = document.createElement("p");
      renditionListHead = document.createElement('h5');
      renditionList = createEl('ul', {
        'style': 'font-weight:600;'
      });
      renditionListHead.textContent = 'Renditions included:';
      kMax = renditionsArray.length;
      for (k = 0; k < kMax; k++) {
        renditionListItem = document.createElement('li');
        renditionListItem.textContent = renditionsArray[k];
        renditionList.appendChild(renditionListItem);
      }
      renditionListNote = createEl('p');
      renditionListNoteA = createEl('a', {
        href: '#Renditions'
      });
      text = document.createTextNode('Rendition Details for Dynamic Delivery');
      renditionListNoteA.appendChild(text);
      text = document.createTextNode('For details on the renditions created see ');
      renditionListNote.appendChild(text);
      renditionListNote.appendChild(renditionListNoteA);
      sectionJsonHeading = createEl("h4", {
        id: removeSpaces(profile.name) + "json"
      });
      text = document.createTextNode("JSON data for the profile");
      sectionJsonHeading.appendChild(text);
      sectionJsonP = createEl('p', {
        class: 'BCL-aside'
      });
      text = document.createTextNode('Note: if you copy and paste the JSON to make a new profile, you will need to replace the null value for "account_id" with your own account id, and replace the name with a new name!');
      sectionJsonP.appendChild(text);
      sectionTableHeading = createEl("h4");
      profileCode = createEl("textarea", {
        class: 'bcls-code',
        style: 'height:20em;'
      });
      section.appendChild(sectionHeading);
      section.appendChild(sectionSubHeading);
      section.appendChild(renditionListHead);
      section.appendChild(renditionList);
      section.appendChild(renditionListNote);
      section.appendChild(sectionTableHeading);
      renditionTable = createEl("table", {
        class: "bcls-table"
      });
      renditionthead = createEl("thead", {
        class: 'bcls-table__head'
      });
      renditiontbody = createEl("tbody", {
        class: 'bcls-table__body'
      });
      section.appendChild(renditionTable);
      renditionTable.appendChild(renditionthead);

      renditionTable.appendChild(renditiontbody);

      section.appendChild(sectionJsonHeading);
      section.appendChild(sectionJsonP);
      section.appendChild(profileCode);
      text = document.createTextNode(JSON.stringify(profile, false, "  "));
      profileCode.appendChild(text);
      fragment.appendChild(section);
      text = document.createTextNode(profile.name);
      sectionHeading.appendChild(text);
      link = createEl("a", {
        href: "#" + profile.name + "json"
      });
      text = document.createTextNode("View rendition information in JSON form");
      link.appendChild(text);
      sectionSubHeading.appendChild(link);
      text = document.createTextNode("Table of image rendition properties");
      sectionTableHeading.appendChild(text);
      // now do the renditions
      // headersArray.push('renditions');
      jMax = profile.dynamic_origin.images.length;
      // get all properties and build the table headers
      for (j = 0; j < jMax; j++) {
        rendition = profile.dynamic_origin.images[j];
        for (prop in rendition) {
          headersArray.push(prop);
        }
      }
      // dedupe the headers
      headersArray = dedupe(headersArray);
      // create the table headers
      lMax = headersArray.length;
      tr = createEl("tr");
      for (l = 0; l < lMax; l++) {
        th = createEl("th");
        text = document.createTextNode(headersArray[l].replace(re, " "));
        th.appendChild(text);
        tr.appendChild(th);
      }
      renditionthead.appendChild(tr);
      // now add the body row for each rendition
      jMax = profile.dynamic_origin.images.length;
      for (j = 0; j < jMax; j++) {
        tr = createEl("tr");
        rendition = profile.dynamic_origin.images[j];
        for (l = 0; l < lMax; l++) {
          td = createEl("td");
          if (headersArray[l] === 'skip') {
            var key,
              skip = rendition[headersArray[l]];
            ul = document.createElement('ul');
            for (key in skip) {
              if (skip.hasOwnProperty(key)) {
                li = document.createElement('li');
                text = document.createTextNode(key + ': ' + skip[key]);
                li.appendChild(text);
                ul.appendChild(li);
              }
            }
            td.appendChild(ul);
          } else {
            str = isDefined(rendition[headersArray[l]]) ? rendition[headersArray[l]] : "";
            text = document.createTextNode(str);
            td.appendChild(text);
          }
          tr.appendChild(td);
        }
        renditiontbody.appendChild(tr);
      }
    }
    mainSection.appendChild(fragment);
    // dynamic profiles
    iMax = dynamicProfiles.length;
    for (i = 0; i < iMax; i++) {
      var renditionsArray = [],
        renditionListHead,
        renditionListItem;
      profile = dynamicProfiles[i];
      renditionsArray = profile.dynamic_origin.renditions;
      renditionsArray.sort();
      headersArray = [];
      // remove id's and other stuff from data
      delete profile.id;
      delete profile.version;
      delete profile.brightcove_standard;
      delete profile.date_created;
      delete profile.date_last_modified;
      delete profile.videoRenditions;
      delete profile.audioRenditions;
      delete profile.imageRenditions;
      delete profile.numRenditions;
      profile.account_id = null;
      section = createEl("section", {
        class: "bcls-section"
      });
      sectionHeading = createEl("h2", {
        id: removeSpaces(profile.name)
      });
      sectionSubHeading = createEl("p");
      renditionListHead = document.createElement('h5');
      renditionList = createEl('ul', {
        'style': 'font-weight:600;'
      });
      renditionListHead.textContent = 'Audio and MP4 renditions included:';
      kMax = renditionsArray.length;
      for (k = 0; k < kMax; k++) {
        renditionListItem = document.createElement('li');
        renditionListItem.textContent = renditionsArray[k];
        renditionList.appendChild(renditionListItem);
      }
      renditionListNote = createEl('p');
      renditionListNoteA = createEl('a', {
        href: 'https://support.brightcove.com/overview-dynamic-ingest-api-dynamic-delivery#ingestProfile'
      });
      text = document.createTextNode('Audio Rendition Details for Context Aware Encoding');
      renditionListNoteA.appendChild(text);
      text = document.createTextNode('For details on the audio renditions created see ');
      renditionListNote.appendChild(text);
      renditionListNote.appendChild(renditionListNoteA);
      sectionJsonHeading = createEl("h4", {
        id: removeSpaces(profile.name) + "json"
      });
      text = document.createTextNode("JSON data for the profile");
      sectionJsonHeading.appendChild(text);
      sectionJsonP = createEl('p', {
        class: 'BCL-aside'
      });
      text = document.createTextNode('Note: if you copy and paste the JSON to make a new profile, you will need to replace the null value for "account_id" with your own account id, and replace the name with a new name!');
      sectionJsonP.appendChild(text);
      sectionTableHeading = createEl("h4");
      profileSettingsTableHeading = createEl("h4");
      profileCode = createEl("textarea", {
        class: 'bcls-code',
        style: 'height:20em;'
      });
      section.appendChild(sectionHeading);
      section.appendChild(sectionSubHeading);
      section.appendChild(renditionListHead);
      section.appendChild(renditionList);
      section.appendChild(renditionListNote);
      section.appendChild(sectionTableHeading);
      renditionTable = createEl("table", {
        class: "bcls-table"
      });
      renditionthead = createEl("thead", {
        class: 'bcls-table__head'
      });
      renditiontbody = createEl("tbody", {
        class: 'bcls-table__body'
      });
      profileSettingsTable = createEl("table", {
        class: "bcls-table"
      });
      profileSettingsthead = createEl("thead", {
        class: 'bcls-table__head'
      });
      profileSettingstbody = createEl("tbody", {
        class: 'bcls-table__body'
      });
      section.appendChild(renditionTable);
      renditionTable.appendChild(renditionthead);

      renditionTable.appendChild(renditiontbody);
      section.appendChild(profileSettingsTableHeading);
      section.appendChild(profileSettingsTable);
      profileSettingsTable.appendChild(profileSettingsthead);
      profileSettingsTable.appendChild(profileSettingstbody);
      section.appendChild(sectionJsonHeading);
      section.appendChild(sectionJsonP);
      section.appendChild(profileCode);
      text = document.createTextNode(JSON.stringify(profile, false, "  "));
      profileCode.appendChild(text);
      fragment.appendChild(section);
      text = document.createTextNode(profile.name);
      sectionHeading.appendChild(text);
      link = createEl("a", {
        href: "#" + profile.name + "json"
      });
      text = document.createTextNode("View rendition information in JSON form");
      link.appendChild(text);
      sectionSubHeading.appendChild(link);
      text = document.createTextNode("Table of image rendition properties");
      sectionTableHeading.appendChild(text);
      text = document.createTextNode('Dynamic Profile Settings');
      profileSettingsTableHeading.appendChild(text);
      jMax = profile.dynamic_origin.images.length;
      for (j = 0; j < jMax; j++) {
        rendition = profile.dynamic_origin.images[j];
        for (prop in rendition) {
          headersArray.push(prop);
        }
      }
      headersArray = dedupe(headersArray);
      lMax = headersArray.length;
      tr = createEl("tr");
      for (l = 0; l < lMax; l++) {
        th = createEl("th");
        text = document.createTextNode(headersArray[l].replace(re, " "));
        th.appendChild(text);
        tr.appendChild(th);
      }
      renditionthead.appendChild(tr);
      jMax = profile.dynamic_origin.images.length;
      for (j = 0; j < jMax; j++) {
        tr = createEl("tr");
        rendition = profile.dynamic_origin.images[j];
        for (l = 0; l < lMax; l++) {
          td = createEl("td");
          if (headersArray[l] === 'skip') {
            var key,
              skip = rendition[headersArray[l]];
            ul = document.createElement('ul');
            for (key in skip) {
              if (skip.hasOwnProperty(key)) {
                li = document.createElement('li');
                text = document.createTextNode(key + ': ' + skip[key]);
                li.appendChild(text);
                ul.appendChild(li);
              }
            }
            td.appendChild(ul);
          } else {
            str = isDefined(rendition[headersArray[l]]) ? rendition[headersArray[l]] : "";
            text = document.createTextNode(str);
            td.appendChild(text);
          }
          tr.appendChild(td);
        }
        renditiontbody.appendChild(tr);
      }
      tr = createEl('tr');
      th = createEl('th');
      text = document.createTextNode('Property');
      th.appendChild(text);
      tr.appendChild(th);
      th = createEl('th');
      text = document.createTextNode('Value');
      th.appendChild(text);
      tr.appendChild(th);
      profileSettingsthead.appendChild(tr);
      for (prop in profile.dynamic_origin.dynamic_profile_options) {
        tr = createEl('tr');
        profileSettingstbody.appendChild(tr);
        td = createEl('td');
        text = document.createTextNode(prop);
        td.appendChild(text);
        tr.appendChild(td);
        td = createEl('td');
        if (prop === 'max_resolution') {
          var ul = createEl('ul'),
            li;
          li = createEl('li');
          text = document.createTextNode('width: ' + profile.dynamic_origin.dynamic_profile_options.max_resolution.width);
          li.appendChild(text);
          ul.appendChild(li);
          li = createEl('li');
          text = document.createTextNode('height: ' + profile.dynamic_origin.dynamic_profile_options.max_resolution.height);
          li.appendChild(text);
          ul.appendChild(li);
          td.appendChild(ul);
          tr.appendChild(td);
        } else if (prop === 'min_resolution') {
          var ul = createEl('ul'),
            li;
          li = createEl('li');
          text = document.createTextNode('width: ' + profile.dynamic_origin.dynamic_profile_options.min_resolution.width);
          li.appendChild(text);
          ul.appendChild(li);
          li = createEl('li');
          text = document.createTextNode('height: ' + profile.dynamic_origin.dynamic_profile_options.min_resolution.height);
          li.appendChild(text);
          ul.appendChild(li);
          td.appendChild(ul);
          tr.appendChild(td);
        } else {
          text = document.createTextNode(profile.dynamic_origin.dynamic_profile_options[prop]);
          td.appendChild(text);
          tr.appendChild(td);
        }
      }
    }
    fragment.appendChild(section);
    mainSection.appendChild(fragment);
    // get reference to codeBlocks
    // call function from toc-shared-content to add profiles to TOC
    create_inpage_nav();
  }

  function setCodeBlocks() {
    console.log('setting code blocks');

    var i,
      iMax;
    codeBlocks = document.getElementsByClassName('bcls-code');

    function selectCode() {
      this.select();
    }

    iMax = codeBlocks.length;
    for (i = 0; i < iMax; i++) {
      codeBlocks[i].addEventListener('click', selectCode);
    }
  }

  // actions
  // process array
  var iMax = profileData.length,
    i,
    profile;

  for (i = 0; i < iMax; i++) {
    profile = profileData[i];
    if (profile.name.indexOf('static') > 0) {
      staticProfiles.push(profile);
    } else if (profile.name.indexOf('dynamic') > 0) {
      dynamicProfiles.push(profile);
    } else {
      console.log('unknown profile', profile.name)
    }
  }
  buildDetailTables();
  setCodeBlocks();
  console.log('updating inpage nav');

  create_inpage_nav();
};

