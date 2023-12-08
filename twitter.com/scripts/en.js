'use strict'
function _typeof(o) {
  '@babel/helpers - typeof'
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (o) {
            return typeof o
          }
        : function (o) {
            return o && 'function' == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype
              ? 'symbol'
              : typeof o
          }),
    _typeof(o)
  )
}
;(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
  ['i18n/en'],
  {
    417346: function _(e, t, o) {
      var a = o(379404)._register('en', {
        get emoji() {
          return o.e('i18n/emoji-en').then(o.t.bind(o, 920747, 23))
        },
      })
      function n(e, t, o) {
        return 'one' == ((a = e), (n = !String(a).split('.')[1]), 1 == a && n ? 'one' : 'other') ? t : o
        var a, n
      }
      a('c39b0e24', 'X'),
        a('hd8c22d2', 'Mod'),
        a('c3153100', 'Admin'),
        a('ac0d27be', 'Sorry, this account has been suspended.'),
        a('bcee7444', 'Account update failed.'),
        a('e0cbf77a', 'Add phone'),
        a('f377195c', 'X is over capacity. Please wait a few moments then try again.'),
        a('d67f9456', 'You have been blocked from performing this action.'),
        a('e0ece1b6', 'Cannot attach media, try re-uploading.'),
        a(
          'i82e8f04',
          'To protect our users from spam and other malicious activity, this account is temporarily blocked from following additional accounts. Please make sure you understand the X Rules.',
        ),
        a(
          'jf7be47a',
          'To protect our users from spam and other malicious activity, this account is temporarily blocked from sending posts. Please make sure you understand the X Rules.',
        ),
        a(
          'g75fec74',
          'You have reached your daily limit for this action. Please add a phone to your account to remove the limit.',
        ),
        a('abb8b6e0', 'This phone number is already registered.'),
        a('f30bd1fc', 'We cannot send a text message to this phone number because its operator is not supported.'),
        a('i54e550c', 'We are unable to verify this phone number.'),
        a(
          'h154702a',
          "We can't complete this request because this link has been identified by X or our partners as being potentially harmful. Visit our Help Center to learn more.",
        ),
        a('c8cb0b4c', 'The password you entered was incorrect.'),
        a('b1b54f9e', 'The media you tried to upload was invalid.'),
        a('i859a9d4', 'Learn more'),
        a('d6e72ce1', function (e) {
          return 'Your password needs to be less than ' + e.count + ' characters. Please enter a shorter one.'
        }),
        a('a34dccd7', function (e) {
          return 'Your password needs to be at least ' + e.count + ' characters. Please enter a longer one.'
        }),
        a('jea2ff04', 'That password is too easy to guess. Please choose a stronger password.'),
        a('ce482c36', 'One or more fields are invalid. Please check your input and try again.'),
        a('db626d88', 'Please add your phone number to finish setting up your account'),
        a('i3ee2550', 'Please complete all required fields.'),
        a(
          'cf18a258',
          'This request looks like it might be automated. To protect our users from spam and other malicious activity, we can’t complete this action right now. Please try again later.',
        ),
        a('h7ffa648', 'Sms verification rate limit exceeded.'),
        a('b87ceb1c', 'SMS verification pin is invalid.'),
        a('f87e2faa', 'Sorry, we couldn’t find that user.'),
        a('cdaf8222', 'Sorry, you are rate limited. Please wait a few moments then try again.'),
        a('c1b0e710', 'Your account is suspended and is not permitted to perform this action.'),
        a('bfb22fae', 'Sorry, that post has been deleted.'),
        a('a23cd3ba', 'Some actions on this post have been disabled by X.'),
        a('bb558892', 'This user already has a verified phone number.'),
        a('hae1c934', 'Something went wrong, but don’t fret — it’s not your fault.'),
        a(
          'e784846c',
          'Your profile is under review. No new changes are allowed to name and profile photo during the review period.',
        ),
        a('fa9adac1', function (e) {
          return 'Search for "' + e.query + '"'
        }),
        a('h1cbdd30', 'Please refresh the page and try again.'),
        a('a5077d3e', 'Refresh'),
        a('b2648ba4', 'Your account may not be allowed to perform this action. Please refresh the page and try again.'),
        a('jcec6620', 'Post reply hidden'),
        a('f75d1806', 'Premium'),
        a('j4a7d9a6', 'Basic'),
        a('hedf9d7c', 'Premium+'),
        a('a61e2a9c', 'Get Grok with Premium+'),
        a('i3966450', 'Premium+ subscribers can now use our most advanced AI from within the X app.'),
        a('f5de898e', 'Hexagon profile picture'),
        a('fcc8734a', 'Square profile picture'),
        a('c64e46f8', 'This member was removed from the Community, so their posts are hidden.'),
        a('b3f1cb42', 'A moderator hid this post for breaking a Community rule.'),
        a('cbd2dc9c', 'You reported this post.'),
        a('cfbea177', function (e) {
          return e.name + '’s Space'
        }),
        a('ab4fc8bc', 'Space'),
        a('jd859c9c', 'You have been removed from this Space.'),
        a('f7c8617a', 'What are clips?'),
        a(
          'ecc7d2ec',
          'Clips are captured moments that anyone in your Space can make and share. All clips expire after 30 days.',
        ),
        a('d575ee02', 'Who can make a clip?'),
        a('dbc477a4', 'Anyone (even listeners) can make clips. The only catch is that you have to be signed into X.'),
        a('ed1d1cc0', 'Anyone speaking can be in a clip'),
        a('e5d193c8', 'If you speak, you might end up in a clip. We’ll let you know if you’re in one.'),
        a('e1547ec0', 'Clip a moment in Space'),
        a('i154245e', 'Heard something ridiculous or amazing? Clip it and share it.'),
        a('j24c37b2', 'Got it'),
        a('g1c6f16e', 'Recorded Spaces'),
        a('e5609214', 'Let the Space live on'),
        a('g665514c', 'Only speakers are recorded'),
        a('ja196c5a', 'Guests who speak will be recorded. The recording is public, so anyone can replay it.'),
        a('dd317ed6', 'Replay or share it with anyone'),
        a('jf03b37c', 'Listen to the recording anytime. You can also share it with a post.'),
        a('fd05976b', 'Learn more'),
        a('b4f91a8a', 'Recording active'),
        a('afc2ebc6', 'Spaces for the Web'),
        a('d82f2140', 'Tune into live audio conversations'),
        a('gf029868', 'Listen live'),
        a('icc1ba70', 'Spaces are public'),
        a('bcf241be', 'Manage your experience'),
        a('b0bc8330', 'You can also block and report people in a Space.'),
        a('c9644ccd', 'iOS'),
        a('e3c13255', 'Android'),
        a('d3755f91', 'Learn more'),
        a('d4ccb940', 'Adjust settings'),
        a('ad4c3407', 'Learn more'),
        a('d227d19e', 'Collapse'),
        a('e51c2372', 'Guests'),
        a('b08821f4', 'Back'),
        a('abd845fe', 'Edit'),
        a('fed1388a', 'Space settings'),
        a('ia5e7488', 'Close'),
        a('ifea3114', 'Share'),
        a('f2333850', 'Share with people outside of X'),
        a('gaa5b1a1', 'Learn more'),
        a('c63dd2cc', 'Join this live conversation with me!'),
        a('c958c6c8', 'Post this'),
        a('f61c4bb0', 'Send via Direct Message'),
        a('e05c00b4', 'Copy link'),
        a('if23a252', 'Share via...'),
        a('c0530da6', 'Share Menu'),
        a('f88553c8', 'Copied to clipboard'),
        a('gb5851d7', function (e) {
          return e.prefix + ' ' + e.url
        }),
        a('cededf2a', 'Host'),
        a('f77997b0', 'Co-host'),
        a('i48f4ed8', 'Speaker'),
        a('a77c8e02', 'Listener'),
        a('bdfa93eb', function (e) {
          return 'Shared by ' + e.name
        }),
        a('e839db3a', 'Dismiss'),
        a('cc724cb0', 'Create Clip'),
        a('cfd2f35e', 'Cancel'),
        a('c1df579e', 'Next'),
        a('e3146662', 'Captions couldn’t be made for this clip.'),
        a('f123fea8', 'Report this Space'),
        a('d0aebc28', 'Describe the issue'),
        a('g971a4e8', 'Self-Harm'),
        a('b96e6682', 'Violence'),
        a('e5bf9b3a', 'Sexual Content'),
        a('d2a34320', 'Child Safety'),
        a('a9ba3e28', 'Private Information'),
        a('d5519f4a', 'Abusive Behavior'),
        a('eb55363c', 'This Space has been reported'),
        a('b1037050', 'Manage Space'),
        a('f91f00ba', 'Create clip'),
        a('jcc8306e', 'Request to speak'),
        a('j41fd45a', 'Request sent'),
        a('d5b2aae8', 'Too many requests to speak have been sent. Please try again later.'),
        a('b9945b98', 'The request to speak failed. Please rejoin the space and try again in a few seconds.'),
        a('hd50e064', 'Not now'),
        a('i76d640e', 'We need your permission'),
        a(
          'fdaa0be8',
          'To speak in this Space, you’ll need to grant X access to your microphone. Please check your browser settings. ',
        ),
        a('c0098d4a', 'Reactions'),
        a('fc0e94b7', function (e) {
          return 'React with ' + e.emoji
        }),
        a('jf9f3e54', 'Skip forward 15 seconds'),
        a('ic1e826e', 'Play'),
        a('b89c5a50', 'Pause'),
        a('e674c120', 'Show captions'),
        a('f45bace4', 'Hide captions'),
        a('ce96f1dc', 'Captions unavailable'),
        a('e07f6e7d', function (e) {
          return 'Speed ' + e.rate + 'x'
        }),
        a('jd04fc66', '0.5x speed'),
        a('f03848b8', 'Normal'),
        a('j0e5c2ce', '1.5x speed'),
        a('b3f2318e', '2x speed'),
        a('hd257a5e', 'The space has been muted by a host or co-host.'),
        a('bb1d57b6', 'Leave'),
        a('i2caef48', 'Co-hosts'),
        a('j245c654', 'Speakers'),
        a('eda23a02', 'Listeners'),
        a('h16eeb42', 'Manage'),
        a('b90eb348', 'Invite to Speak'),
        a('d9a63e82', 'Remove from Speakers'),
        a('e68b09b4', 'Remove'),
        a('bf307fc0', 'Block and Remove'),
        a('ccf2f24e', 'Report'),
        a('hb568af4', 'Mute'),
        a('bb1cbeb6', 'Unmute'),
        a('i22835de', 'Approve'),
        a('cb59a0fe', 'Deny'),
        a('c2376960', 'Requests to Speak'),
        a('f5c7aaa7', function (e) {
          return 'host' + n(e.count, '', 's')
        }),
        a('fc56c8b1', function (e) {
          return 'co-host' + n(e.count, '', 's')
        }),
        a('iba0f45d', function (e) {
          return 'speaker' + n(e.count, '', 's')
        }),
        a('dc066955', function (e) {
          return 'listener' + n(e.count, '', 's')
        }),
        a('b53ed9ab', function (e) {
          return (
            e.participantCount +
            ' ' +
            e.title +
            ' · ' +
            e.remainingCapacityCount +
            ' open spot' +
            n(e.remainingCapacityCount, '', 's')
          )
        }),
        a('c3b5b829', function (e) {
          return e.count + ' request' + n(e.count, '', 's')
        }),
        a('h63a5c3c', 'More'),
        a('a2bf8b8a', 'Switch to listening'),
        a('d1e21610', 'Report NetzDG Violation'),
        a('d8cc6ada', 'Who can speak? Current speakers will not be affected. Changes may take a few seconds.'),
        a('baffe39a', 'Everyone'),
        a('af293dc2', 'People you follow'),
        a('e3a87142', 'Only people you invite to speak'),
        a('db3de1d2', 'Join as Speaker'),
        a('d7f4bc44', 'Join as Co-host'),
        a('edcf15e9', function (e) {
          return 'Requested (' + e.count + ')'
        }),
        a('h13957aa', 'Mute Space'),
        a('ge6372fa', 'Unmute Space'),
        a('i7a42e1c', 'Help manage this Space'),
        a('e0b8f112', 'You’ve been invited to co-host!'),
        a('ee12263c', 'Co-hosts can speak in the Space'),
        a('jee7002c', 'Co-hosts can invite, remove and mute speakers'),
        a('i95225d2', 'Co-hosts can share & remove posts'),
        a('f07137fa', 'Co-hosts can remove listeners from the Space'),
        a('j6cdf012', 'Co-hosts can’t invite or remove other co-hosts'),
        a('c727d116', 'Co-hosts can’t end the Space'),
        a('g69084b8', 'Accept co-host invite'),
        a('ec2d8342', 'Decline'),
        a('b5d88f0c', 'Employees only'),
        a('b15972cc', 'Subscribed only'),
        a('ddeb0a3c', 'Here’s the Community. Like the people? Take a look.'),
        a('e111f531', function (e) {
          return e.count + ' tuned in'
        }),
        a('a2f81050', 'Messages'),
        a('d4986f86', 'Direct Messages'),
        a('ga169e1b', function (e) {
          return 'Direct Messages (' + e.count + ' unread conversation' + n(e.count, '', 's') + ')'
        }),
        a('i3145aa0', 'Bookmarks'),
        a('a15648a4', 'Community Notes'),
        a('h5860a68', 'Grok'),
        a('bb081ea2', 'Settings'),
        a('ha8209bc', 'Home'),
        a('d83682ec', 'Home (New unread posts)'),
        a('eb75875e', 'Notifications'),
        a('e1249849', function (e) {
          return 'Notifications (' + e.count + ' unread notification' + n(e.count, '', 's') + ')'
        }),
        a('fcf3e54c', 'Explore'),
        a('c0b786ee', 'Search and explore'),
        a('e2eac0c4', 'Primary'),
        a('fa98627a', 'Profile'),
        a('i5aa4ce0', 'More menu items'),
        a('b0041756', 'Lists'),
        a('h02a6fe6', 'Communities'),
        a('ded416b0', 'Spaces'),
        a('e2eef3c2', 'Verified Orgs'),
        a('a5a30af0', 'Articles'),
        a('d86bbf0f', function (e) {
          return e.count + ' unread items'
        }),
        a('h6beb5fb', function (e) {
          return e.count + '+'
        }),
        a('i5f7b6b8', 'Account'),
        a('da4691aa', 'View all accounts'),
        a('c7e55ccf', function (e) {
          return 'Switch to @' + e.screenname
        }),
        a('b20a3894', 'The account you are trying to switch to has been deleted.'),
        a('daffabde', 'acting as...'),
        a('eccbfa26', 'Delegate accounts'),
        a('a1b7a904', 'Act as'),
        a('g61ed8a4', 'Something went wrong.'),
        a('e520f166', 'You are over the daily limit for sending posts.'),
        a('c0554ca0', 'Something went wrong. Try sending your post again in a minute.'),
        a('b25c5b2a', 'Whoops! You already said that.'),
        a('cef21114', 'Your account is suspended and is not permitted to send posts.'),
        a('cf369a0e', 'The post you are trying to reply to has been deleted or is not visible to you.'),
        a('cd86efa8', 'The text of your post exceeds the number of allowed @mentions.'),
        a('e002f424', 'The text of your post exceeds the number of allowed URLs.'),
        a('c2b4ae8c', 'The text of your post exceeds the number of allowed hashtags.'),
        a('hf05f59e', 'The text of your post exceeds the number of allowed cashtags.'),
        a('dffb84c6', 'The text of your post contains a hashtag that is longer than allowed.'),
        a('d7b21bc8', 'The post exceeds the number of allowed attachment types.'),
        a('e4672ac2', 'Oops! A URL in your post appears to link to a page that has spammy or unsafe content.'),
        a('he5ecf52', 'The text of your post exceeds the maximum allowed limit.'),
        a('ac78e602', 'The content of your post is invalid.'),
        a('g40ff2b4', 'Your media failed to resize and is too large to upload.'),
        a('b8098028', 'One or more images exceed the size limit and cannot be resized.'),
        a('b36f4170', 'File is empty.'),
        a('hab3781e', 'One or more provided files are not images.'),
        a('f6c4fb02', 'Your GIF file could not be processed. Please see tips for uploading GIFs.'),
        a('g0af3dd2', 'Your GIF file is not compatible. Please see tips for uploading GIFs.'),
        a('b8c8b0be', 'Your video file could not be processed. Please see tips for uploading videos.'),
        a('ica6d718', 'Your video file is not compatible. Please see tips for uploading videos.'),
        a('b28d44f7', function (e) {
          return 'Your GIF file is too large. GIFs should be less than ' + e.limit + ' MB'
        }),
        a('i1db7d13', function (e) {
          return 'Your video file is too large. Videos should be less than ' + e.limit + ' MB'
        }),
        a('baac0ed7', function (e) {
          return 'Your video file is too large. Videos should be less than ' + e.limit + ' GB'
        }),
        a('a22385bb', function (e) {
          return 'Your video is too long. Try to keep it ' + e.limit + ' seconds or less.'
        }),
        a('be0440bf', function (e) {
          return 'Your video is too long. Try to keep it ' + e.limit + ' minutes or less.'
        }),
        a('feeba512', 'Your image file could not be processed. Please see tips for uploading images.'),
        a('db123c02', 'Your image file is not compatible. Please see tips for uploading images.'),
        a('db6001e7', function (e) {
          return 'Your image file is too large. Images should be less than ' + e.limit + ' MB'
        }),
        a('eb96d952', 'Your image file lacks height and width'),
        a('b3880588', 'The upload session has timed out.'),
        a('ca058b68', 'Some of your media failed to load.'),
        a('id24379c', 'Some of your media failed to upload.'),
        a('h4d7cbcc', 'Your media failed to upload. Please try again.'),
        a('b2e94283', function (e) {
          return 'via @' + e.viaScreenName
        }),
        a('ee69d769', function (e) {
          return 'Post' + e.verb
        }),
        a('ge8e4a38', 'Post all'),
        a('d17df548', 'Reply'),
        a('h735a98e', 'Schedule'),
        a('h3701ffe', 'Update'),
        a('c818c60c', 'Analytics'),
        a('cdf89b84', 'Branded Likes Preview'),
        a('bb07870e', 'Creator Studio'),
        a('a57a341c', 'Data saver'),
        a('c4881c66', 'Display'),
        a('i83d4f14', 'Follower requests'),
        a('f66d24be', 'Help Center'),
        a('aeede01a', 'Imprint'),
        a('h54e6138', 'Keyboard shortcuts'),
        a('ae1bbb26', 'Log out'),
        a('a58e0e51', function (e) {
          return 'Log out @' + e.screenName
        }),
        a('deaf7e0a', 'Media Studio'),
        a('d299431c', 'Monetization'),
        a('ec1ed0cc', 'Professional Tools'),
        a('f4422d78', 'Reports'),
        a('fd442790', 'Settings and privacy'),
        a('f1e3a258', 'Settings and Support'),
        a('a17c3755', function (e) {
          return 'New' + e.ttc_dashmenu_item
        }),
        a('e0cb0c72', 'Ads'),
        a('b7fa0cfe', 'Top Articles'),
        a('da137d9a', 'MStV Transparenzangaben'),
        a('j087774e', 'Coins'),
        a('bcd81cac', 'Preferences'),
        a('c8061958', 'Pro'),
        a('ba96929e', 'Hiring'),
        a('h7d5d9fa', 'Beta'),
        a('j45a377a', 'Upgrade to Premium+'),
        a('hc73f030', 'Your Account'),
        a('f15bfdb4', 'Account information'),
        a('a3841918', 'Email'),
        a('c21037d0', 'Country'),
        a('ab1f7ee0', 'Change your password'),
        a('e731db5a', 'Password reset'),
        a('f56af9cc', 'Download an archive of your data'),
        a('f00808b0', 'Teams'),
        a('hfb92b14', 'Deactivate your account'),
        a('bf96fda4', 'Age'),
        a('j9d10268', 'Account activity'),
        a('i6b3f59a', 'Account history'),
        a('da202f9a', 'Your advertiser list'),
        a('hc36dbba', 'Logged-in devices and apps'),
        a('a8d0108e', 'Gender'),
        a('a03dacaa', 'Language'),
        a('d9138166', 'See places you’ve been'),
        a('b523ecc6', 'Account access history'),
        a('abedd45c', 'Request your data'),
        a('h1f01a24', 'Interests'),
        a('j7ad754a', 'Your X data'),
        a('d7b51c68', 'Subscriptions'),
        a('ff9ed474', 'Total earnings'),
        a('b431a5c6', 'Ad Rev Share'),
        a('aca4d76a', 'Ad Rev Share Setup'),
        a('ab1b837a', 'Ad Rev Share Dashboard'),
        a('c429e3ba', 'Creator Subscriptions'),
        a('fce877d6', 'Undo post'),
        a('dd0c889e', 'Profile customization'),
        a('f6e88162', 'Labs'),
        a('ib35705e', 'Manage Subscription'),
        a('cf131522', 'Manage Affiliate Badges'),
        a('cef20fd0', 'Verification'),
        a('ie7eb222', 'Blue checkmark'),
        a('cb165528', 'News features and settings'),
        a('g7eb2d40', 'Early Access'),
        a('f8645654', 'Security and account access'),
        a('j95edf76', 'Security'),
        a('afe4a358', 'ID verification'),
        a('dd703318', 'Two-factor authentication'),
        a('b1686800', 'Manage security keys'),
        a('ae72d4c4', 'Apps and sessions'),
        a('a1e8e682', 'Registered devices'),
        a('h1abfbce', 'Connected accounts'),
        a('cad53944', 'Privacy and safety'),
        a('e908903a', 'Audience and tagging'),
        a('b5c85d2c', 'Protect your posts'),
        a('f56d108e', 'Photo tagging'),
        a('c6f67e32', 'Your posts'),
        a('f2bd9c48', 'Content you see'),
        a('c6cb90ec', 'Safety Mode'),
        a('cbd449a0', 'Mute and block'),
        a('daef29b8', 'Muted accounts'),
        a('i0dd9b9e', 'Muted words'),
        a('a5f32aa2', 'Blocked accounts'),
        a('i58a274c', 'Direct messages'),
        a('fd4d9068', 'Discoverability and contacts'),
        a('bbcafbda', 'Manage contacts'),
        a('aeddb28a', 'Content preferences'),
        a('d035a8d0', 'Ads preferences'),
        a('d0b74a5a', 'Cookie preferences'),
        a('h3909cd0', 'Inferred identity'),
        a('d84e63d2', 'Off-X activity'),
        a('h14ba864', 'Data sharing with business partners'),
        a('jabb9c9a', 'Location information'),
        a('fcb6a5b8', 'Add location information to your posts'),
        a('h9f2da68', 'Sensitive media'),
        a('id6a8e1a', 'Reply filter'),
        a('cdb53d7a', 'Mentions'),
        a('fc35f762', 'Filtered replies'),
        a('gaac710a', 'Report Center'),
        a('i647fb04', 'Filters'),
        a('hee41732', 'Push notifications'),
        a('e75f25a8', 'Email notifications'),
        a('cf9b166a', 'Accessibility, display, and languages'),
        a('e3719c16', 'Accessibility'),
        a('a776eed8', 'Autoplay'),
        a('d495680e', 'Languages'),
        a('f953f53a', 'Change display language'),
        a('eafe3288', 'Data usage'),
        a('b721eb38', 'About'),
        a('afcad7f2', 'Download the app'),
        a('e8f57e08', 'Personalization and data'),
        a('gbde3534', 'Interests and ads data'),
        a('a54826c6', 'Inferred interests from partners'),
        a('i9028824', 'Loading'),
        a('f5090e28', 'Seems like you lost connectivity. We’ll keep retrying.'),
        a('ba929da8', 'Page not found'),
        a('d203e242', 'Not found'),
        a('fb4ee2f6', 'Message requests deleted'),
        a('e49537c2', 'Hmm...this page doesn’t exist. Try searching for something else.'),
        a('a9ae1e78', 'Search'),
        a('fcbb540a', 'Rate limit exceeded'),
        a('aa6e3300', 'Looks like you lost your connection. Please check it and try again.'),
        a('d4f88600', 'Verify contact'),
        a('b192ccae', 'You don’t have a confirmed contact method.'),
        a('a0487504', 'In order to request verification, you must first confirm a contact method.'),
        a('fff7d93c', 'Add Photo'),
        a('g969bfae', 'You’re missing a profile photo.'),
        a('gb2f35e4', 'In order to request verification, you must first add a profile photo.'),
        a('i33cf692', 'Add URL field'),
        a('b679ff6a', 'Invalid URL'),
        a('i79902b4', 'Select authenticity method'),
        a('fb2fcb5c', 'This step helps us verify your identity. Choose the method that works best for you.'),
        a('e43425fa', 'Government issued ID'),
        a('cb7c2e2e', 'A photo of your government issued ID.'),
        a('a411926a', 'Official email address'),
        a('g253cdd0', 'An official email with a domain relevant to the category you chose.'),
        a('cf93bcb0', 'Official website reference'),
        a('gfb55fa8', 'An official website that directly references your X account.'),
        a('g40cd2c0', 'Verified reference'),
        a('a7f1cff6', 'Add official website reference'),
        a(
          'a11cd524',
          'Enter an official website which references your X account and is associated with your verification request.',
        ),
        a('ba656f26', 'Is your X account referenced on the website?'),
        a(
          'ed751204',
          'We need to confirm that your account is authentic to verify you. If your handle isn’t referenced on the page you linked, you’ll need to submit proof of authenticity prior to completing your request.',
        ),
        a('fbc023b0', 'Yes, it is'),
        a('e785ce06', 'I’ll use a different option'),
        a('i8d58f3e', 'I’ll use a government ID'),
        a('eb21ecaa', 'I’ll use an email address'),
        a(
          'f848a69e',
          'We need to confirm that your account is authentic to verify you. If your handle isn’t referenced in the official website provided we cannot confirm account authenticity.',
        ),
        a(
          'd59b5366',
          'We need to confirm that your account is authentic to verify you. If your handle isn’t referenced on the page you linked, we cannot reliably link your account to a notable content creator.',
        ),
        a('bfb01c62', 'No, go back'),
        a(
          'fa51040a',
          'Provide a link to the official website of a qualifying news organization or publication that references you and your X account.',
        ),
        a(
          'd0460f12',
          'Provide a link that references your account as the official X account for your organization. The reference must come from the official website of a verified entity.',
        ),
        a(
          'h45b00d8',
          'Select a method to show that your account is authentic and managed by the entertainment company related to this request.',
        ),
        a('fc718708', 'The official website of a qualifying organization that references you and your X account.'),
        a(
          'g32c2900',
          'Select a method to show that your account is authentic and managed by the production organization related to this request.',
        ),
        a(
          'j5b1224c',
          'Provide a link that references your account as the official X account for your production. The reference must come from the official website of a Verified entity.',
        ),
        a('d090a5d4', 'An official website of a Verified organization or publication that references your X account.'),
        a(
          'eb08a392',
          'Select a method to show that your account is authentic and managed by the candidate for government office related to this request.',
        ),
        a(
          'h0de1396',
          'Provide a link that references your account as the official X account of the candidate for office related to this request. The reference must come from the official website of a Verified entity.',
        ),
        a(
          'dcc23262',
          'Select a method to show that your account is authentic and managed by the activist or organizer related to this request.',
        ),
        a('c880e068', 'An official website of an advocacy organization that references you and your X account.'),
        a(
          'e412d500',
          'Provide a link that references you in a leadership position for a Verified advocacy organization and your X account. The reference must come from the official site of a Verified organization.',
        ),
        a(
          'dedf41f2',
          'Select a method to show that your account is authentic and managed by the influential individual related to this request.',
        ),
        a('b4aed9e0', 'An official website of a verified organization that references you and your X account.'),
        a(
          'b2069e40',
          'Provide a link that references you and your X account. The reference must come from the official site of a Verified organization.',
        ),
        a(
          'baf718c4',
          'Select a method to show that your account is authentic and managed by the company, brand, or organization related to this request.',
        ),
        a(
          'c65bbbc2',
          'Select a method to show that your account is authentic and managed by the senior leader or executive related to this request.',
        ),
        a('i31e3606', 'An official email address with the domain of a qualifying company, brand, or organization.'),
        a('de70afe8', 'A reference to you and your X account on the official website of a qualifying organization.'),
        a(
          'a3a523f2',
          'Provide a link that references your account as the official X account for your company. The reference must come from the official website of a verified entity.',
        ),
        a(
          'jf58899a',
          'Provide a link that references you as a senior leader at your organization and your X account. The reference must come from the official website of a verified entity.',
        ),
        a(
          'f7afbaec',
          'Select a method to show that your account is authentic and managed by a journalist for a qualifying news organization or publication.',
        ),
        a(
          'd4ab0056',
          'Select a method to show that your account is authentic and managed by a notable freelance journalist.',
        ),
        a('d2a77622', 'An official email address with the domain of a qualifying news organization or publication.'),
        a('eec341da', 'An official website of a news organization or publication that references your X account.'),
        a(
          'b03ae068',
          'Select a method to show that your account is authentic and managed by the news organization or publication related to this request.',
        ),
        a(
          'g0daba4a',
          'Select a method to show that your account is authentic and managed by professional gaming figure related to this request.',
        ),
        a(
          'ab8e430c',
          'Provide a link that references your account as the official X account of the individual in gaming related to this request. The reference must come from the official website of a Verified entity.',
        ),
        a(
          'cdcd9cd6',
          'Select a method to show that your account is authentic and managed by professional sports entity related to this request.',
        ),
        a(
          'gad25890',
          'Provide a link that references your account as the official X account of the professional sports entity related to this request. The reference must come from the official website of a Verified entity.',
        ),
        a(
          'e6dc91b2',
          'Select a method to show that your account is authentic and managed by professional sports figure related to this request.',
        ),
        a(
          'i9aed706',
          'Provide a link that references your account as the official X account of the professional sports figure related to this request. The reference must come from the official website of a Verified entity.',
        ),
        a('abd587d2', 'Add another reference'),
        a('i0bba81a', 'Add reference of employment'),
        a('a6a76e3c', 'Select notability method'),
        a('ecd2abda', 'Confirm account eligibility'),
        a('cb70b894', 'Go back'),
        a('g8b511fe', 'Google Trends'),
        a('c7d50c96', 'A profile on Google Trends with evidence of recent search activity about you.'),
        a('a68b43ee', 'Add Google Trends profile'),
        a('b5e30390', 'Google Trends profile'),
        a('h146703e', 'Wikipedia article'),
        a('ee38d0f0', 'A Wikipedia article that is about you and meets their notability standards for people.'),
        a('cb97ee3e', 'Add Wikipedia article'),
        a('hc371f34', 'News coverage'),
        a(
          'b9d0ad90',
          'At least three links from reputable news organizations that have covered or referenced you within the last six months.',
        ),
        a('ge137dce', 'At least three articles about you from qualifying news publications in the last six months.'),
        a(
          'h2b9a5fe',
          'At least three articles about your company from qualifying news publications in the last six months.',
        ),
        a('baccb708', 'Add verified news coverage'),
        a('feadd98c', 'Add verified news references'),
        a('j7ae97aa', 'Verified news references'),
        a('c368aa8e', 'At least three articles from verified news publications that reference you.'),
        a('ded0edad', function (e) {
          return 'Article #' + e.n
        }),
        a('bebae55a', 'Public stock exchange'),
        a('c5571610', 'A link providing evidence of substantial presence in a public stock exchange.'),
        a('e2d42628', 'Add stock exchange reference'),
        a('jc19b4e8', 'Stock exchange listing'),
        a('fc3ee696', 'Leadership reference'),
        a('i3e65eb4', 'The official site of a verified organization that references you in a leadership position.'),
        a('jd014eba', 'The URL provided links to the specific page referencing applicant.'),
        a('a96901cc', 'Add leadership reference'),
        a('cc424a22', 'Advocacy reference'),
        a('ibfc1a5a', 'You aren’t eligible for verification in this category.'),
        a('e1c78796', 'Official website'),
        a('ff2ee0c2', 'Activism'),
        a('j0e2cfa8', 'Business'),
        a('hc61adfc', 'Entertainment'),
        a('e404203c', 'Gaming'),
        a('d2042392', 'Government'),
        a('c365dcc6', 'Other'),
        a('c8ee31da', 'News'),
        a('d27beb9e', 'Sports'),
        a('cc4b66b6', 'Select a category'),
        a('b37461a4', 'Select an account type'),
        a('b27325f6', 'Content creator'),
        a('a5a6affc', 'Influential digital content creators that consistently publish engaging, original content.'),
        a('a15326de', 'At least three articles from qualifying news publications that reference you.'),
        a(
          'g704a93a',
          'An official site associated with known advocacy work that references you in a leadership position.',
        ),
        a('c6bd60ec', 'Activist or organizer'),
        a('c92fdb06', 'Notable individuals using Xs to bring about socioeconomic, political, or cultural change.'),
        a('a18c6dfc', 'Journalist'),
        a('h0b46534', 'Individual journalists employed by verified news organizations or publications.'),
        a('ff929fec', 'Prominent organization or affiliate'),
        a(
          'jf537894',
          'Prominent organizations, and secondary affiliated accounts, including companies, brands, and non-profit organizations.',
        ),
        a('d2ea204a', 'Other influential individual'),
        a(
          'f875ec6e',
          'Individuals with a significant presence on and off the X platform that do not fall into other categories.',
        ),
        a('i3e6aaa6', 'Senior leader or executive'),
        a(
          'bbcbb9e6',
          'Leaders and other prominent executives of notable companies, brands, and non-profit organizations.',
        ),
        a('j0bc23f4', 'I have confirmed that my organization’s account is already verified.'),
        a('aa6228de', 'Entertainment company'),
        a('d5b3cbca', 'Major entertainment companies, such as television networks, film studios, and music labels.'),
        a('b5a3e590', 'Individual in entertainment'),
        a(
          'e484f794',
          'Influential individuals in the entertainment industry like actors, musicians, directors, screenwriters, comedians, and more.',
        ),
        a('b8d8ea64', 'Production organization'),
        a(
          'ff27db3c',
          'Official accounts of productions associated with entertainment entities, like films, events/festivals, TV shows and more.',
        ),
        a('c0e57cb2', 'Add your creator profile'),
        a('f3c605b6', 'Creator profile'),
        a('h042d1a6', 'IMDB profile'),
        a('d2310f0c', 'A profile on IMDB that includes at least 50 production credits.'),
        a('ba04b4c2', 'Add IMDB Profile'),
        a('i9b124b6', 'Government official'),
        a(
          'f84a99ee',
          'Key government officials, including heads of state, elected officials, appointed ministers, and ambassadors at state- or national-level.',
        ),
        a('j2cb5f50', 'Candidate for office'),
        a('j2472894', 'Official candidates for state- or national-level public office.'),
        a('ha44c130', 'Government office or public service'),
        a('j8ae9d40', 'Key government offices and institutional entities, as well as public utilities and services.'),
        a('ef1d6176', 'Are you a candidate at the state- or national-level?'),
        a(
          'f54ba6e6',
          'You must be a current candidate for office at the state- or national-level to qualify for verification in this category.',
        ),
        a('dd85d0a0', 'Are you an official at the state- or national-level?'),
        a(
          'f0058c60',
          'You must be a current government official at the state- or national-level to qualify for verification in this category.',
        ),
        a('f420a712', 'Yes, I am'),
        a('fb97d22c', 'No, I’m not'),
        a('e16b1cc8', 'Does your profile meet the criteria for a candidate?'),
        a(
          'cf2ee92e',
          'Candidates for office must have a public account that both references the office they’re running for and links to the official website of their campaign.',
        ),
        a('g544885e', 'Does your profile meet the criteria for a government office or institutional entity?'),
        a(
          'bd0b4542',
          'Government offices and institutional entities must have a public account that links to their official website.',
        ),
        a('i45b224c', 'Does your profile meet the criteria for an official?'),
        a(
          'fba1dd66',
          'Government officials must have a public account that both references their current government position and links to the official website of their office.',
        ),
        a('e95c44de', 'Yes, it’s complete'),
        a('fa5e15e2', 'I need to update'),
        a('jdf47e8e', 'Campaign website'),
        a('eeec7316', 'Add campaign website'),
        a('b163b654', 'Government reference'),
        a('d2378d34', 'Add government reference'),
        a('a05b8446', 'Freelance journalist'),
        a('hdad12b2', 'Independent, freelance journalists with notable work in verified publications.'),
        a('d2d7af4c', 'News organization or publication'),
        a(
          'd83e51dc',
          'Print and digital publications; broadcast, cable, satellite, and streaming TV and radio news networks, stations and programs; podcasts; and other similar media.',
        ),
        a('g708cbdc', 'Does your profile meet the verification requirements?'),
        a('b107ee5c', 'News organizations must have a public account that links to their official website.'),
        a('e8746826', 'I have confirmed that my employer’s account is already verified.'),
        a('jc09b420', 'Does your profile meet the criteria for a journalist?'),
        a(
          'gfbd7e58',
          'Journalists must have a public account that both references the name and links to the official website of the verified news organization they work for.',
        ),
        a('h0ad4c9e', 'Official news organization reference(s)'),
        a(
          'a6553b50',
          'The official website of a qualifying news publication or organization that references you as a journalist.',
        ),
        a('a29b2988', 'Article bylines and credits'),
        a(
          'ab4eae60',
          'At least three bylines or credits in qualifying publications published within the last six months.',
        ),
        a('b3fac982', 'The URL provided links to the specific page referencing me.'),
        a('e26dc9e2', 'Add notable work'),
        a('e164df2e', 'Do the articles provided meet the notability criteria?'),
        a(
          'i80ff05e',
          'Only articles published by verified news organizations and publications qualify as evidence of notability.',
        ),
        a('cf7482ec', 'Yes, they do'),
        a('fcb96cfc', 'Individual in professional sports'),
        a(
          'ddc7d64a',
          'Professional sports athletes, coaches, managers, as well as athletes participating in global competitions (e.g. Olympics, Paralympics, etc.).',
        ),
        a('c4e0d346', 'Professional sports entity'),
        a(
          'e3ce81fa',
          'Professional sports leagues, teams, and global competitions (e.g. Olympics, Paralympics, etc.).',
        ),
        a('b2808f48', 'Individual in gaming'),
        a(
          'db7b3558',
          'Individual accounts of esport athletes that are affiliated with verified gaming teams or leagues.',
        ),
        a(
          'bbd9a912',
          'I have confirmed that team, league, event, or organization associated with my account is already verified.',
        ),
        a(
          'he9c5638',
          'A link to the official website of a global competition or sports organization that references you.',
        ),
        a(
          'bf06e1d6',
          'An official site associated with a professional sports organization that references you as a professional athlete, manager, or coach.',
        ),
        a(
          'e241d35e',
          'At least three articles from verified news organization or publications that reference you as a professional athlete, manager, or coach.',
        ),
        a(
          'ad456030',
          'At least three articles from verified news organization or publications that reference you as an individual in gaming.',
        ),
        a(
          'hbe2e65c',
          'An official site associated with a verified esports league or event that references you as an individual in gaming.',
        ),
        a('j3da4dea', 'You can’t request verification right now'),
        a('af39265e', 'Companies, Brands, and Organizations'),
        a('bb51cd7a', 'Sports and gaming'),
        a('c044a571', 'Learn more'),
        a('a58cd1fb', 'Learn more'),
        a('b47b0fd1', 'Learn more'),
        a('db25263b', 'Learn more'),
        a('b25b02c3', 'Learn more'),
        a('j6ef6afb', 'Learn more'),
        a('d42d162b', 'Learn more'),
        a('ccadfc85', 'Learn more'),
        a('ddb47f57', 'Learn more'),
        a('bf9e181b', 'Learn more'),
        a('e8e39f95', 'Learn more'),
        a('e126dd3f', 'Learn more'),
        a('i821844f', 'Learn more'),
        a('b0abbb17', 'Learn more'),
        a('e7e0d88b', 'Learn more'),
        a('i560665f', 'Learn more'),
        a('f6e774d9', 'Learn more'),
        a('h486f755', 'Learn more'),
        a('bab41dab', 'Learn more'),
        a('e0ebdb29', 'Learn more'),
        a('f8493831', 'Learn more'),
        a('icb5913f', 'Learn more'),
        a('af819833', 'Learn more'),
        a('d35525b1', 'Learn more'),
        a('cb181ed1', 'Learn more'),
        a('f6c3d3f1', 'Learn more'),
        a('d4588ded', 'Learn more'),
        a('a759bff9', 'Learn more'),
        a('c64a59f7', 'Learn more'),
        a('c054f433', 'Learn more'),
        a('c1b7ad51', 'Learn more'),
        a('f7998565', 'Learn more'),
        a('c74a47ef', 'Learn more'),
        a('gf9899bf', 'Learn more'),
        a('d7a9185d', 'Learn more'),
        a('c4b205e1', 'Learn more'),
        a('c04b4b1d', 'Learn more'),
        a('d26ccc67', 'Learn more'),
        a('hdb3bc85', 'Learn more'),
        a('b6cb494f', 'Learn more'),
        a('abc132eb', 'Learn more'),
        a('de1b28ad', 'Learn more'),
        a('h04c272d', 'Learn more'),
        a('j331c659', 'Learn more'),
        a('h02fe64f', 'Learn more'),
        a('a7df4b85', 'Learn more'),
        a('e9b71903', 'Learn more'),
        a('g961011f', 'Learn more'),
        a('d5dedb7b', 'Learn more'),
        a('gd396551', 'Learn more'),
        a('dccc08bf', 'Learn more'),
        a('f22a6d0d', 'Learn more'),
        a('i78c9fd5', 'Learn more'),
        a('f3e333a9', 'Learn more'),
        a('i5fee6d3', 'Learn more'),
        a('fe7420f5', 'Learn more'),
        a('fcfad60d', 'Learn more'),
        a('cc35a6b9', 'Learn more'),
        a('d9bd3823', 'Learn more'),
        a('a67f27bd', 'Learn more'),
        a('b8be7adb', 'Learn more'),
        a('gd663f41', 'Learn more'),
        a('b436b101', 'Learn more'),
        a('j97bce4a', 'X handle'),
        a('acd5ca14', 'Try again. Usernames don’t include special characters like @, $, or #.'),
        a('bbef41c2', 'Review the official email address associated with your X verification request.'),
        a('be03ecca', 'Email address'),
        a('c69a40de', 'You don’t have an existing verified email address.'),
        a('c83a1662', 'You don’t have an eligible email address verified.'),
        a('e1e878ee', 'Settings'),
        a('b9635182', 'Settings'),
        a('j163be32', 'Start request'),
        a('gaf821c8', 'Verification request'),
        a('e1ac0f9b', 'Learn more'),
        a('h2d4ba56', 'Checking your ID...'),
        a('i2051842', 'We’re making sure your ID meets our standards. This might take up to 30 seconds.'),
        a('fc2a5c92', 'Something went wrong'),
        a('jf4b6f70', 'There was an issue uploading your ID. Please try uploading it again.'),
        a('d338f53e', 'Try again'),
        a('e43672a0', 'We’ll need to gather some information about your government issued ID.'),
        a('b246aa5e', 'Country of issue'),
        a('d6fb5878', 'Choose country'),
        a('b72f97cc', 'ID type'),
        a('b2ab6008', 'Choose ID type'),
        a('h9270b1c', 'Search countries'),
        a('ff1d68f8', 'Upload a photo of your ID'),
        a('bdada5a6', 'Front'),
        a('edfed0f6', 'Upload front of ID'),
        a('def5015d', function (e) {
          return 'Back' + e.back_of_document
        }),
        a('b09aade6', 'Upload back of ID'),
        a('b40ed190', 'Document'),
        a('c6650b56', 'Upload document'),
        a(
          'd171ed16',
          'We rely on trusted third parties to help us. These parties verify the authenticity of your ID and provide us with limited information and a platform, allowing us to confirm your eligibility for verified account status.',
        ),
        a('d20f76cb', 'Learn more'),
        a('b8deb156', 'Privacy Policy'),
        a('b9960f32', 'Add photos or video'),
        a('gd80afba', 'Edit media'),
        a('j322caee', 'Flag sensitive media'),
        a('df1b0708', 'Play this GIF'),
        a('cd959e5c', 'Remove media'),
        a('add55c98', 'Media'),
        a('f350cf46', 'Drag and drop media'),
        a('gff1f69e', 'Loading image'),
        a('a91bb144', 'Submit'),
        a(
          'affce770',
          'We and our trusted third parties will use the information related to your account and any additional information that you provide to us in order to determine your authenticity and eligibility for verification.',
        ),
        a('i0864918', 'Category'),
        a('c7942074', 'Account Type'),
        a('b8121daa', 'Notability Reference(s)'),
        a('d247ca70', 'Review the details of your verification request below. Once confirmed, hit submit.'),
        a('b51afbb2', 'Authenticity Method'),
        a('cc87b01c', 'Review and submit'),
        a('ec6801cc', 'Your request has been sent!'),
        a('i6ef95ec', 'survey'),
        a('b772cd66', 'Done'),
        a(
          'j94e995e',
          'Your last request was denied. You’ll need to wait 30 days from that date to submit a new request.',
        ),
        a(
          'da458d6c',
          'You have submitted a verification request and been rejected within the past 30 days. Please try again.',
        ),
        a(
          'j4ed9f0e',
          'You have submitted a verification request and will be contacted as soon as a decision has been made.',
        ),
        a('b1ade780', 'Your account is too new. Give it until your account is at least 7 days old and then try again.'),
        a('aab67626', 'Your verification request is being reviewed'),
        a('d3c1e25e', 'No, it wasn’t a dream. Yes, you’re really verified.'),
        a('a8b4500e', 'Rules'),
        a('ef1b5cbc', 'Choose the notifications you’d like to see — and those you don’t.'),
        a('aaafffda', 'Muted notifications'),
        a('afdf29b8', 'Quality filter'),
        a(
          'da19d878',
          'Choose to filter out content such as duplicate or automated posts. This doesn’t apply to notifications from accounts you follow or have interacted with recently.',
        ),
        a('i2209530', 'Save'),
        a('da867c58', 'Select your preferences by notification type.'),
        a('a2197726', 'Manage your account’s security.'),
        a(
          'i36dcc3e',
          'Help protect your account from unauthorized access by requiring a second authentication method in addition to your X password. You can choose a text message, authentication app, or security key.',
        ),
        a('ead60eb8', 'Additional password protection'),
        a('gfaf9a4a', 'Password reset protect'),
        a(
          'he30e464',
          'Enabling this setting adds extra security to your account by requiring additional information to reset your password. If enabled, you must provide either the phone number or email address associated with your account in order to reset your password.',
        ),
        a(
          'dc096238',
          'Upload an approved form of identification to confirm the authenticity of your account. Your information will only be used to validate your identity and will be handled safely and securely.',
        ),
        a('a999cb72', 'Save account changes'),
        a('dec3c9b8', 'Password'),
        a('b929aa74', 'Re-enter your X password to save changes to your account.'),
        a('d1091f50', 'Forgot password?'),
        a('d97c07be', 'Manage Creator Subscriptions'),
        a(
          'efa291da',
          'View and manage your subscriptions to creators below using Stripe. Any active subscriptions you initiated on iOS or Android can be managed in the app.',
        ),
        a('ef4602ec', 'Something went wrong. Please try again later.'),
        a('j7f5c6aa', 'You don’t have any Subscriptions yet'),
        a(
          'b02df748',
          'Manage your account’s security and keep track of your account’s usage including apps that you have connected to your account.',
        ),
        a(
          'g2841de4',
          'See information about when you logged into your account and the apps you connected to your account.',
        ),
        a('hf45cca6', 'Manage Google or Apple accounts connected to X to log in.'),
        a('g9230d00', 'Delegate'),
        a('a310511c', 'Manage your shared accounts.'),
        a('jc02ae68', 'Connected apps'),
        a('dd82312a', 'Sessions'),
        a('e5e8a89a', 'Loading apps'),
        a('hfa9a2c8', 'Manage connected apps in a flash'),
        a('dd1b86f9', function (e) {
          return 'by ' + e.name
        }),
        a('cf461930', 'Third-party apps you allow to access your X account will show up here.'),
        a('b63b0b1d', 'Learn more'),
        a('c2cb5560', 'Current active session'),
        a('bca43fd0', 'Log out of other sessions'),
        a(
          'ha6df2ca',
          'Sessions are the devices you are using or that have used your X account. These are the sessions where your account is currently logged in. You can log out of each session.',
        ),
        a('b72d2904', 'You’re logged into this X account on this device and are currently using it.'),
        a('b850cbd0', 'You’re logged into these accounts on these devices and aren’t currently using them. '),
        a('cf3e3164', 'Log out of all other sessions'),
        a('f810f27a', 'Do you want to end your other sessions?'),
        a('gbb5cec5', function (e) {
          return (
            'Logging out will end ' +
            e.num +
            ' of your other active X sessions. It won’t affect your current active session.'
          )
        }),
        a('fcbd4904', 'This will end your active X session.'),
        a(
          'ab78d946',
          'You’re about to end your other active X sessions, and you’ll need to log in again on those devices to start a new ones.',
        ),
        a('e186a3d6', function (e) {
          return '' + e.learnMoreLabel
        }),
        a('ed5ab16a', 'Active now'),
        a('c9bc33fa', 'Devices'),
        a('f95ed3e6', 'Current device'),
        a('a787669a', 'Other device registrations'),
        a('gbefe730', 'You’re registered for encrypted direct messaging on these other devices.'),
        a('d7a9796e', 'Loading devices'),
        a('b5635e86', 'Register this device'),
        a('bb4a95dc', 'Register your device?'),
        a(
          'a9538040',
          'Registering this device will enable you to start new encrypted conversations with other registered users',
        ),
        a('hd173c7a', 'Register'),
        a('hf4312a4', 'Device has been registered.'),
        a('h7797d18', 'Registered'),
        a('hc48a042', 'Unregister this device'),
        a('d5bafb20', 'Unregister this device?'),
        a('i12dee70', 'Unregistering a device means you’ll no longer have access to encrypted messages on it.'),
        a('d4b9db26', 'Unregister'),
        a('c18b1b34', 'Registered date and time'),
        a('jaaa8984', 'Location'),
        a('e7c9d60a', 'Selected device has been unregistered.'),
        a('cd14c8fe', 'Loading device info'),
        a('j9db22f4', 'We can not find this device'),
        a('c477d710', 'Manage what information you see and share on X.'),
        a('b06f5d36', 'Your X activity'),
        a('fd807e78', 'Audience, media and tagging'),
        a('a9ff473c', 'Manage what information you allow other people on X to see.'),
        a('d0484606', 'Manage the information associated with your posts.'),
        a('c4afe0e6', 'Decide what you see on X based on your preferences like Topics and interests'),
        a('f01fd982', 'Safety Mode (Beta)'),
        a('dcc5aa06', 'Manage autoblocks and preferences.'),
        a('ab125232', 'Manage the accounts, words, and notifications that you’ve muted or blocked.'),
        a('cc950d94', 'Manage who can message you directly.'),
        a('fe37f854', 'Manage who can see your Spaces listening activity'),
        a('ab987f3c', 'Control your discoverability settings and manage contacts you’ve imported.'),
        a('db5fabb0', 'Data sharing and off-X activity'),
        a('i83cab8a', 'Data sharing and personalization'),
        a('e338a794', 'Manage your ads experience on X.'),
        a('c05e8024', 'Manage your cookie experience on X.'),
        a(
          'd29d59d0',
          'Manage how X uses your online activity outside of X, such as the websites you visit, to personalize your experience.',
        ),
        a(
          'c981a36c',
          'Allow X to personalize your experience with your inferred activity, e.g. activity on devices you haven’t used to log in to X.',
        ),
        a('eb0cc786', 'Allow sharing of additional information with X’s business partners.'),
        a('dd533318', 'Manage the location information X uses to personalize your experience.'),
        a('bd0646a0', 'Learn more about privacy on X'),
        a('a607862a', 'Privacy policy'),
        a('g5925628', 'Contact us'),
        a('dd6012f8', 'Privacy center'),
        a('jdceda60', 'Replies'),
        a('f644b748', 'Manage who can reply to your posts and your filtered replies.'),
        a('a42df0e4', 'Control who mentions you in post and replies.'),
        a('a18480f4', 'Allow others to mention you'),
        a('d713ba94', 'People you block are never able to mention you.'),
        a('a0c5ddb2', 'Anyone can mention you'),
        a('e83386de', 'Only people you follow can mention you'),
        a('ea2a8236', 'Don’t allow others to mention you?'),
        a('bf21cc74', 'You won’t be mentioned in post and replies.'),
        a('b7ec04f4', 'Yes'),
        a(
          'd8492604',
          'When selected, your posts and other account information are only visible to people who follow you.',
        ),
        a('if050fae', 'Protect your videos'),
        a(
          'c0038b1e',
          'If selected, video in your posts will not be downloadable by default. This setting applies to posts going forward and is not retroactive',
        ),
        a('dbb51952', 'Protect your posts?'),
        a('de735de6', 'This will make them visible only to your X followers.'),
        a('c5d4192a', 'Protect'),
        a('gea6cc1a', 'Are you sure?'),
        a(
          'd9ddba70',
          'Communities are public, so protecting your account will hide your previous posts. You also won’t be able to post in the Community until your account is public again.',
        ),
        a('f527b322', 'Protect my account'),
        a('d165c992', 'Anyone can tag you'),
        a('ea339390', 'Only people you follow can tag you'),
        a('e3a761ee', 'Off'),
        a('a61ed23a', 'Mark media you post as having material that may be sensitive'),
        a(
          'ae27c454',
          'When enabled, pictures and videos you post will be marked as sensitive for people who don’t want to see sensitive content.',
        ),
        a('fc1d217c', 'Display media that may contain sensitive content')
      a('b8533bac', 'Topics'),
        a('j018f2a2', 'Explore settings'),
        a('h1ef00dc', 'Search settings'),
        a('ee4592ca', 'No one'),
        a('da813d22', 'Verified users'),
        a('b3d8566e', 'Filter low-quality messages'),
        a(
          'cfda8c44',
          'Hide message requests that have been detected as being potentially spam or low-quality. These will be sent to a separate inbox at the bottom of your message requests. You can still access them if you want.',
        ),
        a('f4c91f40', 'Allow messages from my subscribers'),
        a(
          'bf0c4336',
          'Your subscribers will always be able to send you messages independent of other messaging settings.',
        ),
        a('e6c411d8', 'Filter graphic media'),
        a(
          'g558101a',
          'Display warnings over messages detected to potentially contain graphic media (like nudity, sexual content, or violence). You’ll always have the option to view the media if you want.',
        ),
        a('d9172542', 'Show read receipts'),
        a(
          'bd557506',
          'Let people you’re messaging with know when you’ve seen their messages. Read receipts are not shown on message requests.',
        ),
        a('f29080d0', 'Allow message requests from:'),
        a('j0adcc2d', 'Learn more'),
        a('ib3357a6', 'Personalized ads'),
        a(
          'f2f9628e',
          'You will always see ads on X based on your X activity. When this setting is enabled, X may further personalize ads from X advertisers, on and off X, by combining your X activity with other online activity and information from our partners.',
        ),
        a('b5fe50fc', 'Ads Categories'),
        a(
          'c31a2ea6',
          'Enabling these settings make you eligible to see ads in these categories. Choose to see fewer ads about these categories by opting out.',
        ),
        a('if996630', 'Gambling'),
        a('a9ed7774', 'Allow use of where you see X content across the Web'),
        a(
          'e2d61838',
          'This setting lets X keep track of your visits to other websites that integrate X content, such as embedded timelines. That information makes X better for you, such as by personalizing your experience. This web browsing history will never be stored with your name, email, or phone number.',
        ),
        a('c966aaf4', 'These web page visits are not stored or used when you’re in certain countries.'),
        a('e8313b32', 'Are you sure? Once you turn this off, you can’t turn it back on while you’re in this country.'),
        a('f1d46fd6', 'Yes, I’m sure'),
        a('f6c8ccc8', 'Personalize based on your inferred identity'),
        a(
          'ed012c88',
          'X will always personalize your experience based on information you’ve provided, as well as the devices you’ve used to log in. When this setting is enabled, X may also personalize based on other inferences about your identity, like devices and browsers you haven’t used to log in to X or email addresses and phone numbers similar to those linked to your X account.',
        ),
        a('d3c20d80', 'Allow additional information sharing with business partners'),
        a(
          'f1c0d09c',
          'X always shares information with business partners as a way to run and improve its products. When enabled, this allows X to share additional information with those partners to help support running X’s business, including making X’s marketing activities on other sites and apps more relevant for you.',
        ),
        a('dc20d918', 'Personalize based on places you’ve been'),
        a(
          'af7d89e6',
          'X always uses some information, like where you signed up and your current location, to help show you more relevant content. When this setting is enabled, X may also personalize your experience based on other places you’ve been.',
        ),
        a('f2b23062', 'Accessibility, display and languages'),
        a('fa76d7dc', 'Manage how X content is displayed to you.'),
        a('j7a15010', 'Manage aspects of your X experience such as limiting color contrast and motion.'),
        a(
          'a257ecae',
          'Manage your font size, color, and background. These settings affect all the X accounts on this browser.',
        ),
        a('jc3fa0e2', 'Manage which languages are used to personalize your X experience.'),
        a(
          'f69d80a4',
          'Limit how X uses some of your network data. These settings affect all the X accounts on this browser.',
        ),
        a('a4b69cbc', 'Display language'),
        a('c856bd00', 'Select your preferred language for headlines, buttons, and other text from X.'),
        a('cab61d58', 'Select additional languages'),
        a('dd93fafa', 'Select additional languages for the content you want to see on X.'),
        a('bca1de4a', 'Additional languages you speak'),
        a('c3aa76c4', 'Languages you may know'),
        a(
          'g099069c',
          'Manage the languages X inferred based on your activity, such as the accounts you follow and the posts you engage with.',
        ),
        a('cf9ce876', 'App and post languages'),
        a('d4372cf4', 'English (US), 中文(简体), Español'),
        a(
          'f8e46b90',
          'These are the social accounts you connected to your X account to log in. You can disable access here.',
        ),
        a('d84ed6b2', 'Disconnect'),
        a('i51130d4', 'Google'),
        a('e28901f2', 'Apple'),
        a('cf8560be', 'Connected'),
        a('d12d42dc', 'Automation'),
        a('ad31b476', 'Manage your automated account.'),
        a('a2981062', 'Managing account'),
        a('aff4540e', 'Change managing account'),
        a('b8b9d100', 'Set up account automation'),
        a('e0bc51f6', 'Turn off account automation'),
        a('b92190c2', 'Managing account connected'),
        a('fb03b39a', 'Managing account disconnected'),
        a('bd51ddfa', 'We are unable to disconnect your managing account at this time. Please try again later.'),
        a('e91c15f6', 'Disconnect your managing account?'),
        a('df035b80', 'Your automated account will lose its label if you disconnect your managing account.'),
        a('bd12cf34', 'Yes, disconnect'),
        a('f79acef3', 'Learn more'),
        a('ab6505a8', 'If selected, X will use less network data.'),
        a('a5d4fda0', 'Something went wrong, but don’t fret — let’s give it another shot.'),
        a('g1888dc2', 'Never'),
        a('f724d1aa', 'Only on Wi-Fi'),
        a('cf6472c2', 'On cellular or Wi-Fi'),
        a('b2ed92c4', 'Requesting archive'),
        a('ce5d2c46', 'Temporarily unavailable'),
        a('bed6a87c', 'Your X data link is expired'),
        a('b24b4768', 'Go to My X Data'),
        a('a0c3f812', 'To get an updated one, you’ll need to make a new request.'),
        a('eea30bb5', function (e) {
          return 'Generated on: ' + e.date
        }),
        a('f2cde471', function (e) {
          return 'Expires on: ' + e.date
        }),
        a('b7ce9dbf', function (e) {
          return 'Estimated size: ' + e.size
        }),
        a('d3de4c97', function (e) {
          return 'X data (' + e.currentIndex + ' of ' + e.count + ')'
        }),
        a('fc5bfd96', 'Get started'),
        a('gee8110e', 'Download archive'),
        a('c326f156', 'Archive downloaded'),
        a('c9fe9b56', 'Your archive is about to download'),
        a('j54b679b', function (e) {
          return (
            'This will open in another window, and may take a while to finish. When complete, the download will be a ' +
            e.size +
            ' ZIP file.'
          )
        }),
        a('ac63840d', function (e) {
          return e.size + ' KB'
        }),
        a('bcd9b0ed', function (e) {
          return e.size + ' MB'
        }),
        a('ce494bb4', 'Font size'),
        a('c783d45e', 'Color'),
        a('h306a358', 'Background'),
        a('d8680056', 'Extra small'),
        a('eed02406', 'Small'),
        a('j59f0b94', 'Default'),
        a('b81aaad8', 'Large'),
        a('c7044880', 'Extra large'),
        a('e46dffa0', 'Text size'),
        a('ce8a8116', 'Background options'),
        a('d3d48f3a', 'Light'),
        a('i76f67ee', 'Dim'),
        a('c8f85960', 'Lights out'),
        a('aefc5b20', 'Color options'),
        a('a52d0fde', 'Blue'),
        a('d818cdd6', 'Yellow'),
        a('fee1cd64', 'Pink'),
        a('cbed7fb2', 'Purple'),
        a('g697ec02', 'Orange'),
        a('a7c2204a', 'Green'),
        a('gde8fdd7', function (e) {
          return (
            'At the heart of X are short messages called posts — just like this one — which can include photos, videos, links, text, hashtags, and mentions like @' +
            e.mention +
            '.'
          )
        }),
        a('f277e94a', 'View'),
        a('ee79367b', function (e) {
          return 'Level ' + e.conversationTreeDepth + ':'
        }),
        a('a2a3824a', 'Topic'),
        a('ec6907ba', 'Ad'),
        a('d9587114', 'See the latest post'),
        a('b7b86c3c', 'Opens the new version of this post'),
        a('a407814e', 'Last edited'),
        a('i46ee3f0', 'This is the latest version of this post.'),
        a('ffe16626', 'Reply filter is on.'),
        a('jc81f6a7', function (e) {
          return e.count + ' view' + n(e.count, '', 's')
        }),
        a('f396c105', function (e) {
          return '' + e.displayCount
        }),
        a('aa037e65', function (e) {
          return 'View' + n(e.count, '', 's')
        }),
        a('hbe4feb5', function (e) {
          return 'A follow request has been sent to @' + e.screenName + ' and is pending their approval.'
        }),
        a('df4c86b0', 'Please update your profile first'),
        a('bba40ffa', 'You can’t follow this account'),
        a(
          'f558829e',
          'To follow this account, you’ll need to include your birth date on your profile, ensuring you meet minimum age requirements.',
        ),
        a('a6941096', 'This account can’t be followed from your country.'),
        a('if8cd2a4', 'You’re not old enough to follow this account.'),
        a('b5972260', 'Something went wrong. Try canceling your follow request for that user again in a minute.'),
        a('b6878b0a', 'Something went wrong. Try blocking that user again in a minute.'),
        a('j4292c24', 'You have been blocked from following this user at their request.'),
        a('a0ba5842', 'You are unable to follow more people at this time.'),
        a('a5202b82', 'Something went wrong. Try following that user again in a minute.'),
        a('f8cbf714', 'You’re trying to follow a user that doesn’t exist.'),
        a('f2e66452', 'Your account is suspended and is not permitted to follow users.'),
        a('ca96fe6e', 'Something went wrong. Try unblocking that user again in a minute.'),
        a('e1a0aaca', 'Something went wrong. Try unfollowing that user again in a minute.'),
        a('a17a75da', 'X is better on the app'),
        a('e7342ed4', 'Never miss a post. Open this in the X app to get the full experience.'),
        a('b6a43e78', 'Be the first to know'),
        a(
          'b469e406',
          'Keep up-to-date with what matters most to you. Switch to the app for push notifications about people, topics and events you follow.',
        ),
        a('b8505290', 'Reply to join the conversation.'),
        a('ae8b0564', 'Repost to spread the word.'),
        a('f2adab0e', 'Like a post to share the love.'),
        a('b7821a74', 'Sign up so you never miss their posts.'),
        a('e6d43d06', 'Follow a Topic to discover great posts'),
        a('ic848090', 'Log in first'),
        a('f9ebe066', 'You can join the conversation in Communities — right after you log in.'),
        a('ea88ce2e', 'Don’t miss what’s happening'),
        a('je3d93e2', 'People on X are the first to know.'),
        a('j607bf02', 'Download the X app'),
        a('j49fd4e8', 'Switch to the app'),
        a('a565833e', 'Sign up'),
        a('e919c3bc', 'Log in'),
        a('b8f3500a', 'View thread in Reader'),
        a('a66d80d0', 'Translate post'),
        a('he9c9634', 'Unable to fetch translation'),
        a('j2198c98', 'Hide translated post'),
        a('i73a7d48', 'Translated by Google'),
        a('eeadb767', function (e) {
          return 'Translated from ' + e.originLanguage + ' by Google'
        }),
        a('dc445f82', 'Translated by Papago'),
        a('he9803d3', function (e) {
          return 'Translated from ' + e.originLanguage + ' by Papago'
        }),
        a('j2862695', function (e) {
          return 'Translated from ' + e.originLanguage + ' by'
        }),
        a('b7cb4fab', 'Translated by'),
        a('d4c339b9', function (e) {
          return 'Post from ' + e.fullName + ' (@' + e.screenName + ')'
        }),
        a('db0cb64f', function (e) {
          return e.fullName + ' (@' + e.screenName + ') posted:\n' + e.tweet
        }),
        a('h6f99ac4', 'Added to your Bookmarks'),
        a('g1c463f6', 'Removed from your Bookmarks'),
        a('a2e7377f', function (e) {
          return 'Removed from ' + e.bookmarkFolderName
        }),
        a('i47ad24c', 'Keep it up! The more posts you like, the better your timeline will be.'),
        a(
          'def4a37c',
          'Nice work! Your timeline’s getting better. The more you like, the better your timeline will be – keep liking the stuff you’re into.',
        ),
        a('bcab06d2', 'Post liked'),
        a('i5efe23e', 'Post unliked'),
        a('f5d17674', 'Post reposted'),
        a('d714acfa', 'Post unreposted'),
        a('b18dff26', 'Only Subscribed can see this repost'),
        a('c2453318', 'Add to Folder'),
        a('b5b36724', 'Reply instead?'),
        a('gce00a2a', 'Repost instead?'),
        a('g271f120', 'Your drafted post will be discarded before you reply.'),
        a('gad04d1a', 'Your drafted post will be discarded before you Quote.'),
        a('g062295e', 'Repost'),
        a('ibd021f2', 'Want to read the article first?'),
        a('bbef69c4', 'You’re about to share an article you haven’t opened on X.'),
        a('g5092766', 'Read article'),
        a('a2d5c006', 'Thanks for visiting the link'),
        a('g37bb2d0', 'Visiting links before sharing them helps promote informed discussion.'),
        a('gc45a90a', 'Expand this prompt'),
        a('g7135e44', 'Help keep X a place for reliable info. Find out more before liking this post.'),
        a('h9b6d468', 'Help keep X a place for reliable info. Find out more before sharing this post.'),
        a('af5cd00e', 'Find out more'),
        a('e29c651e', 'Thanks for learning more'),
        a('b3bd3e38', 'Top posts first'),
        a('d88cf16c', 'Latest posts first'),
        a('bd4ad3ea', 'Wide'),
        a('ca1180a0', 'Medium'),
        a('c86ff1b0', 'Narrow'),
        a('cffb04d6', 'Standard'),
        a('e2462db4', 'Most shared in your network · Last 24 hours'),
        a('ad16f482', 'Event'),
        a('c20aaf3e', 'Error'),
        a('fa884026', 'List'),
        a('a6d5b010', 'Timeline'),
        a('j359a2a9', function (e) {
          return e.handle + ' • ' + e.itemName
        }),
        a('j5ec9765', function (e) {
          return e.handle + ' • Bookmark Folder'
        }),
        a('ce5deee7', function (e) {
          return e.handle + ' • Messages'
        }),
        a('d80c77dc', 'You hid these replies'),
        a('ef939f4b', function (e) {
          return 'Replies hidden by @' + e.screenName
        }),
        a('bcc7e8c0', 'All Bookmarks'),
        a('e39b368e', 'Broadcast'),
        a('hbea78a8', 'New column'),
        a('b5298d92', 'Connect'),
        a('d35d74e4', 'Conversation'),
        a('h5245afa', 'Community'),
        a('d4ebc798', 'Drafts'),
        a('d806aa1a', 'Hidden replies'),
        a('cf2d1048', 'Message requests'),
        a('e7172d70', 'Additional messages'),
        a('e1066d88', 'My Profile'),
        a('j45978a8', 'Quotes'),
        a('fd6a3f30', 'Scheduled posts'),
        a('aa4209e8', 'Super Followers'),
        a('bc8baa08', 'Subscribed'),
        a('c5f4befa', 'Trends'),
        a('df34a454', 'Post'),
        a('gfccba44', 'Member requests'),
        a('c2c191fc', 'Reported posts'),
        a('c63602d4', 'My Communities'),
        a('ddf0ba7e', 'Collection'),
        a('c64974fc', 'Followers'),
        a('i099d32e', 'Followers you know'),
        a('d960b55c', 'Following'),
        a('b007440a', 'Jobs'),
        a('aa68dafc', 'Notification details'),
        a('jf00ebf6', 'Column unavailable'),
        a('f345dcda', 'Edit History'),
        a('a8209bfa', 'Similar posts'),
        a('b5b7fb94', 'Group'),
        a('g755fcde', 'You'),
        a('f6b1ff81', function (e) {
          return e.name + ' and You'
        }),
        a('j652293d', function (e) {
          return e.listOfParticipants + ' and ' + e.count + ' more'
        }),
        a('d8817e36', 'Accept all cookies'),
        a('b9288ee6', 'Refuse non-essential cookies'),
        a('i1390ec2', 'Did someone say … cookies?'),
        a('ga3121d5', 'help center'),
        a('g482c949', 'Show more about your choices.'),
        a('b47e760e', 'To view keyboard shortcuts, press question mark'),
        a('fd2c7b44', 'View keyboard shortcuts'),
        a('g7e2adf2', 'Make a new deck'),
        a('a6ba09e8', 'Duplicate column'),
        a('f5c9ccca', 'Edit current Deck'),
        a('bf42c578', 'Focus on reorder button'),
        a('j6fa64a6', 'Go to final column'),
        a('b5545202', 'Go to final pinned deck'),
        a('e0497acc', 'Go to Manage All Decks'),
        a('beef7b14', 'Go to next column'),
        a('a5cb005e', 'Go to Nth column'),
        a('f65391bc', 'Go to Nth pinned Deck'),
        a('h0bfdd20', 'Add column'),
        a('h770f6d4', 'Go to previous column'),
        a('b8b2b70c', 'Delete column'),
        a('a3e2df76', 'Undo delete column'),
        a('g850aec4', 'Open / Close column settings'),
        a('d5696fcc', 'Shortcut help'),
        a('a83d4280', 'Next post'),
        a('g0048656', 'Previous post'),
        a('a690c4d0', 'Page down'),
        a('e893811a', 'Load new posts'),
        a('d7b8ebaa', 'Likes'),
        a('eee2ed92', 'Go to user…'),
        a('ee5ccf3e', 'Display settings'),
        a('ab3d53f8', 'New post'),
        a('de94bda6', 'Send post'),
        a('e736990a', 'New Direct Message'),
        a('fe731016', 'Like'),
        a('h01621a4', 'Share post'),
        a('gb303814', 'Bookmark'),
        a('c03b1126', 'Mute account'),
        a('ebd2abb2', 'Block account'),
        a('hc6c5510', 'Open post details'),
        a('eebdef38', 'Expand photo'),
        a('b488758c', 'Open/Close Messages dock'),
        a('c82314e0', 'Pause/Play selected Video'),
        a('b881560e', 'Mute selected Video'),
        a('a94f7302', 'Go to Audio Dock'),
        a('a7e604c6', 'Play/Pause Audio Dock'),
        a('f978c4fc', 'Mute/Unmute Audio Dock'),
        a(
          'e5d26f84',
          'Never miss out on what’s happening by enabling notifications. X will receive your device country and language to personalize your notifications.',
        ),
        a('e71e09ec', 'Turn on notifications'),
        a('g4850f44', 'Push notifications enabled'),
        a('ef504d80', 'You can’t add posts from protected accounts to your Bookmarks — yet.'),
        a('cef96d5a', 'Post is already in your Bookmarks'),
        a('b2542f56', 'Something went wrong. Try bookmarking that post again in a minute.'),
        a('fe3b9942', 'You have been blocked from liking this user’s posts at their request.'),
        a('c2a6dc5c', 'Something went wrong. Try liking your post again in a minute.'),
        a('b57f01b8', 'Can’t like posts of protected users you aren’t following.'),
        a('ba0b3cc0', 'You have been blocked from reposting this user’s posts at their request.'),
        a('h32b1ac4', 'Something went wrong. Try reposting again in a minute.'),
        a('e50cea9e', 'Repost is not permissible for this post.'),
        a('d8e56f40', 'Sorry! You have exceeded your post limit. Try reposting again tomorrow'),
        a('i14d7a46', 'Something went wrong. Try removing that post from your bookmarks again in a minute.'),
        a('d4ebfeb0', 'Try unliking your post again in a minute.'),
        a('e639775e', 'Try undoing your Retweet again in a minute.'),
        a('fcad707a', 'We put a warning on this post because it might have sensitive content.'),
        a('f1824804', 'Appeal this warning'),
        a('f755f710', 'Got It'),
        a('ced4abbe', 'See conversation'),
        a('cac4e916', 'This post is hidden'),
        a('ba352986', 'You can’t reply … yet'),
        a('cb18be32', 'You can’t do that … yet'),
        a('dbb5fd8e', 'Circle posts can’t be reposted'),
        a('ae2c8a1e', 'Why can’t you reply to this?'),
        a('afe7ba26', 'Why can’t you Like this?'),
        a('df9e2356', 'Why can’t you add this to Bookmarks?'),
        a('jead3bc2', 'Why can’t you share this?'),
        a('h2a668b8', 'Why can’t you view post analytics?'),
        a('bd85267e', 'Why can’t you repost this?'),
        a('dcc05a7e', 'Views'),
        a('e213fada', 'View counts are not available for this post.'),
        a('g0954ea6', 'Only the post author and Community moderation team can see it, and engagements are disabled.'),
        a(
          'e7969518',
          'Communities are public, so you can read the posts — but right now, participation is invite-only.',
        ),
        a('g2dc874a', 'Communities are public, so you can read the posts — but only members can interact with them.'),
        a('g562676f', 'Learn more'),
        a('ee574c37', 'Learn more'),
        a('de2d83d6', 'Bookmark to Folder'),
        a('f14df406', 'Copy link to ad'),
        a('ff9348b8', 'Share ad via …'),
        a('d03241f8', 'Share post via …'),
        a('j08dd2d4', 'Remove from Bookmarks'),
        a('b7fde1ea', 'Remove from Folder'),
        a('fbfab656', 'Share to Space'),
        a('e668112c', 'Post shared with Space'),
        a('g5775e46', 'View Quotes'),
        a('bb192c6b', function (e) {
          return '' + e.displayCount
        }),
        a('f23d99b0', function (e) {
          return 'Bookmark' + n(e.count, '', 's')
        }),
        a('e8866a55', function (e) {
          return '' + e.displayCount
        }),
        a('eb3abe45', function (e) {
          return 'Like' + n(e.count, '', 's')
        }),
        a('eff958fb', function (e) {
          return '' + e.displayCount
        }),
        a('i5a8c515', function (e) {
          return 'Quote' + n(e.count, '', 's')
        }),
        a('dd77f9fb', function (e) {
          return '' + e.displayCount
        }),
        a('a755b81b', function (e) {
          return 'Repost' + n(e.count, '', 's')
        }),
        a('b97f5eb2', 'Sending post...'),
        a('gf5e9ea6', 'Undo'),
        a('j4c40da4', 'Send now'),
        a('b23688c8', 'Undo timer'),
        a('df45f564', 'Add another post'),
        a('i569ff3e', 'Show this thread'),
        a('g345246c', 'This is a published Article, a new way to write on X.'),
        a('ae2c4afc', 'Want to publish your own Article?'),
        a('c9772e6e', 'Upgrade to Premium'),
        a('b14efa0a', 'Article cover image'),
        a('bdba3e1a', 'Turn on post notifications'),
        a('c4da7d28', 'Turn off post notifications'),
        a('j87c21f4', 'Notify'),
        a('iebc30ca', 'Turn off notifications'),
        a(
          'dc740eb2',
          'You will see post notifications from this account in the Notifications timeline. You can also enable push notifications on your device to never miss a post.',
        ),
        a('b87c0a72', 'Never miss what’s happening on X by enabling push notifications'),
        a('dc397182', 'Customize'),
        a('a9fd20be', 'Successfully blocked.'),
        a('e133be4e', 'Unblock'),
        a('dca669ad', function (e) {
          return 'Reposts from ' + e.name + ' will no longer appear in your timeline'
        }),
        a('ce6da5d7', function (e) {
          return 'Reposts from ' + e.name + ' will appear in your timeline'
        }),
        a('c6ea308b', function (e) {
          return e.fullName + ' (@' + e.screenName + ')'
        }),
        a('a1fef729', function (e) {
          return 'Check out ' + e.fullName + ' on X.\n' + e.bio
        }),
        a('c32a3d03', function (e) {
          return '@' + e.screenName + ' is no longer following you'
        }),
        a('badf3f35', function (e) {
          return 'You removed @' + e.screenName + ' from flagged accounts'
        }),
        a('j7bb1a43', function (e) {
          return 'Report @' + e.screenName
        }),
        a('hef5960c', 'Share profile via...'),
        a('f9e45cfb', function (e) {
          return 'Block @' + e.screenName + '?'
        }),
        a('fcd4d489', function (e) {
          return 'Block @' + e.screenName
        }),
        a('a6450e84', 'Block'),
        a('g353ad73', function (e) {
          return (
            'They will not be able to follow you or view your posts, and you will not see posts or notifications from @' +
            e.screenName +
            '.'
          )
        }),
        a('j546fb79', function (e) {
          return 'Unblock @' + e.screenName + '?'
        }),
        a('c9623eeb', function (e) {
          return 'Unblock @' + e.screenName
        }),
        a('he43bca4', 'They will be able to follow you and view your posts.'),
        a('ae3e9c81', function (e) {
          return 'Remove @' + e.screenName + ' from Autoblocked accounts list?'
        }),
        a('dacb5cc6', 'They will be able to see your posts, follow you, and send you Direct Messages.'),
        a('h2f62206', 'Muting user'),
        a('e67b2d65', function (e) {
          return 'Mute @' + e.screenName
        }),
        a('f05597b3', function (e) {
          return 'Unmute @' + e.screenName
        }),
        a('h59f52ee', 'Successfully muted.'),
        a('eea0cbee', 'Successfully unmuted.'),
        a('i29533b3', function (e) {
          return '@' + e.screenName + ' has been muted.'
        }),
        a('h129c3c3', function (e) {
          return '@' + e.screenName + ' has been unmuted.'
        }),
        a('b3036480', 'Remove this follower'),
        a('h27b7407', function (e) {
          return (
            '@' +
            e.screenName +
            ' will be removed from your followers and won’t be notified by X. They can follow you again in the future.'
          )
        }),
        a('ibd0b842', 'Copy link to profile'),
        a('b9c26480', 'View Topics'),
        a('e922ce0c', 'Turn on reposts'),
        a('ge54bb8c', 'Turn off reposts'),
        a('h5ef9bc8', 'View Lists'),
        a('jcba15d2', 'Remove autoblock'),
        a('e9eef4c6', 'Report EU illegal content'),
        a('e28ba0bb', function (e) {
          return 'Report @' + e.screenName + ' for EU illegal content'
        }),
        a('d78131b9', function (e) {
          return 'Add/remove @' + e.screenName + ' from Lists'
        }),
        a('f2f4d0e8', 'Remove from flagged accounts'),
        a('e1f2f8bd', function (e) {
          return 'Remove @' + e.screenName + ' from Flagged accounts list?'
        }),
        a('a30b63da', 'Something went wrong. Try removing the follower again in a minute.'),
        a('b360ac7c', 'Section navigation'),
        a('adc81042', 'Section details'),
        a('bede965c', function (e) {
          return '' + e.count
        }),
        a('e1a292ec', 'Add Media'),
        a('ia3611ee', 'Start writing'),
        a('ebfd8ac6', 'Insert'),
        a(
          'd794135c',
          'Choose a file or drag it here.\n\nEach block can include a GIF, video or photo set (up to 4 photos per set).',
        ),
        a('e187f906', 'GIFs'),
        a('fa4e68ca', 'Posts'),
        a('c62a27e6', 'Liked'),
        a('g88b88a6', 'Bookmarked'),
        a('i282583e', 'Posts from protected accounts can’t be used'),
        a('eae4fe7a', 'Quote posts of a deleted post can’t be used'),
        a('a0e81a2e', 'Show'),
        a('d2042fb6', 'Liked posts'),
        a('iad3e15c', 'Bookmarked posts'),
        a('f1c63c34', 'Paste post URL'),
        a('a78f6310', 'Invalid post URL'),
        a('fe9ddab6', 'Post not found'),
        a('dd2c9034', 'Save posts for later'),
        a('cada17f8', 'Bookmark posts to easily find them again in the future.'),
        a('j0179e90', 'Compose a post'),
        a('e04033be', 'New posts are available. Push the period key to go to the them.'),
        a('hec711c0', 'See new posts'),
        a('d93b360a', 'This column was cleared, more posts will appear above when they’re created.'),
        a('d6e2f9be', 'Loading timeline'),
        a('afb4c24a', 'No items'),
        a('e5b0063d', function (e) {
          return 'Timeline: ' + e.title
        }),
        a('eb022176', 'Create account'),
        a('gcfef7b6', 'Create account with phone or email'),
        a('e5b0e544', 'Sign in'),
        a('gd93944e', 'Use app'),
        a('f2f787a0', 'Terms of Service'),
        a('e1099fd6', 'Privacy Policy'),
        a('c1df1ae0', 'Cookie Use.'),
        a('ib65b1c6', 'Sign up with Apple'),
        a('f55cebb8', 'Sign in with Apple'),
        a('dcc304d6', 'Continue with Apple'),
        a('e0870f26', 'Sign up with Google'),
        a('gfeffd6a', 'Sign in with Google'),
        a('e43138c5', function (e) {
          return 'Follow ' + e.name
        }),
        a('be65f2e7', function (e) {
          return 'Unfollow ' + e.name
        }),
        a('a649d337', function (e) {
          return 'Not interested in ' + e.name
        }),
        a('e2f2b658', 'We won’t suggest this Topic anymore.'),
        a('b51f7edf', function (e) {
          return 'You unfollowed ' + e.name
        }),
        a('gac366b3', function (e) {
          return 'You followed ' + e.name
        }),
        a('e40252de', 'Don’t show these posts in For you'),
        a('ae225c26', 'Show these posts in For you'),
        a('a96d2628', 'Don’t show this List in For you'),
        a('d00abae0', 'Top posts from this List will no longer show up in your For you timeline.'),
        a('e566dd06', 'Top posts from this List will no longer show up in For you.'),
        a('j3cc1526', 'Show this List in For you'),
        a('h435716e', 'Top posts from this List may show up in your For you timeline.'),
        a('e8ba412e', 'Top posts from this List may now show up in For you.'),
        a('d66e95cc', 'Pin reply to your post?'),
        a('i24ed0de', 'Pin reply'),
        a('b1033082', 'It will appear at the top of your post’s replies. You can replace it or unpin it anytime.'),
        a('e96a5962', 'Unpin this reply?'),
        a('ec04e6fc', 'Unpin reply'),
        a('d05618f2', 'It will no longer appear at the top of this post’s replies.'),
        a('j9aedfdc', 'Pin Reply'),
        a('c034211a', 'Unpin Reply'),
        a('ie4538b4', 'Reply pinned to post'),
        a('ad135a24', 'Reply unpinned from post'),
        a('ee369efc', 'Unable to pin reply to post'),
        a('c3e7f572', 'Unable to unpin reply from post'),
        a('d058316c', 'Thanks. X will use this to make your timeline better.'),
        a('afb7e8f8', 'Read Article'),
        a('jb0429b1', function (e) {
          return 'By ' + e.name + ' @' + e.screenName
        }),
        a('c5d23126', 'Pin'),
        a('j44ec610', 'Unpin'),
        a('ibd0106e', function (e) {
          return '' + e.formattedCount
        }),
        a('cface2d1', function (e) {
          return 'Member' + n(e.count, '', 's')
        }),
        a('e6057014', 'Ask to join'),
        a('b5334780', 'Pending'),
        a('b171d7c4', 'Join'),
        a('aa7ae3f6', 'Joined'),
        a('h4fbfa58', 'Agree and join'),
        a('ea8cfb1e', 'Agree and ask to join'),
        a('dc1b14a1', function (e) {
          return 'Review and agree to ' + e.communityName + ' Rules'
        }),
        a('c966ac64', 'Unable to request to join Community. Please try again later.'),
        a('g690e07e', 'Your Answer (optional)'),
        a('a5d21bf4', 'Answer is optional. But remember it helps moderators accept your request.'),
        a('h9526e03', 'X’s rules'),
        a('c00c234f', function (e) {
          return e.communityName + ' Rules'
        }),
        a('hafa07f2', 'Participation is limited'),
        a('c15bee32', 'You’ve been removed from this Community'),
        a('efa265fc', 'Your posts are protected'),
        a('bf7bdb60', 'It’s not you, it’s us (really). Please try again later.'),
        a('h27d6950', 'You can’t leave just yet'),
        a('b02360f6', 'The last admin or moderator can’t leave unless the Community is empty.'),
        a('fe832999', 'make your posts public'),
        a('bc7a7af4', 'Your posts in the Community will be hidden, and you won’t be able to join again.'),
        a('a0e0a52c', function (e) {
          return '' + e.offendingRule
        }),
        a('fe76cacc', 'Show more posts'),
        a('aebb6546', 'Loading more posts'),
        a('a3484d22', 'tie'),
        a('aab2efa9', function (e) {
          return 'winner ' + e.winner
        }),
        a('ba21c289', function (e) {
          return (
            'Score card, ' +
            e.gameCategory +
            ', ' +
            e.gameState +
            ', ' +
            e.accessibleGameClockPeriod +
            ', ' +
            e.teamOneLabel +
            ', ' +
            e.teamTwoLabel
          )
        }),
        a('f178e38c', 'Upcoming'),
        a('b6da6b02', 'Live'),
        a('i9f615c8', 'Final'),
        a('f897267a', 'Postponed'),
        a('f93c4b6a', 'Cancelled'),
        a('i79ab12a', 'Follow Topic'),
        a('c0f56044', 'Unfollow'),
        a('fcf51fe6', 'Star'),
        a('e9a90d72', 'Starred'),
        a('bf403716', 'Unstar'),
        a('c9f08e29', function (e) {
          return 'Unstar ' + e.title + '?'
        }),
        a(
          'hed4dcd0',
          'Even if you unstar this Topic, you may still see posts about it depending on which accounts you’re following.',
        ),
        a('cd876e02', 'Favorite'),
        a('f2816e02', 'Favorited'),
        a('f5b04fbc', 'Unfavorite'),
        a('c481ae3f', function (e) {
          return 'Unfavorite ' + e.title + '?'
        }),
        a(
          'c94116de',
          'Even if you unfavorite this Topic, you may still see posts about it depending on which accounts you’re following.',
        ),
        a('e0e730b0', 'Interested'),
        a('b1850062', 'Not interested'),
        a('gd3f996f', function (e) {
          return 'Not interested in ' + e.title + '?'
        }),
        a(
          'jdd65aac',
          'Even if you are not interested in this Topic, you may still see posts about it depending on which accounts you’re following.',
        ),
        a('f93bb3ee', 'Load image'),
        a('cc37768d', function (e) {
          return e.mediaFileSize + ' KB'
        }),
        a('f19d78d7', function (e) {
          return e.mediaFileSize + ' MB'
        }),
        a('c75bf00e', 'Load GIF'),
        a('d3ac405c', 'Load video'),
        a('g97a046c', 'Play this video'),
        a('ac4c73d8', 'Embedded video'),
        a('f3bb10a6', 'Playing video'),
        a('j681933e', 'Private List'),
        a('add55942', 'Something went wrong. Try subscribing again in a minute.'),
        a('ib8f5f3c', 'Something went wrong. Try unsubscribing again in a minute.'),
        a('e20fc756', 'You aren’t allowed to add this member to this List.'),
        a('d8a032a2', 'You’ll need to remove one pinned Timeline before adding another'),
        a('fa816a0a', 'Reorder List'),
        a('ac832ae4', 'Pin List'),
        a('cdb33880', 'Unpin List'),
        a('ca5d0a82', 'Edit List'),
        a('ec08efe4', function (e) {
          return '' + e.formattedCount
        }),
        a('h9f711f0', function (e) {
          return 'Follower' + n(e.count, '', 's')
        }),
        a('jceadc3e', 'Untitled'),
        a('a1d5303c', 'Private'),
        a('cc8f8a80', 'Unlisted'),
        a('c33a97d6', 'Public'),
        a('i73fff1b', function (e) {
          return 'Show ' + e.count + ' post' + n(e.count, '', 's')
        }),
        a('a682906d', function (e) {
          return e.count + ' like' + n(e.count, '', 's') + ' to go'
        }),
        a('ccc45ee7', function (e) {
          return e.team + ' won'
        }),
        a('f81a95d7', function (e) {
          return '' + e.date
        }),
        a('ed4bea2e', 'Today'),
        a('j3e0ae78', function (e) {
          return '・' + e.formattedTime
        }),
        a('cabfdd06', 'Tomorrow'),
        a('abd0f804', function (e) {
          return '・' + e.formattedTime
        }),
        a('je5502eb', function (e) {
          return 'Including results for "' + e.suggestion + '"'
        }),
        a('bc4628a1', function (e) {
          return 'Showing results for "' + e.suggestion + '"'
        }),
        a('a1979464', 'Loading video'),
        a('c8b4bca0', 'Shop'),
        a('f5ea07ec', 'Shop now'),
        a('b62956aa', 'Book'),
        a('i3ea806a', 'Order'),
        a('fd00a76a', 'Open'),
        a('e0aa5848', 'Install'),
        a('g33f3050', 'Web'),
        a('d3f6b1a6', 'Message us'),
        a('b0e322cc', 'Send us a private message'),
        a('cb8bddc8', 'Send me a private message'),
        a('cb8c547e', 'Send a private message'),
        a('d980e29f', function (e) {
          return 'Starting ' + e.date
        }),
        a('c837fcaa', 'Show more replies'),
        a('d228a9a0', 'Show more'),
        a('b52a940c', 'This post is unavailable.'),
        a('da59404c', 'You’re currently viewing the latest version.'),
        a('e267df68', 'Reply hidden'),
        a('d5f162b6', 'Unhide this reply anytime. Anything else?'),
        a('f376e9d4', 'Post feedback'),
        a('d7c93b6c', 'Post hidden'),
        a('b3abacee', 'You’ll see fewer posts like this. Any other feedback?'),
        a('a2411360', 'See a reply you like?'),
        a(
          'e8a14626',
          'Now you can pin a reply to your post using the actions menu — those three little dots on a post (...).',
        ),
        a('d41305a8', 'Message bubble with pushpin'),
        a('eca84b72', 'Undo repost'),
        a('g6185a9e', 'Who can reply?'),
        a('i00051cc', 'Choose who can reply to this post. Anyone mentioned can always reply.'),
        a('i9000126', 'Accounts you follow'),
        a('dcaede8a', 'Only accounts you mention'),
        a('ad85cd2e', 'Your Subscribers'),
        a('f19e4bfc', 'Verified accounts'),
        a('bf994ab2', 'Only you'),
        a('e7b4b30a', 'Only accounts you mentioned'),
        a('h3032750', 'Get more info'),
        a('f5b3dc1e', 'Maybe later'),
        a('i5524f74', 'Get access to edit posts with Premium'),
        a(
          'c03d528c',
          'Premium subscribers get early access to features like edit post, which lets you update a post up to 5 times within the first 30 minutes after it’s published.',
        ),
        a(
          'ffd2757e',
          'Premium subscribers get early access to features like edit post, which lets you update a post up to 5 times within the first 1 hour after it’s published.',
        ),
        a('ae0c5fbe', 'Error changing who can reply'),
        a('bae0cbc0', 'Change who can reply'),
        a('fb4ee11c', 'Why this ad?'),
        a('ad50e7d9', function (e) {
          return 'View ' + e.entity + ' analytics'
        }),
        a('ef1042f8', 'Write a Community Note'),
        a('bf8d98f4', 'Only Subscribed can reply'),
        a('d96cf7ce', 'Delete'),
        a('ae04c4dd', function (e) {
          return 'Delete ' + e.entity + '?'
        }),
        a(
          'd9442996',
          'This can’t be undone and it will be removed from your profile, the timeline of any accounts that follow you, and from search results.',
        ),
        a('dad785a7', function (e) {
          return (
            'This will delete all versions of this ' +
            e.entity +
            ' from your profile, the timeline of any accounts that follow you, and from search results. This cannot be undone.'
          )
        }),
        a('jda253ab', function (e) {
          return 'Your ' + e.entity + ' was deleted'
        }),
        a('j49c2f85', function (e) {
          return 'Something went wrong. Try deleting your ' + e.entity + ' again in a minute.'
        }),
        a('f9fa0390', 'Your Article will be moved into a draft state and can be deleted from the Articles page.'),
        a('d9a2bd78', 'Download video'),
        a('dad450ec', 'Edit Article'),
        a('g9677c6e', 'Confirm'),
        a('i5ed6282', 'Unpublish Article to edit?'),
        a('b6f72a22', 'This Article will be unpublished, moved to your drafts, and won’t be publicly visible.'),
        a('j26481e6', 'Your Article has been unpublished and moved to your drafts for editing.'),
        a('cb817dae', 'Edit post'),
        a('j11cb650', 'Edit with Premium'),
        a('fd391b9f', function (e) {
          return 'Embed ' + e.entity
        }),
        a('c66afdc3', function (e) {
          return 'Follow @' + e.screenName
        }),
        a('e1618e49', function (e) {
          return 'You followed @' + e.screenName
        }),
        a('ge5067bc', 'Hide reply'),
        a('j136c720', 'Reply hidden from post'),
        a('d66f0338', 'Hiding replies to your posts'),
        a(
          'cfc8cb50',
          'To give you more control over the conversations you start, post authors can hide replies to their posts.',
        ),
        a(
          'if8dc5f0',
          'Hidden replies are moved to a separate page, and anyone can view them by selecting the hidden reply icon on the post.',
        ),
        a('b2615c6d', function (e) {
          return 'Also block @' + e.screenName + '?'
        }),
        a('i62a03aa', 'No'),
        a('f9f27fa2', 'Hide post'),
        a('ce87916a', 'Add/remove from Highlights'),
        a('eaae42ce', 'Add to Highlights?'),
        a('h032d096', 'Remove from Highlights?'),
        a('be38d25e', 'This post would be featured in the Highlights tab on your profile.'),
        a('d2be9310', 'This post would be removed from the Highlights tab on your profile.'),
        a('jea6b076', 'Successfully added to Highlights.'),
        a('ce6fd0ec', 'Successfully removed from Highlights.'),
        a('af40a8e0', 'Add'),
        a('h8a3525e', 'Highlight on your profile'),
        a('ha35a1d2', 'Pin to your profile'),
        a('d04f95c0', 'Your post was pinned to your profile.'),
        a('i419d136', 'Pin post to profile?'),
        a('c1b9714a', 'This will appear at the top of your profile and replace any previously pinned post.'),
        a('fe4d099a', 'Highlight'),
        a('e8d4c1cc', 'Highlighting posts is a subscription feature. Get verified to unlock this feature and others.'),
        a('b68c3784', 'Get Verified'),
        a('bb16cc76', 'Leave this conversation'),
        a('de21174c', 'You’ve left this conversation'),
        a('j33c9fc6', 'Never mind, I’ll stay'),
        a('aed79c54', 'Let’s get you out of this conversation'),
        a('h12044a4', 'Sometimes you just don’t wanna engage. Leaving a conversation will…'),
        a('f100e566', 'Untag your username'),
        a('a0d68f4e', 'Your username stays, but it’ll be untagged from the original post and all replies.'),
        a('b00255b6', 'Stop future mentions'),
        a('geea29ee', 'People can’t mention you again in this conversation.'),
        a('c54678e8', 'Stop notifications'),
        a('ga4fa180', 'You won’t receive further notifications, but can still see the conversation.'),
        a('h8dde772', 'No one will be notified if you leave a conversation.'),
        a('ee87e71c', 'You can’t mute yourself.'),
        a('ed428a76', 'You are not muting the specified user.'),
        a('e2d6c17e', 'Mute this conversation'),
        a('cd1942f4', 'Unmute this conversation'),
        a('bbd8bed6', 'Notifications muted for this conversation'),
        a('c13af432', 'Notifications unmuted for this conversation'),
        a('df744bda', 'Mute this'),
        a('j9552760', 'Mute conversation'),
        a('d751694c', 'When you mute a conversation, you won’t get any new notifications about it.'),
        a('d1c1e2c2', 'Pin in Community'),
        a('j832cc34', 'This will appear at the top of your Community.'),
        a('h7dbb2f2', 'This will appear at the top of your Community and replace any previously pinned post.'),
        a('d8725596', 'Pinned by Community mods'),
        a('f5cdcc2c', 'Not interested in this ad'),
        a('b99364a5', function (e) {
          return 'Remove @' + e.screenName + ' from Community'
        }),
        a('a95f04ba', 'Are you sure you want to remove the photo tag from this post?'),
        a('jfc76958', 'Remove tag from photo'),
        a('j4e43d8b', function (e) {
          return 'Report ' + e.entity
        }),
        a('e3fd237e', 'Report ad'),
        a('ab0decc0', 'Subscribe'),
        a('d7dbb71b', function (e) {
          return e.followType + ' to ' + e.screenName
        }),
        a('ja66a2b5', function (e) {
          return 'Unfollow @' + e.screenName
        }),
        a('c2423b7b', function (e) {
          return 'You unfollowed @' + e.screenName
        }),
        a('i31dfa4c', 'Unhide reply'),
        a('j8e56ba2', 'Reply unhidden'),
        a('ic030338', 'Unpin from profile'),
        a('gfcea3f4', 'Unpin post from profile?'),
        a('eb2d59f4', 'This will no longer appear automatically at the top of your profile.'),
        a('a2dd7414', 'Your post was unpinned from your profile'),
        a('cac6a24a', 'Remove Pinned post'),
        a('i642edc4', 'This post will no longer appear at the top of the Community feed.'),
        a('f9478972', 'View hidden replies'),
        a('c5491b5d', function (e) {
          return 'View ' + e.entity + ' engagements'
        }),
        a('bec9cff8', 'Sign up for X'),
        a('c150ba68', 'Welcome!'),
        a('f8e2163e', 'Want to log in first?'),
        a('f9f9210c', 'No, thanks'),
        a('a36d354e', 'Now you can Follow them.'),
        a('eb5f060c', 'Follow'),
        a('feccfd6e', 'You’ll need to log in before you can Follow anyone.'),
        a('dedce756', 'Now you can Like that post.'),
        a('ha5987e0', 'Do you want to like this post?'),
        a('f98f4e00', 'You’ll need to log in before you can Like that post.'),
        a('b459ba4c', 'You’ll need to log in before you can reply to this post.'),
        a('f3e1093a', 'Now you can repost that.'),
        a('i1d8723c', 'Do you want to repost this post?'),
        a('h19f38de', 'You’ll need to log in before you can post that.'),
        a('e289d950', 'You’ll need to log in before you can share that post.'),
        a('d28215f0', 'Sorry, polls are not allowed in Communities!'),
        a('ec2fc089', function (e) {
          return 'Your post' + n(e.numOfTweets, ' was', 's were') + ' sent to ' + e.communityName
        }),
        a('c7152355', function (e) {
          return 'Don’t forget to make your image' + n(e.numberOfImages, '', 's') + ' accessible'
        }),
        a(
          'ffa5562a',
          'Good image descriptions are concise yet detailed. Be sure to summarize or write out any text in the image itself.',
        ),
        a('a2d3facd', function (e) {
          return (
            'Your description' +
            n(e.numberOfImages, ' makes', 's make') +
            ' X accessible to people with disabilities, and everyone who wants more context.'
          )
        }),
        a('cc6d0a48', 'You can turn off this reminder in Accessibility Settings.'),
        a('j499fbcb', function (e) {
          return 'Add description' + n(e.numberOfImages, '', 's')
        }),
        a('bb8170da', 'Not this time'),
        a('h4dd544e', 'Your post was sent.'),
        a('ice925ce', 'Your post has been edited.'),
        a('eae9e604', 'Your post was sent. You have 30 minutes to make any edits.'),
        a('gcdf3fd6', 'Your post was sent. You have 1 hour to make any edits.'),
        a('c7999d10', 'Your posts were sent.'),
        a('g08523f0', 'Sending post ... once it’s published, you’ll have 30 minutes to make any edits.'),
        a('fa53f95c', 'Sending post ... once it’s published, you’ll have 1 hour to make any edits.'),
        a('a608b1b4', 'Discard post?'),
        a('j890123a', 'Discard thread?'),
        a('af4d0a80', 'Discard edits?'),
        a('bb01231c', 'This can’t be undone and you’ll lose your draft.'),
        a('if69307c', 'If you leave, your changes won’t be saved.'),
        a('d4ab68e2', 'Discard'),
        a('d2c271f6', 'Save post?'),
        a('abb90544', 'You can save this to send later from your drafts.'),
        a('d3bb6f30', 'Note: accounts tagged in media will not be saved in the draft.'),
        a('bf9b89e4', 'Your draft was saved.'),
        a('i63bfbf0', 'Hold that thought'),
        a(
          'a6c55352',
          'We are still uploading your video. Are you sure you want to discard your post? Your draft and attachments will be lost.',
        ),
        a('c3d89aca', 'Continue'),
        a('b983f9e0', 'Heads up'),
        a('ed5c4342', 'A couple things to keep in mind ...'),
        a('abc4afcc', 'Your edit time expired'),
        a('a9a471fa', 'Posts can only be edited within the first 30 minutes after they’re published.'),
        a('a3483f1c', 'Posts can only be edited within the first 1 hour after they’re published.'),
        a('g4bcc5f4', 'This is your last edit'),
        a('g922bf14', 'Your post can’t be updated again.'),
        a('f58b5009', function (e) {
          return 'Your post will be sent on ' + e.scheduleDate + ' at ' + e.scheduleTime
        }),
        a('fa97f508', 'You can add more posts to this thread after sending these.'),
        a('c091760c', 'This edit wasn’t saved. You can try your update again, or discard it and start over.'),
        a('ib067d6a', 'Please choose either 1 GIF or up to 4 photos.'),
        a('dd6734c2', 'Read more'),
        a('g589c2e2', 'Choice 1'),
        a('a1e6c3a2', 'Choice 2'),
        a('a739e006', 'Choice 3 (optional)'),
        a('d89a5b92', 'Choice 4 (optional)'),
        a('c2a8118e', 'Remove poll'),
        a('a8ede1de', 'Add a choice'),
        a('caf8edc4', 'Poll length'),
        a('g93586be', 'Days'),
        a('d073b644', 'Hours'),
        a('a2f0728e', 'Minutes'),
        a('ce9a9736', 'Saving...'),
        a('d4d68e44', 'Saved'),
        a('f0afcc0e', 'Add poll'),
        a('d39e3e78', 'Schedule post'),
        a('f6bab0da', 'Post text'),
        a('cc2b28fc', 'You can only have 1 type of attachment'),
        a('i6f7062c', 'Add post'),
        a('j1d5791c', 'Add Reply'),
        a('e76f3776', 'Remove post'),
        a('ec10ee02', 'Poll'),
        a('c4ccfbe2', 'Tag Location'),
        a('b7d8e3f1', function (e) {
          return e.numberOfAltTextEntries + ' image description' + n(e.numberOfAltTextEntries, '', 's')
        }),
        a('d1175c78', 'Tag people'),
        a('bf4e9d7a', 'Upload caption file (.srt)'),
        a('e0342f98', 'Captions'),
        a('f8e5bf52', 'What is happening?!'),
        a('fbd24526', 'Add another Reply'),
        a('de4669e2', 'Add a comment'),
        a('ed1f39ec', 'Post your reply'),
        a('a402b908', 'Ask a question'),
        a('e815fc34', 'Choose audience'),
        a('cf44066a', 'Circle'),
        a('a68885de', 'All Followers'),
        a('a5f7b700', function (e) {
          return '' + e.formattedCount
        }),
        a('a7daec1e', function (e) {
          return 'Pe' + n(e.count, 'rson', 'ople')
        }),
        a('f0598964', 'Want to share with a smaller crowd?'),
        a('e1ae1c0a', 'Circle lets you send posts to only the people you choose.'),
        a('eb969e30', 'How Circle Works'),
        a('bb55e8ee', 'Add your people'),
        a('f1aedb7c', 'You can choose up to 150 of them to include in your Circle.'),
        a('b659fba8', 'Post to only them'),
        a('c474be66', 'Go on - share those thoughts. Only your Circle can see and reply to them.'),
        a('h031847a', 'Change things up anytime'),
        a('bd9db21f', 'Learn more'),
        a('gfca5254', 'Rules'),
        a('f510c8b2', 'Community Rules'),
        a('g46f363e', 'Check the Community rules before joining the conversation'),
        a('f6fec9f6', 'Remove card preview'),
        a('eabf2209', function (e) {
          return 'GIF provided by ' + e.providerName
        }),
        a('a613e720', 'Copy link to GIF'),
        a('b2df0574', 'Also share with followers'),
        a('ccfc7453', function (e) {
          return 'Everyone in @' + e.screenName + '`s Circle who follows you can reply'
        }),
        a('d4d17205', function (e) {
          return 'Everyone in @' + e.screenName + '`s Circle can reply'
        }),
        a('df961844', 'Only your Circle who follows you can reply'),
        a('ce958ec8', 'Only your Circle can reply'),
        a('c7df589e', 'Everyone in the post author`s Circle who follows you can reply'),
        a('j65d7c72', 'Everyone in the post author`s Circle can reply'),
        a('i8ea6d4e', 'Everyone can reply'),
        a('a176d0d8', 'Accounts you follow can reply'),
        a('gc7e52ca', 'Only accounts you mention can reply'),
        a('i13be5a0', 'Community members can reply'),
        a('ebe1d850', 'Only your Subscribers can reply'),
        a('b121464a', 'Only Verified accounts can reply'),
        a('aa65a44a', 'We’ll remember your choice on this device'),
        a('d4a4842e', 'Add emoji'),
        a('fec16c1c', 'Emoji')
      a('a4993fa2', 'Add a GIF'),
        a('i0db46e6', 'GIF'),
        a('aeca1239', function (e) {
          return 'Bold' + e.ttc_rich_text_composer
        }),
        a('i7dc66dd', function (e) {
          return 'Italic' + e.ttc_rich_text_composer
        }),
        a('ad89b831', function (e) {
          return 'active' + e.ttc_rich_text_composer
        }),
        a('bfb895b1', function (e) {
          return 'Will send on ' + e.date + ' at ' + e.time
        }),
        a('fd48249b', function (e) {
          return e.count + ' people'
        }),
        a('b93ba92d', function (e) {
          return e.peopleCount + ' pe' + n(e.peopleCount, 'rson', 'ople')
        }),
        a('ae2205d2', 'You follow each other'),
        a('fd06b02f', function (e) {
          return '@' + e.screenName + ' is currently in an active Space, Click to join via their Profile'
        }),
        a('f2b3fe06', 'Loading results'),
        a('fc9dd578', 'Search people'),
        a('gdb7bc25', function (e) {
          return e.name + ' - select to remove'
        }),
        a('f065ba8c', 'Search query'),
        a('hbc99b03', function (e) {
          return 'Go to @' + e.screenName
        }),
        a('a2c1b222', 'Try searching for people, lists, or keywords'),
        a('f45c4250', 'Clear all recent searches?'),
        a('caae4dda', 'This can’t be undone and you’ll remove all your recent searches.'),
        a('dbd5d400', 'Clear'),
        a('a8d68f62', 'Recent'),
        a('c6530778', 'Saved searches'),
        a('e047b8fa', 'Clear all'),
        a('hffea05c', 'Delete saved search?'),
        a('j037e374', 'This can’t be undone and you’ll lose your saved search.'),
        a('bb97037a', 'Upgrade to Premium to write longer posts and apply formatting such as bold and italics..'),
        a('ec517230', 'Upgrade to Premium to write longer posts and Articles.'),
        a('hb36f723', function (e) {
          return 'Only the first ' + e.count + ' characters will be visible on the timeline.'
        }),
        a('d759c09e', 'Try out'),
        a('f13bb672', 'Subscribe to Premium'),
        a('e4472565', function (e) {
          return 'Uploaded (' + e.percent + '%)'
        }),
        a('a06fa8fd', function (e) {
          return 'Processing (' + e.percent + '%)'
        }),
        a('h7f340e5', function (e) {
          return 'Uploading (' + e.percent + '%)'
        }),
        a(
          'ee016dd6',
          'It will take a while to upload long videos. Make sure to keep your browser tab open to avoid upload interruptions.',
        ),
        a('daad8822', 'Upload Failed'),
        a('i8ff6261', function (e) {
          return (
            'Looks like this video exceeds the maximum file size that can be uploaded (' +
            e.human_readable_max_size +
            'GB).'
          )
        }),
        a('cba4fdde', 'Deliver in 1080p to viewers on X'),
        a('ef8f5d90', 'Recommended'),
        a('a7046fb0', 'Rarely needed'),
        a('acf3ecf4', 'Add media'),
        a('bdbcdd94', 'Add photos'),
        a('f2c8c04d', 'make your posts public'),
        a('b50e199a', function (e) {
          return '' + e.userName
        }),
        a('c3033e8a', function (e) {
          return e.replyUserName + ' and ' + e.otherUserName
        }),
        a('e50dae2a', function (e) {
          return e.userOneName + ' ' + e.userTwoName + ' and ' + e.userThreeName
        }),
        a('h758cd23', function (e) {
          return e.userOneName + ' ' + e.userTwoName + ' and ' + n(e.othersCount, '1 other', e.othersCount + ' others')
        }),
        a('fba61ad6', function (e) {
          return '' + e.userName
        }),
        a('ce87c872', function (e) {
          return e.replyUserName + ' and ' + e.otherUserName
        }),
        a('b45fa506', function (e) {
          return e.userOneName + ' ' + e.userTwoName + ' and ' + e.userThreeName
        }),
        a('b8168f25', function (e) {
          return e.userOneName + ' ' + e.userTwoName + ' and ' + n(e.othersCount, '1 other', e.othersCount + ' others')
        }),
        a('ab67a7ac', function (e) {
          return '' + e.userName
        }),
        a('g571ef41', 'Subscribers'),
        a('d48d6476', function (e) {
          return e.replyUserName + ' and ' + e.otherUserName
        }),
        a('i9451241', 'Subscribers'),
        a('hdf48104', function (e) {
          return e.userOneName + ' ' + e.userTwoName + ' and ' + e.userThreeName
        }),
        a('dcbb6a0b', 'Subscribers'),
        a('ba74e38b', function (e) {
          return e.userOneName + ' ' + e.userTwoName + ' and ' + n(e.othersCount, '1 other', e.othersCount + ' others')
        }),
        a('c65916af', 'Subscribers'),
        a('g5c5ebb8', function (e) {
          return '' + e.userName
        }),
        a('b86ff336', function (e) {
          return '' + e.userName
        }),
        a('e0af5609', function (e) {
          return e.userOneName + ' and ' + e.userTwoName
        }),
        a('ae834d19', function (e) {
          return e.trustedFriendsTweetOwner + '’s'
        }),
        a('g3d6f043', function (e) {
          return e.userOneName + ' and ' + e.userTwoName
        }),
        a('ade845a5', function (e) {
          return e.trustedFriendsTweetOwner + '’s'
        }),
        a('ef5386dc', function (e) {
          return e.userOneName + ' ' + e.userTwoName + ' and ' + e.userThreeName
        }),
        a('acd17e4b', function (e) {
          return e.trustedFriendsTweetOwner + '’s'
        }),
        a('g1ee3d90', function (e) {
          return e.userOneName + ' ' + e.userTwoName + ' and ' + e.userThreeName
        }),
        a('f6da070f', function (e) {
          return e.trustedFriendsTweetOwner + '’s'
        }),
        a('a035ba65', function (e) {
          return e.userOneName + ' ' + e.userTwoName + ' and ' + n(e.othersCount, '1 other', e.othersCount + ' others')
        }),
        a('e4c52c45', function (e) {
          return e.trustedFriendsTweetOwner + '’s'
        }),
        a('baf2c639', function (e) {
          return e.userOneName + ' ' + e.userTwoName + ' and ' + n(e.othersCount, '1 other', e.othersCount + ' others')
        }),
        a('j8e134e5', function (e) {
          return e.trustedFriendsTweetOwner + '’s'
        }),
        a('f11264ac', 'Add payment method'),
        a('j619ec94', 'Promote post'),
        a('h1fcb36c', 'Promote your post'),
        a('fd22cfe0', 'Ads Terms and Conditions.'),
        a('i3656b52', 'How much do you want to spend?'),
        a('h7c29de6', 'Estimated reach'),
        a('hd435bf1', function (e) {
          return e.audienceLow + ' - ' + e.audienceHigh + ' people'
        }),
        a('i976aff4', 'Update daily budget info to match your billing currency.'),
        a('e1e912f2', 'Your post was posted, but we were unable to run the Boost on it. You will not be charged.'),
        a('fe26420a', 'Add keywords'),
        a('c14cdb18', 'Promote'),
        a('aacfbe55', function (e) {
          return 'You’re posting for @' + e.screenName + '.'
        }),
        a('ga8627cd', function (e) {
          return 'You’re replying for @' + e.screenName + '.'
        }),
        a('e6d2573f', function (e) {
          return 'You’re messaging for @' + e.screenName + '.'
        }),
        a('d37a3e15', function (e) {
          return 'You’re creating this List for @' + e.screenName + '.'
        }),
        a('ceb1ad26', 'Introducing Downloadable Videos'),
        a(
          'ea97bc08',
          'Go offline, or go remix! Premium users now have the power to download and reimagine your content. If you’d rather your videos weren’t downloadable, tap “Edit” on your video. Your content, your rules.',
        ),
        a(
          'haebcf52',
          'People can’t mention you again in this conversation and you won’t receive further notifications.',
        ),
        a('g0b48670', 'This conversation has too many replies to show them all.'),
        a('d9b417c4', 'Set as not interested'),
        a('c29d6806', 'Stop recommending'),
        a('ge8f3043', function (e) {
          return 'Follow ' + e.topicName + ' Topic'
        }),
        a('aa576cbf', function (e) {
          return 'Unfollow ' + e.topicName + ' Topic'
        }),
        a('i77347d1', function (e) {
          return 'Dismiss ' + e.topicName + ' Topic'
        }),
        a('d69b2d90', 'You’re not interested in this Topic.'),
        a('i2e0d584', 'Promoted Post'),
        a('g034e6f1', function (e) {
          return 'You can only attach up to ' + e.count + ' posts to this report.'
        }),
        a('je808a17', function (e) {
          return e.topicName + ' Topic'
        }),
        a('adad5408', 'New folder'),
        a('f44ddd2e', 'Bookmark posts to save them for later'),
        a('c91d2c4c', 'Need more time to write a clever response or just want to save a post for later? Bookmark it!'),
        a('j45c642e', 'Folders aren’t loading right now'),
        a('b87ca51a', 'Remove photo'),
        a('eebff22c', 'Crop photo'),
        a('a50ba822', 'Search for GIFs'),
        a('c6f5ac52', 'Categories — GIF Search'),
        a('ab468379', function (e) {
          return e.query + ' — GIF Search'
        }),
        a('j7fc4f9c', 'Auto-play GIFs'),
        a('a66b7760', 'Unlabeled GIF'),
        a('a723aefa', 'No GIFs found'),
        a('a6ecfa0a', 'Try searching for something else instead.'),
        a('f5ff0d6f', function (e) {
          return e.category + ' — GIF Search'
        }),
        a('da8ac57c', 'Edit Caption'),
        a('e8a12604', 'Provide a caption (optional)'),
        a('a8fdd09c', 'Publish Article'),
        a('d8047cc8', 'Publish'),
        a(
          'ff7ddca2',
          'Your Article will appear as a post once you publish. Also, find it under the Articles tab on your profile.',
        ),
        a('ef34d7be', 'Audience and reply controls are not editable after an article has been published.'),
        a('e52d4998', 'Choose your audience'),
        a('d52a1caa', 'Subscribers'),
        a('hff1b97a', 'Only Subscribed can reply.'),
        a('a330771e', 'Copy link to your clipboard'),
        a('b6510e68', 'Copy your Article’s URL so you can share it.'),
        a('e4a6e006', 'Something went wrong. Please try again.'),
        a('eff483e0', 'After you publish, get a link to share the Article.'),
        a('ca15dd4e', 'Draft'),
        a('bb40bf66', 'Published'),
        a('h107935c', 'Last saved just now'),
        a('a753a870', 'Apply'),
        a('afccc67e', 'Copy link to Article'),
        a('beb24e9e', 'URL copied to the clipboard'),
        a('db9cc928', 'Delete Article?'),
        a('c4e28ba6', 'This can’t be undone and you’ll lose your Article.'),
        a(
          'ff2982d0',
          'Your Article will be deleted. This can’t be undone and it will be removed from your profile, the timeline of any accounts that follow you, and from search results.',
        ),
        a('ca17beec', 'Your Article was deleted'),
        a('f5cbb31c', 'Delete Article'),
        a('f0977f52', 'Yes, delete'),
        a('db419d4c', 'Preview your draft'),
        a('a1bc8e6c', 'View Article'),
        a('f558d2e0', 'Unpublish, move to drafts'),
        a('e9473589', function (e) {
          return '' + e.articleTitle
        }),
        a('dd63549e', 'Success! Your Article has been published'),
        a('a4d128bc', 'Success! Your Article has been published and the link copied to your clipboard'),
        a('b4071e18', 'Article Title'),
        a('f586b7fa', 'Add a title'),
        a('ab0fa9ba', 'To edit, return to drafts'),
        a('c5f35c98', 'Uploading media...'),
        a('d739d83e', 'Cancel upload'),
        a('a94efeda', 'Saving media...'),
        a('gd79d45a', 'Stay focused on your writing by turning on focus mode'),
        a('g1866bb2', 'Return to the regular editor by exiting focus mode'),
        a('a6a78df4', 'Your Article needs a title and content before publishing.'),
        a('ia656f1c', 'Your Article has a title, but needs content before publishing.'),
        a('d3855e36', 'Your Article needs a title before publishing.'),
        a('f325958e', 'Your title is over the character limit. Shorten it, then publish.'),
        a('ie5d9064', 'Your Article is over the character limit. Shorten the body text, then publish.'),
        a(
          'e03487a0',
          'Your title is over the character limit, and your Article is over the word count. Shorten both, then publish.',
        ),
        a(
          'e938d562',
          'Your title is over the character limit. Shorten the title, add something to the body, and then publish.',
        ),
        a(
          'e449c546',
          'Your Article needs a title, and your Article is over the word count. Add a title, shorten the body text, and then publish.',
        ),
        a('bd00e836', 'Your latest draft is not saved because it exceeds the character limit.'),
        a('ic110f68', 'Your latest draft is not saved because it is too long.'),
        a('b384f696', 'We recommend a title between 50-70 characters'),
        a('a7da0adb', function (e) {
          return e.count + ' word' + n(e.count, '', 's')
        }),
        a('aea1d455', function (e) {
          return e.count + ' minute' + n(e.count, '', 's')
        }),
        a('df898d71', function (e) {
          return e.readingTimeValue + ' reading time'
        }),
        a(
          'i9aadf4a',
          'This link may be incorrect. Click on one of your Articles from the left sidebar to read, edit, or publish a Article.',
        ),
        a('hfdce46e', 'Your Article has been unpublished'),
        a('df079228', 'Focus mode'),
        a('f965e890', 'Your drafts live here'),
        a('c2756718', 'Your published Articles live here'),
        a('gd11f228', '(Needs title)'),
        a('af65c854', 'Edit in focus mode'),
        a('e05e2336', 'Unpublish, move Article to drafts'),
        a('d36447e0', 'This is where you write'),
        a('ca0ed982', 'Continue a draft or create a new Article'),
        a('ee9e42aa', 'Write'),
        a('e9a50596', 'There was an error creating a new draft'),
        a('e070024a', 'Edit photo'),
        a('i7d24b36', 'Next image'),
        a('f96a38a2', 'Previous image'),
        a('hac7c548', 'Crop media'),
        a('e3dbfba4', 'Edit image description'),
        a('dd4a83a6', 'Content warning'),
        a('ffe9ec3a', 'Add descriptions'),
        a(
          'j063b262',
          'You can add a description, sometimes called alt-text, to your photos so they’re accessible to even more people, including people who are blind or have low vision. Good descriptions are concise, but present what’s in your photos accurately enough to understand their context.',
        ),
        a('e57144f0', 'Sure'),
        a('feabf2a0', 'Alt text'),
        a('e36287c6', 'Description'),
        a('cf565d08', 'What is alt text?'),
        a('d9f7b32a', 'Put a content warning on this post'),
        a(
          'ead1b80a',
          'Select a category, and we’ll put a content warning on this post. This helps people avoid content they don’t want to see.',
        ),
        a('faf745fa', 'Nudity'),
        a('h2437f26', 'Sensitive'),
        a('g5e1668a', 'Able to be downloaded'),
        a('fdc6a52a', 'When enabled, your video will be available to be downloaded.'),
        a('fe09fde2', 'Change settings'),
        a('cd5cba97', function (e) {
          return 'Content warning: ' + e.formattedWarningList
        }),
        a('h7215a76', 'The post author flagged this post as showing sensitive content.'),
        a('f1d9930c', 'Hide'),
        a('c91f83ae', 'Edit video'),
        a('icbec4ae', 'Upload captions'),
        a('e7048e74', 'Trim media'),
        a(
          'j435467e',
          'Subtitles and captions can be added to your video by uploading a valid subtitle file. Files must be in the SRT format. Subtitles and captions will be unaffected by video edits.',
        ),
        a('a6b267fa', 'Remove captions'),
        a('i31dcd22', 'Article'),
        a('aa148de0', 'Subscribe to unlock new features and if eligible, receive a share of ads revenue.'),
        a(
          'aaa702a2',
          'Enjoy additional benefits like no ads in your For You and Following timelines and largest reply prioritization.',
        ),
        a('b7fb8c5e', 'Spend $1k, Get $1k'),
        a('ca559b70', 'Subscribe now'),
        a('b6de83a0', 'Employees only Space'),
        a('g3f251f2', 'Private Broadcast'),
        a('d08666ba', 'Private Space'),
        a('eadb5a46', 'Be the first to join'),
        a('f9629a8f', function (e) {
          return e.hostName + '’s Broadcast'
        }),
        a('ia3c0ab7', function (e) {
          return e.hostName + '’s Space'
        }),
        a('hd552761', function (e) {
          return 'Hosted by ' + e.hostName
        }),
        a('c3ea19a5', function (e) {
          return e.index + ' of ' + e.total
        }),
        a('a5235305', function (e) {
          return e.listOfPeople + ' joined'
        }),
        a('df9f8243', function (e) {
          return e.name + ' is listening'
        }),
        a('g2445c2f', function (e) {
          return e.name + ' is speaking'
        }),
        a('fcfd5a67', function (e) {
          return e.name + ' is hosting'
        }),
        a('f7882829', function (e) {
          return e.name + ' is co-hosting'
        }),
        a('d961a4a0', 'Live on X'),
        a('b8e930fe', 'Trending now'),
        a('ae05f268', 'Trends are unavailable.'),
        a('c6b51af8', 'New to X?'),
        a('ie8e1ffc', 'Sign up now to get your own personalized timeline!'),
        a('fd6473fa', 'Loading recommendations for users to follow'),
        a('a526aa66', 'Who to follow'),
        a('ef625010', 'You might like'),
        a('f5b426c2', 'Loading Users'),
        a('b7388a56', 'Footer'),
        a('hdabc3fc', 'Terms of Service'),
        a('bc6efc72', 'Privacy Policy'),
        a('h3161192', 'Cookie Policy'),
        a('a7de64de', 'Ads info'),
        a('jb0a4c36', 'Blog'),
        a('cf3709da', 'Status'),
        a('ce6d095a', 'Careers'),
        a('e0adec82', 'Brand Resources'),
        a('a4cf866e', 'Advertising'),
        a('df1b7550', 'Marketing'),
        a('he258678', 'X for Business'),
        a('c6f58084', 'Developers'),
        a('d83f18d2', 'Directory'),
        a('efe6ef9e', 'View post'),
        a('b3d183ce', 'Post with replies'),
        a('c299a6c0', 'Thread'),
        a('h3d5d79e', 'Community post'),
        a('cfe877ca', 'Choose who to follow'),
        a('e06b864c', 'It looks like you’re enjoying this conversation'),
        a(
          'a078ff70',
          'Want to see some more content from the people you interacted with in this thread? Start exploring content from new accounts.',
        ),
        a('af9c8a3e', 'Open app'),
        a('cb80300e', 'Skip to home timeline'),
        a('ea5cd098', 'Skip to trending'),
        a('c67e3fc2', 'Home timeline'),
        a('edf7bc2e', 'Trending'),
        a('b2311b70', 'This is not available to you'),
        a('j88f27d8', 'Relevant people'),
        a('cce3f116', 'Post added to your Bookmarks'),
        a('b593b396', 'Post removed from your Bookmarks'),
        a('ef483238', 'Post status page'),
        a('d6d9aab6', 'Add Bookmark'),
        a('bb89cf46', 'Remove Bookmark'),
        a('a739d4ba', 'Add to Bookmark Folder'),
        a('d5270434', 'Exit'),
        a('jcf3ff56', 'Large Text'),
        a('f1252ac8', 'Medium Text'),
        a('daa0da04', 'Small Text'),
        a('ba5256b2', 'Text Size'),
        a('e3de2f6f', function (e) {
          return e.entity + ' was added to your Bookmarks'
        }),
        a('e64de8a9', function (e) {
          return e.entity + ' was removed from your Bookmarks'
        }),
        a('a4d3eb67', function (e) {
          return e.fullName + ' on X: "' + e.tweetText + '"'
        }),
        a('a609edbe', 'Compose new post'),
        a('df12a438', 'Posting within a Community'),
        a(
          'a516ab36',
          'While Communities are public and can be seen by anyone, this post will only be shared with others in the Community — not your followers.',
        ),
        a('e6042757', function (e) {
          return (
            e.minutes +
            ' minute' +
            n(e.minutes, '', 's') +
            ' and ' +
            e.seconds +
            ' second' +
            n(e.seconds, '', 's') +
            ' remaining to edit post'
          )
        }),
        a('a4e39717', function (e) {
          return e.minutes + ' minute' + n(e.minutes, '', 's') + ' remaining to edit post'
        }),
        a('c55eed72', 'Replying to'),
        a('caca3102', 'Others in this conversation'),
        a('c6a6dc2f', function (e) {
          return 'You’ve blocked @' + e.screenName + ', so they won’t get notified when you reply.'
        }),
        a('c20dc654', 'Only 10 people can be tagged.'),
        a('ae0831ab', function (e) {
          return '@' + e.screenName + ' can’t be tagged in photos'
        }),
        a('cca7fa72', 'Scheduled post could not be deleted.'),
        a('c5dd0190', 'Time'),
        a('edeff232', 'Date'),
        a('fddf24b4', 'Time zone'),
        a('d39dc06e', 'You can’t schedule a post to send in the past.'),
        a('d024efe2', 'You can’t schedule a post more than 18 months in the future.'),
        a('d15af6da', 'Some unsent posts could not be deleted.'),
        a('a1e1b748', 'Your selected unsent posts were deleted.'),
        a('ce80fba0', 'Loading unsent posts'),
        a('i5d56b62', 'Not ready to post just yet? Save it to your drafts or schedule it for later.'),
        a('aef6257e', 'Deleting unsent posts'),
        a('dce0bc34', 'Unsent posts'),
        a('f8464692', 'Scheduled'),
        a('e8bd47f2', 'Select all'),
        a('j2b145d4', 'Deselect all'),
        a('h6c79ac2', 'Discard unsent posts'),
        a('d0a4a03c', 'This can’t be undone and you’ll lose your unsent posts.'),
        a('f9f69d32', 'Failed to send'),
        a('j74e5dd4', 'The post you’re trying to reply to has been deleted'),
        a('c5ceafc8', 'Replying'),
        a('b321d0cc', 'Load images'),
        a('abd649ce', 'Discard unsent post'),
        a('c7d42978', 'This can’t be undone and you’ll lose your draft post.'),
        a('e43a5528', 'Something went wrong, and the unsent post wasn’t deleted.'),
        a('e7c766ee', 'Location services are disabled'),
        a('ab68727a', 'You can turn them on in your device’s settings.'),
        a('ae4057a2', 'Unable to determine location'),
        a('bf2923a6', 'Check your device’s settings.'),
        a('d963d1b6', 'No places were found'),
        a('a893d602', 'Ok'),
        a('be6cc44e', 'Search locations'),
        a('d8ef3232', 'Failed to fetch locations'),
        a('cce30dcc', 'Tag location'),
        a('b01ed2db', function (e) {
          return e.distance + ' mi'
        }),
        a('i83e29e1', function (e) {
          return e.distance + ' ft'
        }),
        a('d4b7cff7', function (e) {
          return e.distance + ' km'
        }),
        a('b211849f', function (e) {
          return e.distance + ' m'
        }),
        a('ced3c85a', 'Edited'),
        a('b375ece0', 'Only you can view this unpublished Article.'),
        a('edf9101f', 'Keep reading'),
        a('aaad27c8', 'Author'),
        a('eb748f7e', 'View post analytics'),
        a('b7cff250', function (e) {
          return '' + e.displayCoins
        }),
        a('g62dcfbc', function (e) {
          return 'Coin' + n(e.count, '', 's')
        }),
        a('cc199dc0', 'Your post is being boosted'),
        a('g6237a1e', 'Promotion running'),
        a('d6b5949e', 'Promotion paused'),
        a('ffd9cfe6', 'See more'),
        a('d172116a', 'Discover more'),
        a('be5df69e', 'More posts'),
        a('g11ebd34', 'More suggestions'),
        a('g4a6901a', 'Browse'),
        a('h6453e74', 'Browse posts'),
        a('je506a60', 'Change username'),
        a(
          'c0fcb08a',
          'Changing your username will result in your checkmark and affiliations being temporarily removed until they are reviewed.',
        ),
        a('d1f6d336', 'Username'),
        a('de65c756', 'Suggestions'),
        a('ebeeac1a', 'Change email'),
        a('dc013356', 'Current'),
        a('ea28c7ce', 'Loading email settings'),
        a('f3f66252', 'Add email address'),
        a('i5107de4', 'Update email address'),
        a('d19fd42a', 'Resend confirmation email'),
        a('g4da3246', 'Email sent. Please check your inbox shortly for a confirmation link.'),
        a('h021352f', function (e) {
          return '' + e.resendConfirmationLabel
        }),
        a('d241169c', 'Current password'),
        a('a9bc3044', 'New password'),
        a('b8c03cfc', 'Confirm password'),
        a('b731d32c', 'Your password has been successfully updated.'),
        a('d555d7e0', 'New password cannot be the same as your existing password.'),
        a('fa8af9ae', 'Passwords do not match.'),
        a('a03f5c73', function (e) {
          return e.applicationCount + ' application' + n(e.applicationCount, '', 's')
        }),
        a('j25601d9', 'Learn more'),
        a('cb841d56', 'Change phone'),
        a('ce37ea44', 'Add phone number'),
        a('ibaf239e', 'Update phone number'),
        a('j2636558', 'Delete phone number'),
        a('e49b16d4', 'Delete phone number?'),
        a(
          'i931719e',
          'This will remove this number from your account, and you will no longer be able to receive notifications or login codes to it.',
        ),
        a('j841d1f4', 'Phone removed.'),
        a(
          'fe8b565a',
          'This deletes the phone number from this account, and you’ll no longer receive notifications as text messages from X. Additionally, this turns off two-factor authentication on this account.',
        ),
        a(
          'hf45b8d4',
          'This deletes the phone number from this account, and you’ll no longer receive notifications as text messages from X. Additionally, this turns off text message as a two-factor authentication method on this account.',
        ),
        a('bc262c2e', 'Additional methods'),
        a('hc1a91da', 'Backup codes'),
        a(
          'e4fed8f0',
          'Get single-use backup codes so you can log in to X if you don’t have access to your two-factor authentication options.',
        ),
        a('b39c7b14', 'Disable login verification?'),
        a(
          'a923fce6',
          'Turning off two-factor authentication means your account may be more vulnerable to compromise. Are you sure you want to turn it off?',
        ),
        a('ff781e0a', 'Turn this off?'),
        a('c557ac30', 'Are you sure you want to turn off this method?'),
        a(
          'd133464a',
          'Turning this off removes this two-factor authentication method from your account. Are you sure you want to turn it off?',
        ),
        a('ee3a7bfa', 'Turn off'),
        a('aa9139cc', 'Verify login requests'),
        a(
          'jc22dd42',
          'After you log in, X will send a push notification to the X app that you’ll need to approve to access your account.',
        ),
        a('a219e218', 'OK'),
        a(
          'e0d79de8',
          'You have just one security key linked to your account. To make sure you don’t get locked out if you lose it, add another key, and save a two-factor authentication backup code.',
        ),
        a('ja6bbfa0', 'Loading login verification data'),
        a('c2570922', 'Text message'),
        a(
          'fba9483c',
          'Use your mobile phone to receive a text message with an authentication code to enter when you log in to X.',
        ),
        a('ab61b41a', 'Authentication app'),
        a(
          'a67c7d68',
          'Use a mobile authentication app to get a verification code to enter every time you log in to X.',
        ),
        a('h6d0d89c', 'Security key'),
        a(
          'b5d869a2',
          'Use a physical security key that inserts into your computer or syncs to your mobile device when you log in to x.com using a supported web browser. Currently, you can’t use a security key to log in to the X app.',
        ),
        a(
          'b3e5c946',
          'Use a security key that inserts into your computer or syncs to your mobile device when you log in to X. You’ll need to use a supported mobile device or web browser.',
        ),
        a('cd195528', 'Add new security key'),
        a('a1860ee8', 'Temporary password'),
        a('j45a2856', 'Create a one-time temporary password to use with third-party services.'),
        a('d8612d9c', 'Turn on Text message or Authentication app first'),
        a(
          'e13d4468',
          'Before you can set up a security key, you need to first turn on either Text message or Authentication app as one of your two-factor authentication methods.',
        ),
        a('c1d96d6a', 'You’ve added the maximum number of keys'),
        a('gf91694e', 'You’ll need to delete a key before adding another.'),
        a('j265ddb6', 'Confirm your email'),
        a(
          'a7cfdf1c',
          'To turn on two-factor authentication, you need to associate an email address with this X account and then confirm it, so we know it’s really yours.',
        ),
        a(
          'd7bfde1a',
          'It looks like your account is currently suspended. You can’t turn on two-factor authentication while your account is suspended.',
        ),
        a('g268fbb8', 'This account is ID verified.'),
        a('dc5575ac', 'Want to have an ID verified label in your profile?'),
        a('c8255462', 'Hide your ID verified label'),
        a(
          'c6e731ee',
          'Hide your ID verified label so people won’t see it when tapping the blue checkmark on your profile page.',
        ),
        a(
          'be582166',
          'ID verification can help protect your account against impersonation and grants your profile an ID verified label.',
        ),
        a(
          'b496bc94',
          'We are reviewing your government-issued ID. We will keep you posted through notifications!\n\nOnce approved, you will receive an ID verified label on your profile so people know your account is ID verified.',
        ),
        a('d8f5cce4', 'You have exceeded your verification request limit. Please wait 24 hours before trying again.'),
        a(
          'i8427a1e',
          'This account is not eligible for ID verification. Only individual Premium subscribers are currently eligible for ID verification.',
        ),
        a('h05c1f28', 'Verify your account by providing a government-issued ID. This usually takes about 5 minutes.'),
        a(
          'j8cfcc62',
          'I consent to X and Au10tix using images of my ID and my selfie, including extracted biometric data, to confirm my identity and for X’s related safety and security purposes, including preventing impersonation. Au10tix may store such data for up to 30 days.',
        ),
        a('c4930cb6', 'What you will need:'),
        a('ac7bb0fe', 'Prepare a government-issued ID'),
        a('c12ce69c', 'Check if your device’s camera is uncovered and working'),
        a('c5bfe94a', 'Be prepared to take a selfie and photos of your ID'),
        a('e5b7dd84', 'Start'),
        a('abfaa528', 'Skip'),
        a('deaf5b16', 'Retry'),
        a('g1a4a1b6', 'ID verification error'),
        a('e24305e4', 'Your identity verification session was stale or invalid, please try again.'),
        a('f7954a0c', 'Loading security keys data'),
        a('h69986c2', 'You can rename or delete your security keys.'),
        a('i5896ba2', 'Add another key'),
        a('a8ef2b64', 'Unnamed Security Key'),
        a('d4e220b4', 'Name'),
        a('g6d0f0b6', 'Manage security key'),
        a('b894f68a', 'Loading security key data'),
        a('g2601bb6', 'Rename key'),
        a('b464b726', 'Delete key'),
        a('a4101e1b', function (e) {
          return 'Date added: ' + e.securityKeyAddedDate
        }),
        a('i3bb3f78', 'Backup Code'),
        a('ec6a76e0', 'Generate a new code'),
        a('f2c3c31c', 'Copy code'),
        a('e8016b64', 'Loading backup code'),
        a('c4ca22bc', 'If you ever lose access to your device, you can use this code to verify your identity.'),
        a('f20ff69f', 'Learn more'),
        a('j2327f80', 'Temporary Password'),
        a('fbfeaf8e', 'Generate a new password'),
        a('h4a8bd12', 'Copy password'),
        a('g247dc1c', 'Loading temporary password'),
        a('h3a32f52', 'Use this temporary password (spaces optional) to log into X on apps and devices.'),
        a('d70fceac', 'This password will expire in one hour.'),
        a('j924d222', 'Change country'),
        a('e9310157', 'Learn more'),
        a(
          'bd5ac12e',
          'Select your preferred language for headlines, buttons, and other text from X on this account. This does not change the language of the content you see in your timeline.',
        ),
        a('cef33711', function (e) {
          return e.languageName + ' (beta)'
        }),
        a('b033248c', 'Discoverability'),
        a(
          'c69b4798',
          'Decide whether people who have your email address or phone number can find and connect with you on X.',
        ),
        a('eca117e6', 'Let people who have your email address find you on X'),
        a('acd36386', 'Let people who have your email address find and connect with you on X.'),
        a('gd8511ca', 'Let people who have your phone number find you on X'),
        a('eca935ec', 'Let people who have your phone number find and connect with you on X.'),
        a('ac77c66c', 'Contacts'),
        a('jadf483e', 'Manage contacts that you have imported from your mobile devices.'),
        a('b864be7a', 'Remove all contacts'),
        a('g5fa1090', 'Remove all contacts?'),
        a(
          'h3e420fc',
          'This removes any contacts you’ve previously uploaded and turns off syncing with X on all devices. Please be aware that this takes a little time, cannot be undone, and you may still notice some suggestions on X (based on your contacts) in the meantime.',
        ),
        a('ca24589e', 'No name'),
        a('d439b1c1', 'Learn more'),
        a('fe36fe10', 'Confirm your password'),
        a('hccd9dbe', 'Please enter your password in order to get this.'),
        a(
          'df1ddda4',
          'Location labels you’ve added to your posts will no longer be visible on X.com, X for iOS, and X for Android. These updates may take some time to go into effect.',
        ),
        a(
          'ed7fa034',
          'Your location services are not currently enabled on this device. You can turn them on in your device settings.',
        ),
        a('e80e4288', 'Remove all location information attached to your posts'),
        a('b0ee8ab6', 'Remove all location information attached to your posts?'),
        a('e23b2991', 'Learn more'),
        a('gd758534', 'Allow people to tag you in their photos and receive notifications when they do so.'),
        a('efa53424', 'Turn on Teams'),
        a('e698a274', 'Invite anyone to post from this account using the Teams feature.'),
        a('a2ffab26', 'Allow anyone to add you to their team'),
        a('h69bd4ee', 'Only allow people you follow to add you to their team'),
        a('ha8d0662', 'When this setting is on, you can invite anyone to post from this account using Teams.'),
        a('a90af44e', 'Hide sensitive content'),
        a('a25e2ec6', 'Remove blocked and muted accounts'),
        a('b827a058', 'Safe search settings updated.'),
        a('b27c9852', 'Something went wrong updating your safe search settings.'),
        a('j3402d7e', 'This prevents posts with potentially sensitive content from displaying in your search results.'),
        a('if05bca6', 'Use this to eliminate search results from accounts you’ve blocked or muted.'),
        a('bc7fd990', 'Loading trends settings'),
        a('e2f16650', 'Show content in this location'),
        a('e5e88f40', 'When this is on, you’ll see what’s happening around you right now.'),
        a('i4d54b0e', 'Trends for you'),
        a('df9f03c8', 'Personalize trends based on your location and who you follow.'),
        a('c6cf5c7e', 'You can personalize trends based on your location and who you follow.'),
        a('a55db872', 'Personalization'),
        a('h0b5152e', 'Change location'),
        a('dfeada5e', 'Explore locations'),
        a('ac854308', 'Policy'),
        a('d429c942', 'Trends U.S. Election Policy'),
        a('ede134f2', 'Select whether videos and GIFs should play automatically on this device.'),
        a('b3aab6d4', 'Locations'),
        a('e53e05e4', 'Loading locations'),
        a('d5c9174f', function (e) {
          return e.location + ', ' + e.country
        }),
        a('f8321d82', 'All'),
        a('cf67f6d6', 'Autoblocked'),
        a('eb233866', 'Imported'),
        a(
          'd23b0404',
          'When you block someone, they won’t be able to follow or message you, and you won’t see notifications from them.',
        ),
        a('e0a7e9bc', 'Block unwanted accounts'),
        a('ef731b14', 'Loading blocked accounts'),
        a('e554ba83', 'Learn more'),
        a('i2b9632e', 'Successfully unblocked.'),
        a('if594962', 'Blocked'),
        a('e59fafa2', 'When you activate Safety Mode, accounts that X automatically blocks will show up here.'),
        a('c0786022', 'Autoblocked accounts'),
        a(
          'g51a96de',
          'When you block someone, they won’t be able to follow or message you, and you won’t see notifications from them. You can import a list of accounts you want to block on X.',
        ),
        a(
          'j035733c',
          'You’re about to start the process of deactivating your X account. Your display name, @username, and public profile will no longer be viewable on X.com, X for iOS, or X for Android.',
        ),
        a(
          'jd5a17b8',
          'You can restore your X account if it was accidentally or wrongfully deactivated for up to 12 months after deactivation.',
        ),
        a(
          'j4a29d52',
          'You can restore your X account if it was accidentally or wrongfully deactivated for up to 30 days after deactivation.',
        ),
        a(
          'jc9eb5c0',
          'You can restore your X account if it was accidentally or wrongfully deactivated for some time after deactivation.',
        ),
        a('ea989810', 'Deactivate account'),
        a('f6e73faa', 'Deactivate'),
        a('c3743328', 'This will deactivate your account'),
        a('a20cd24e', 'What else you should know'),
        a('g8fb7f86', 'Reactivation period'),
        a('e93b0ae0', 'Complete your deactivation request by entering the password associated with your account.'),
        a('b8971cfa', '30 days'),
        a('ce0f88f6', '12 months'),
        a('fc025d1d', 'Learn more'),
        a('bb5e039c', 'settings'),
        a('j37efff6', 'change them'),
        a('ce5bfe12', 'your X data'),
        a('g7088266', 'Edit profile'),
        a('d9d293b8', 'Website'),
        a('a990900c', 'Bio'),
        a('cb469ff6', 'Name can’t be blank'),
        a('g511f468', 'Your avatar failed to update because some media didn’t upload'),
        a('ec3a116e', 'Your banner failed to update because some media didn’t upload.'),
        a('j94599ec', 'Add avatar photo'),
        a('df31d76a', 'Add banner photo'),
        a('c01a0e1a', 'Confirm date of birth?'),
        a('df2c469a', 'Switch to professional'),
        a('e1f76978', 'Edit professional profile'),
        a('e554f642', 'Discard changes?'),
        a('ic04a6f6', 'This can’t be undone and you’ll lose your changes.'),
        a(
          'addbe8e8',
          'Consider using a name without special characters so it’s accessible to even more people, including people who are blind or have low vision.',
        ),
        a('a46f80ab', function (e) {
          return 'Born ' + e.birthdate
        }),
        a('c7905f89', function (e) {
          return 'Born ' + e.year
        }),
        a('bfe8d1a2', 'Edit expanded bio'),
        a('e1ec926e', 'Create expanded bio'),
        a('c119dee8', 'Birth date'),
        a('bbf0afc8', 'Add your date of birth'),
        a('f98d367e', 'Edit date of birth?'),
        a(
          'd3f43300',
          'This can only be changed a few times. Make sure you enter the age of the person using the account.',
        ),
        a(
          'g10411f0',
          'This should be the date of birth of the person using the account. Even if you’re making an account for your business, event, or cat.',
        ),
        a('a0c5e370', 'Who sees this?'),
        a('i68fe54e', 'Month and day'),
        a('b4e729b6', 'Year'),
        a('f3bb1b48', 'Remove birth date?'),
        a('c9cb9972', 'This will remove it from your profile.'),
        a('a2bef112', 'Remove birth date'),
        a('c37622ec', 'Please enter a valid date'),
        a('f679d166', 'Your followers'),
        a('h99b6d08', 'Privacy Policy'),
        a('hce7a225', 'Learn more'),
        a('e9603d88', 'Display confirmed phone number mark'),
        a('ada99498', 'This mark will only be shown to others in your region.'),
        a('a765e936', 'Delete your expanded bio'),
        a('h367e724', 'Expanded Bio'),
        a(
          'ea5928d4',
          'You contain multitudes. So does your profile.\nAdd an expanded bio to tell people more about yourself.',
        ),
        a('h7ef9dc8', 'This can include:'),
        a('c04ba4b4', 'Things you’ve been working on and want to showcase'),
        a('d7666008', 'Your legendary pasta recipe'),
        a('cb24ee16', 'Work experience and career preferences'),
        a('a1c93d74', 'Looks like we’re having trouble saving your changes. Please try again later.'),
        a('c2333081', function (e) {
          return e.count + ' character' + n(e.count, '', 's')
        }),
        a('a9cc8f96', 'Max characters exceeded'),
        a('b956c04a', 'Are you sure you want to delete your expanded bio?'),
        a('ifb23caa', 'Deleting your expanded bio will remove it from your profile.'),
        a('a2b8c54c', 'Deleted'),
        a('j29ab120', 'Mute notifications from people:'),
        a('jdfc82f6', 'You don’t follow'),
        a('cfcda0e6', 'Who don’t follow you'),
        a('c75b9b2a', 'With a new account'),
        a('f39b9c9e', 'Who have a default profile photo'),
        a('d227f940', 'Who haven’t confirmed their email'),
        a('b210936e', 'Who haven’t confirmed their phone number'),
        a('ed0df10b', 'Learn more'),
        a('dcef34ac', 'Turn on'),
        a('a39f706e', 'Your browser does not support push notifications'),
        a(
          'h4f20d0e',
          'Get push notifications to find out what’s going on when you’re not on X. You can turn them off anytime.',
        ),
        a('cdce0394', 'This selection is for any account while you’re using it in this browser.'),
        a('b39bcae2', 'Turn on push notifications'),
        a(
          'b50f6144',
          'To receive notifications as they happen, turn on push notifications. You’ll also receive them when you’re not on X. Turn them off anytime.',
        ),
        a('fe11b3ea', 'Unsupported browser'),
        a('a1245d3a', 'It looks like your browser doesn’t support push notifications.'),
        a('f580c738', 'Turn on notifications?'),
        a('i951fbcc', 'To get notifications from X, you’ll need to allow them in your browser settings first.'),
        a(
          'ec7cb554',
          'When you turn on post notifications from people you follow, you’ll get push notifications about their posts or live videos.',
        ),
        a('b68050dc', 'View users'),
        a('af045060', 'Related to you and your posts'),
        a('cf378ff8', 'From X'),
        a('f823bbbe', 'For Verified Accounts only'),
        a('a40e37f2', 'Get emails to find out what’s going on when you’re not on X. You can turn them off anytime.'),
        a('e8eb54a0', 'Weekly reports for your account'),
        a('ib80b0f2', 'New notifications'),
        a('ba58e6b0', 'Posts emailed to you'),
        a('fae2c81a', 'Top posts and Stories'),
        a('f7b09bb4', 'Updates about the performance of your posts'),
        a('d3978554', 'News about X product and feature updates'),
        a('bdccb81c', 'Tips on getting more out of X'),
        a('c3d47fe6', 'Things you missed since you last logged into X'),
        a('af8caf3e', 'News about X on partner products and other third party services'),
        a('hc076ee4', 'Participation in X research surveys'),
        a('ddfe3776', 'Suggestions for recommended accounts'),
        a('d17ba8c2', 'Suggestions based on your recent follows'),
        a('bcf50a1a', 'Tips on X business products'),
        a('fcad1e2e', 'Daily'),
        a('h9e0dfde', 'Weekly'),
        a('e26d98ac', 'Periodically'),
        a('h0c94842', 'Be in the know'),
        a(
          'c460d332',
          'When you turn on post notifications for an account, you’ll know when they post, go Live, and host a Space.',
        ),
        a('a820d092', 'Loading Following'),
        a('ha45c9e4', 'Post Notifications'),
        a('bdbf8f4e', 'Enter word or phrase'),
        a('h43e2ea8', 'Muted word'),
        a('da8c0440', 'Mute from'),
        a('defb4aaa', 'From anyone'),
        a('e7d47b00', 'From people you don’t follow'),
        a('d9d6e10e', 'Duration'),
        a('gfa5008e', 'Extend mute time'),
        a('c5595dfe', 'Change mute time'),
        a('he6804e0', 'Until you unmute the word'),
        a('a268406c', '24 hours'),
        a('fc638aa2', '7 days'),
        a(
          'cc7bedfc',
          'You can change the amount of time this is muted. If you previously selected “Forever,” your changed time will start immediately.',
        ),
        a('d768049c', 'Add muted word'),
        a('c6203da8', 'Muted word options'),
        a('e3f0d3db', function (e) {
          return 'Muted "' + e.keyword + '"'
        }),
        a('h5746cf7', function (e) {
          return 'Updated "' + e.keyword + '"'
        }),
        a('d2693eb8', 'Please make sure your muted phrase is no longer than 140 characters.'),
        a('f8488024', 'This is a pretty common word, and shows up in lots of posts, but you can mute it if you want.'),
        a('deb4924d', 'Learn more'),
        a('aa09e528', 'Add muted words'),
        a('e506aa92', 'Add muted word or phrase'),
        a('cbd04965', function (e) {
          return 'Unmuted "' + e.keyword + '"'
        }),
        a('eb4e810a', 'Expired'),
        a('cabeb6c2', 'Forever'),
        a('f9bce916', 'Mute words'),
        a('gfe0ee3b', 'Learn more'),
        a('ba4aaa9e', 'Unmute phrase?'),
        a('f837ed7e', 'This phrase will now be allowed in your notifications and Home timeline.'),
        a('a6194d10', 'Loading muted accounts'),
        a(
          'bcf6ad9a',
          'Posts from muted accounts won’t show up in your Home timeline. Mute accounts directly from their profile or post.',
        ),
        a(
          'b8e49590',
          'When you mute accounts, their messages will be filtered and sent to the bottom of your message request list.',
        ),
        a('ec202165', 'Learn more'),
        a('gde6b425', function (e) {
          return e.name + ' has been muted'
        }),
        a('e308019b', function (e) {
          return e.name + ' has been unmuted'
        }),
        a('hfb77cf6', 'Safety'),
        a('f350f0c0', 'Recommendations'),
        a('fd3369a2', 'Select which languages you want recommended posts, people, and trends to include.'),
        a('hfc86556', 'Muted'),
        a('dae57a42', 'Allow all'),
        a('i7cbc154', 'Allow some'),
        a('d623aecc', 'Share an account with people who have delegated roles.'),
        a('f3029d5c', 'When this setting is on, people can invite you to share their account.'),
        a('cd1305e8', 'Allow others to invite you to their account'),
        a('j339ef22', 'Allow anyone to invite you'),
        a('g4b0c2dc', 'Only allow people you follow to invite you'),
        a('i95202f6', 'Accounts delegated to you'),
        a('cb8ebf5c', 'Members you’ve delegated'),
        a('d9aef256', 'Your delegations'),
        a('afb3ccf6', 'Don’t allow'),
        a('dfae5248', 'Don’t allow others to invite you to their account?'),
        a(
          'b9c91524',
          'In the future, you won’t receive invites to other delegations. You’ll still be able to access your existing delegations.',
        ),
        a('c349b958', 'Invite a member'),
        a(
          'e177f72a',
          'Invite others to act on behalf of your account and manage account roles. Members can send Direct Messages, publish posts, and create Lists - as well as view them.',
        ),
        a('efee0a50', 'Invite a member to this account'),
        a('ja0a1aa6', 'Invite a contributor to this account'),
        a('db4f623a', 'Assign a role to this member'),
        a('be7350e3', function (e) {
          return 'Assign @' + e.screenName + ' as an admin?'
        }),
        a('b7aa7642', 'Invite sent'),
        a('edbca224', 'Send invite'),
        a('f4834ca6', 'Invite another member'),
        a('cb04a824', 'Contributor'),
        a(
          'd4b3abde',
          'Contributors can send Direct Messages, publish posts, and create Lists. Contributors can also view the account’s Direct Messages, posts, and Lists.',
        ),
        a(
          'b92e2700',
          'Admins have the same permissions as contributors. They can also invite or remove contributors and view post analytics.',
        ),
        a(
          'hbbbf908',
          'Admins can invite other contributors to this account and view post analytics. Double-check that you’re assigning the role for the right person.',
        ),
        a('d8eda249', function (e) {
          return (
            'Once @' +
            e.screenName +
            ' accepts their invite, they’ll be able to contribute to this account with their updated permissions.'
          )
        }),
        a('b5faf216', 'This member doesn’t allow Delegate invites.'),
        a('hcc3b4ce', 'This member is blocked by your account.'),
        a('ace0f0a4', 'This member limits who can invite them to Delegate.'),
        a('c2e8f726', 'Admins'),
        a('fade0942', 'Admins can also invite or remove contributors to the account and view post analytics.'),
        a('b7d6e5d6', 'Contributors'),
        a('cd76a282', 'No members have been added yet'),
        a('db25d796', 'Change this members role'),
        a('e4133790', 'Role updated'),
        a('a1a27c26', 'Change Role'),
        a('fd7b1b1c', 'Go Back'),
        a('ec67d021', function (e) {
          return '@' + e.screenName + ' can act on behalf of this account with their new permissions.'
        }),
        a('h502484e', 'Pending invite'),
        a('a171ca7c', 'Uninvite member'),
        a('f68f079c', 'Change role'),
        a('b2794e9e', 'Remove from group'),
        a('gca83d6a', 'They’ll no longer be an admin on this account.'),
        a('b8cac21c', 'They’ll no longer be a contributor on this account.'),
        a('hd67c2e8', 'Uninvite'),
        a('f0bd8ca9', function (e) {
          return 'Remove @' + e.screenName + '?'
        }),
        a('a33eba47', function (e) {
          return 'Uninvite @' + e.screenName + '?'
        }),
        a('d472c9eb', function (e) {
          return '@' + e.screenName + ' removed from group'
        }),
        a('h5951997', function (e) {
          return '@' + e.screenName + ' uninvited'
        }),
        a('a44c6034', 'Pending invites'),
        a(
          'e39bc936',
          'As a member, you can send Direct Messages, publish posts, and create Lists — as well as view them. Admins can also invite or remove contributors to the account and view post analytics.',
        ),
        a('h0d3bddc', 'Admin access'),
        a('c54aafb0', 'Contributor access'),
        a('idc35f32', 'You haven’t been delegated to any accounts'),
        a('cd5c5e73', function (e) {
          return 'You may only have ' + e.numDelegatesLabel + ' delegat' + n(e.numDelegates, 'e', 'ions')
        }),
        a('fab787b4', 'Leave account'),
        a('bfbe9620', 'View members'),
        a('d52a2b36', 'You’ll no longer be an admin on this account.'),
        a('df515932', 'You’ll no longer be a contributor on this account.'),
        a('cd00ea21', function (e) {
          return 'Leave @' + e.screenName + '?'
        }),
        a('efa88ab1', function (e) {
          return 'Left @' + e.screenName
        }),
        a('c6dae164', 'Accept invitation'),
        a('f8376170', 'Reject invitation'),
        a('a68c45e4', 'Reject'),
        a('aa35b48d', function (e) {
          return 'Reject invite from @' + e.screenName + '?'
        }),
        a('ed2a4b05', function (e) {
          return 'Rejected member invite to @' + e.screenName
        }),
        a('e73f9635', function (e) {
          return 'Accepted member invite to @' + e.screenName
        }),
        a('d2da668c', 'Delegate members'),
        a('ddf27b8e', 'Invite a contributor'),
        a(
          'jba63182',
          'View member roles on the account. Members can send Direct Messages, publish posts, and create Lists – as well as view them.',
        ),
        a(
          'af59527e',
          'View member roles and invite contributors to the account. Members can send Direct Messages, publish posts, and create Lists – as well as view them.',
        ),
        a('eafcc76a', 'Things this App can view...'),
        a('j3998a16', 'Things this App can do...'),
        a('a6845663', function (e) {
          return 'You approved these app permissions on ' + e.date
        }),
        a('b2347f7c', 'Loading application data'),
        a('e1fda16e', 'You don’t have this app connected'),
        a(
          'b8f3ed46',
          'When you connect a third-party application to your X account, you are granting that application access to use your account.',
        ),
        a('gb8d09ba', 'Has access to your email address'),
        a('g6dc09a0', 'Permissions'),
        a('a6e6e898', 'Read-only'),
        a('cde3b9ae', 'Read and write'),
        a('g0d7813a', 'Read, write, and direct messages'),
        a('c9b35b9e', 'Read your advertising data'),
        a('e0191264', 'Read, create, and manage your advertising data'),
        a('b73e1e8a', 'Learn how to revoke access'),
        a('c174e46e', 'Show less'),
        a('a39075ff', function (e) {
          return e.n + ' more'
        }),
        a('da6cdba8', 'Revoke app permissions'),
        a('ef1d3dcc', 'Report application'),
        a('d64e29c6', 'Log out the device shown'),
        a('idfa01cc', 'Log out of the device shown?'),
        a('f400075e', 'This will end your active X session, and you’ll need to log in again to start a new one.'),
        a('e04ba39c', 'Date and time'),
        a('eed75824', 'You’ve ended your active X session.'),
        a('ddcd3d26', 'Loading session data'),
        a('d2f0f3fe', 'We can not find this session'),
        a('ga05517a', 'You haven’t created any reports'),
        a('ea1715c0', 'When you do, they’ll show up here.'),
        a('d1ebb8e4', 'Autoblocked posts'),
        a('e9f1fbcc', 'Nothing to see here — yet'),
        a('de9b6642', 'If we autoblock an account, it’ll show up here.'),
        a('cd702bc4', 'Report account'),
        a('hc676c4b', function (e) {
          return 'You blocked @' + e.screenName
        }),
        a('ca95bd23', function (e) {
          return 'You removed @' + e.screenName + ' from autoblocked accounts'
        }),
        a('j74e12e4', 'They’ll be able to see your posts, follow you, and send you Direct Messages.'),
        a(
          'b70a2cde',
          'We use technology to help us identify sensitive media, so while we’re always improving, we may not get it right every time.',
        ),
        a('ee320a07', 'sensitive media policy'),
        a('ffeb836a', 'Settings are unavailable'),
        a(
          'f2fb9746',
          'These settings aren’t available because they apply to non-essential cookies. Since you’ve already opted out of those, we’re only using cookies that collect necessary data from your device.',
        ),
        a('aa4342be', 'Graphic violence'),
        a('jfec3aa0', 'Adult content'),
        a(
          'j6bacd6a',
          'Hide media marked as graphic violence until you choose to see it. On X for iOS, this media won’t be shown at all.',
        ),
        a(
          'a73e66a8',
          'Hide media marked as adult content until you choose to see it. On X for iOS, this media won’t be shown at all.',
        ),
        a(
          'fef1b8dc',
          'Hide media marked as sensitive until you choose to see it. On X for iOS, this media won’t be shown at all.',
        ),
        a('d0a5a1c0', 'Warn'),
        a('ga197e26', 'Show all'),
        a('eb723386', 'Never show this'),
        a(
          'ea31c622',
          'This includes any media that shows death, violence, serious physical harm, or medical procedures in graphic detail.',
        ),
        a(
          'e40985c4',
          'This includes consensually made and shared media that’s pornographic or meant to cause sexual arousal.',
        ),
        a('h7e0672b', 'media settings'),
        a('e5fff0c8', 'Your subscription is active.'),
        a('baf97716', 'Your features will be available for the remainder of your billing period.'),
        a('j3404888', 'We are reviewing your account.'),
        a('e4aaf0f8', 'To cancel your complimentary subscription to Premium, contact support'),
        a('e5170220', 'This account received a complimentary Premium subscription via advertising spend.'),
        a('de9f111a', 'Manage your current subscription'),
        a('d5839f9e', 'Review terms or manage your subscription from your Stripe account.'),
        a(
          'fcb4b3ce',
          'In the coming weeks, we’ll be launching the ability to easily upgrade or downgrade your subscription tier. If you’re interested in subscribing to a new tier, we recommend waiting for that launch. For any questions, contact',
        ),
        a('e32e4360', 'X Premium support'),
        a('fdc10b7e', 'Verified Organizations Subscriber'),
        a(
          'd503b394',
          'You are receiving Premium+ because your organization is a Verified Organizations subscriber. Contact your organization for more details.',
        ),
        a('a840c22c', 'Manage Existing Premium subscription'),
        a('h201c4c2', 'iOS'),
        a('i8385a2c', 'Android'),
        a('h80834de', 'other'),
        a('ib8ebf3b', function (e) {
          return (
            'Looks like you bought this subscription on an ' +
            e.mobilePlatform +
            ' device. You’ll need to manage or cancel your subscription from that platform.'
          )
        }),
        a('aaa798fc', 'Upgrade'),
        a('e31456f8', 'Switch tier'),
        a('a7c4ecea', 'Experience an ad-free For You timeline, unlock all features, and get the biggest reply boost.'),
        a('h15cc518', 'Explore tier options and choose between monthly or annual plan.'),
        a('fecebd4c', 'here'),
        a('be103b84', 'Active'),
        a('ace43720', 'Expiring soon'),
        a('ce70c590', 'Manage affiliation badges'),
        a('a49e1b2a', 'Sort your affiliations'),
        a('e2daf93c', 'The first badge will be shown on all posts.'),
        a('ab8089ea', 'Reorder'),
        a('e0221c42', 'A better reading experience on and off X.'),
        a('adcaa214', 'See the most-shared articles from people you follow.'),
        a('b62d6e4c', 'Reader'),
        a(
          'acf63cd2',
          'Select the text size you prefer for reading threads. Turn the Reader feature on by selecting the book button from within any post in a thread.',
        ),
        a('b7237f7c', 'Control everything related to account verification and identity.')
      a('dd7026c2', 'Show or hide your blue checkmark on your profile.'),
        a('h20c0504', 'Hide your blue checkmark'),
        a(
          'b12ab086',
          'The checkmark will be hidden on your profile and posts but may still appear in some places and some features could still reveal you have an active subscription. \nSome features may not be available while your checkmark is hidden. Your checkmark will be hidden while your account is under review.',
        ),
        a('f69ad058', 'Early access to some of X’s newest features.'),
        a('c4a37384', 'Longer posts'),
        a('j5da8501', function (e) {
          return 'Create posts, replies and Quotes up to ' + e.count + ' characters long.'
        }),
        a(
          'db2f01c8',
          'Edit posts up to 5 times within 30 minutes of posting. Your edit history is visible to anyone who wants to see the evolution of a post.',
        ),
        a(
          'i419a5ac',
          'Edit posts up to 5 times within 1 hour of posting. Your edit history is visible to anyone who wants to see the evolution of a post.',
        ),
        a('de5a60d8', '1080p video'),
        a('ea761738', 'Share your favorite moments with 1080p (Full HD) video.'),
        a('a99d8e60', 'Upload longer videos'),
        a(
          'dff2f080',
          'Upload and post videos that are up to 60 minutes long (1080p) on twitter.com and up to 10 minutes long on iOS and Android.',
        ),
        a('e4fde082', 'Set a timer to undo sent posts, and choose which kinds of posts you want to undo.'),
        a('f2977d80', 'Bookmark folders'),
        a('gaf181e0', 'Organize your Bookmarks into folders and avoid endless scrolling.'),
        a('fe163f20', 'Control the publicly displayed tabs on your profile.'),
        a('caad1a36', 'Add up to 3 jobs and feature them on your profile.'),
        a('ac057b4e', 'To cancel your complimentary subscription for engaging on X, contact support'),
        a('i8132774', 'Bonus content for your most engaged followers'),
        a('a1222584', 'Earn money directly from your content'),
        a('df837dac', 'Estimated earned revenue / Payout threshold'),
        a('df29646e', 'Payout threshold'),
        a('b0ac642a', 'Payouts can take up to 90 days to be deposited in your account.'),
        a('c747df1c', 'Set up payout details'),
        a('ac814a76', 'You haven’t set up payout details yet.'),
        a('f139168e', 'Earnings dashboard'),
        a('ee0510c2', 'Payout history'),
        a('c9b82b4c', 'Application accepted · Build your Subscription'),
        a('ibb5e1c8', 'Application declined'),
        a('b255df58', 'Application submitted · Waiting for review'),
        a('b3f834c8', 'Application waitlisted'),
        a('i14be2c6', 'Estimated earned revenue'),
        a('b03a3d62', 'Ads revenue sharing'),
        a('c12c5eb6', 'Available programs'),
        a('e8dc82e2', 'Active programs'),
        a('jd176c82', 'Payouts are not supported in your area'),
        a(
          'c9d99692',
          'Eligible creators can sign up for monthly subscriptions or receive their payout for ads revenue sharing',
        ),
        a(
          'd6ff74ca',
          'Unfortunately, our payment provider does not yet support payouts in your country. Some monetization programs are not available.',
        ),
        a('aea0b11a', 'Earn a living on X by letting anyone subscribe to you for monthly content.'),
        a('h7a68080', 'Earn income from the ads served in the replies to your posts.'),
        a('iec0f526', 'To get paid out for ads revenue sharing, make sure you connect a Stripe account.'),
        a('cbbe29c2', 'You are on track for payouts'),
        a('h72d71a2', 'Eligible'),
        a('e12b0b16', 'Not yet eligible'),
        a('a1e57106', 'Incomplete'),
        a('db8c4158', 'Apply now'),
        a('e89cdac0', 'Manage payout account'),
        a('e34694d6', 'Stripe account not connected'),
        a('f53750e6', 'Finish setting up payout details'),
        a('hc7631da', 'You have not completed setting up your Stripe account'),
        a('ae57c15d', 'Finish setting up your payout account'),
        a('d809ac49', 'here'),
        a('bbe09d38', 'Application accepted · Pending configuration on app stores'),
        a('ja73ebac', 'Revenue'),
        a('bc43a32e', 'Recent activity'),
        a('i4c3b046', 'You have no new Coins at this time.'),
        a('ca516a66', 'See all activity'),
        a('ee9ea930', 'Diamonds'),
        a(
          'cf3b535e',
          'Diamonds are accumulated by receiving Coins on eligible posts. Money earned from Diamonds gets added to your estimated earnings.',
        ),
        a('fbb7764b', function (e) {
          return e.count + ' Coin' + n(e.count, '', 's')
        }),
        a('e70a07b2', 'Anonymous'),
        a('c76972f0', 'Since last payout'),
        a('c219a552', 'All time'),
        a('f3ce76c0', 'Need more help?'),
        a('i8982e7e', 'If you have questions, visit our Help Center or contact us.'),
        a('fbbfe8aa', 'Deactivate Coins'),
        a(
          'e4f29140',
          'By deactivating, you’ll be removed from the Coins program and no longer be eligible to receive Coins.',
        ),
        a('e58e85d2', 'Continue to deactivation'),
        a('be8e87b4', 'Deactivate Coins?'),
        a('bee26fa8', 'Yes, deactivate'),
        a('f0145c9a', 'Coins is now deactivated'),
        a('a22f6808', 'All activity'),
        a('g1b8020c', 'Last 30 days'),
        a('jb13b840', 'All-time'),
        a('b4f24360', 'You have no new Coins in the last 30 days.'),
        a('d59dbf8a', 'Overview'),
        a('g652fc4c', 'You have no payout history this month.'),
        a('d55e017a', 'This month'),
        a('f883322d', function (e) {
          return 'Transaction ID ' + e.transactionId
        }),
        a('d978f43e', 'New Subscriptions'),
        a('d113fc10', 'You have no new Subscriptions at this time.'),
        a('h7a41c02', 'Renewals'),
        a('eedf2eaa', 'You have no renewals at this time.'),
        a('d93308d8', 'See all transactions'),
        a('a23e724a', 'This account is unavailable.'),
        a('a384fda0', 'Subscription overview'),
        a('i4313618', 'Introduce yourself and describe what people can expect when they Super Follow you.'),
        a('c0348964', 'Introduction'),
        a('g522fd30', 'Subscribed perks'),
        a('e85471c6', 'Subscribed badge'),
        a('fd75ca92', 'You’ll get a public Subscribed badge that makes it easier to get noticed, chat, and connect.'),
        a('ia9c37c4', 'Pricing'),
        a('a4c6e458', 'You’ve set your monthly Subscription fee at:'),
        a('be54a313', function (e) {
          return e.price + '/mo'
        }),
        a('cca48546', 'This price can’t be changed'),
        a('f1a160c6', 'You can’t make changes to the price point you chose during setup.'),
        a('f5be83b2', 'Join the Community'),
        a(
          'e4ee8c6a',
          'Share ideas, get inspiration, and connect with other creators in the Subscriptions Creators Feedback Community.',
        ),
        a('b28a1b48', 'Get content tips and ideas'),
        a('f2df375c', 'Check out our creator guide for tips, content ideas, and more.'),
        a('i3a90dee', 'Deactivate Subscriptions'),
        a(
          'e261e6e6',
          'By deactivating, you’ll be removed from the Subscriptions program and lose all of your Subscribers.',
        ),
        a('ca5ca5ee', 'See preview'),
        a('g867481e', 'View creator guide'),
        a('a329ce88', 'Add a description...'),
        a('f0c99eff', function (e) {
          return '- @' + e.screenName
        }),
        a('g40b2b30', 'Enable post previews'),
        a('c1521804', 'Previews of your subscriber posts will be shown to non-subscribers.'),
        a('jd0f1ac0', 'Deactivate Subscriptions?'),
        a(
          'c6c27fc8',
          'Deactivating Subscriptions is permanent. You’ll be removed from the Subscriptions program. To return to the program, you’ll need to reapply.',
        ),
        a('f82a23ec', 'Subscriptions is now deactivated'),
        a('c701e5cc', 'Any changes you made won’t be saved.'),
        a('a649778c', 'Continue editing'),
        a('hf6f2914', 'Preview'),
        a('d1a683b8', 'About Subscriptions creators'),
        a('iba08a94', 'How does everything look?'),
        a(
          'a5f55bfa',
          'This is what prospective Subscribers will see when they come to your page. You can come back and update your descriptions anytime.',
        ),
        a('b600eb88', 'Find your people and get recognized'),
        a('da48ebf6', 'Get bonus content when you sign up'),
        a('f324fb6c', 'Subscription'),
        a('c654a3aa', 'Only Subscribers can see this post'),
        a('d409ce3c', 'Support your favorite people on X for bonus content and extra perks.'),
        a('a4ed9072', 'Add an introduction...'),
        a('af5b098e', 'Subscriptions perks'),
        a('gf32cca2', 'Describe the perks you’ll offer'),
        a(
          'j8ba99b4',
          'Give people a taste of what they’re in for each month with a quick summary of the bonus content you’ll share.',
        ),
        a('j679dcda', 'See examples'),
        a('j325331a', 'Take a minute to say hello'),
        a('e18e8da8', 'Make a good first impression with a quick intro message for your potential Subscribers.'),
        a('h810143c', 'Details'),
        a('ga57b610', 'Purchase date'),
        a('h3b68828', 'Purchase type'),
        a('cc2aa67a', 'Purchase platform'),
        a('b313bb24', 'Payment'),
        a('e5188502', 'All sales are final'),
        a('bf364d62', 'All transactions'),
        a('ed3efef0', 'You have no new Subscriptions in the last 30 days.'),
        a('b5f9ec14', 'You have no renewals in the last 30 days.'),
        a('d8eed490', 'Manage your public-facing profile appearance.'),
        a('j5183a32', 'Hide Likes tab'),
        a(
          'gb2318d6',
          'Your Likes tab on your profile will only be visible to you. Your Likes timeline will also be hidden from the X APIs. Your individual Likes will still be visible on posts.',
        ),
        a('e26dbcd0', 'Hide your Creator Subscriptions'),
        a('aea7dda8', 'Your list of Creator Subscriptions on your profile will only be visible to you.'),
        a('f2351b98', 'Flagged accounts'),
        a(
          'da2c4a73',
          'It looks like we haven’t flagged any accounts. Or you’ve already blocked them all. If we flag more accounts, they’ll show up here.',
        ),
        a('bd0a88c2', 'View blocked accounts'),
        a('ibea9ce4', 'Flagged posts'),
        a('g0cba830', 'Here’s what happens when Safety Mode is on'),
        a('abd25474', 'X does the work, so you don’t have to'),
        a(
          'b5bf619a',
          'When we detect potentially abusive or spammy replies, mentions, or Quotes, we temporarily autoblock those accounts. Unlike manual blocks, autoblocks only last for a week.',
        ),
        a('e83ecbf6', 'You get a break'),
        a(
          'g6fdfffc',
          'Autoblocked accounts, just like manually blocked accounts, can’t see your posts, follow you, or message you. If they view your profile, we let them know X autoblocked them, and not you.',
        ),
        a('bcb2afc4', 'Fewer people see replies from autoblocked accounts'),
        a(
          'bff84f2a',
          'Existing replies from autoblocked accounts are moved to the bottom of the conversation, so fewer people see them.',
        ),
        a('fabe1398', 'Autoblocks'),
        a('h58f67dc', 'What’s Safety Mode?'),
        a(
          'a37e9b0a',
          'Autoblock accounts for a week that might be acting abusive or spammy. Accounts you follow or message with aren’t autoblocked.',
        ),
        a('ccafffde', '1 day'),
        a('j2e184d8', '3 days'),
        a('d94b2246', 'Ends within 1 hour'),
        a('bfea13ac', 'Can’t update Safety Mode settings.'),
        a('ee95bb8d', function (e) {
          return 'Ends on ' + e.date
        }),
        a('j3d2cfc4', 'Allow followers to see which Spaces you’re listening to'),
        a(
          'd9588ae6',
          'Keep in mind that even with this setting turned off you will be visible to everyone when you’re in a Space. Your followers can always see what Spaces you’re hosting, co-hosting or speaking in.',
        ),
        a('i84c5de8', 'Creator applications coming soon'),
        a('b8922f7e', 'Check back soon to be able to apply to join the Subscriptions program.'),
        a('feb54b40', 'Be one of the first to apply'),
        a('f6443bd2', 'Good news — you meet our eligibility requirements for Subscriptions. Ready to apply?'),
        a('a3a20a10', 'Check back later'),
        a('b8d29e4a', 'Unfortunately, you don’t meet our eligibility requirements for Subscriptions at this time.'),
        a('d92c1d0a', 'Continue to application'),
        a('f09be7f8', 'Get verified'),
        a('fdd95737', function (e) {
          return e.minFollowersCount + ' followers'
        }),
        a('b747ce3a', 'Active in the past 30 days'),
        a('c27f57ac', 'Be at least 18 years old'),
        a('fde27650', 'Subscriptions Terms'),
        a('ef606fca', 'Paid subscriptions for your most engaged followers'),
        a('e533715e', 'Check eligibility'),
        a('d8671da2', 'Make a living on X'),
        a('d126a504', 'Offer your favorite followers a little something extra and earn money each month. '),
        a('d08d0bb2', 'Bonus content'),
        a('ef29d2c2', 'Share unscripted thoughts, ideas, and opinions with extra posts and personal replies.'),
        a('if12af7c', 'Subscriptions set up'),
        a('cc4c1a14', 'Price set up'),
        a('d5737f0e', 'Monthly Subscription'),
        a('e1453e45', 'Learn more'),
        a('aa7e35ee', 'Your account was not selected'),
        a('c984cc62', 'Your account wasn’t selected this time. Stay tuned for future opportunities to participate.'),
        a('gd115e64', 'Apply for Subscriptions'),
        a('eb4bf9a1', 'you won’t be able to change it later.'),
        a('d3d6c52c', 'Your application has been submitted'),
        a(
          'cb27c0ba',
          'We’ve confirmed your pricing. Your application will be reviewed and if you’re approved, we’ll send you a notification as soon as it’s live.',
        ),
        a('j274e6aa', 'You’re on the waitlist'),
        a(
          'j006be54',
          'Our Subscriptions test group filled up fast, but we’ve added you to the waitlist and will let you know when more spots open.',
        ),
        a('d5cb1114', 'Get started with Subscriptions'),
        a(
          'j2f622ec',
          'You’ve been selected for our test group! Set up your Subscription details now and we’ll let you know when it’s live.',
        ),
        a('e2cd7000', 'Almost there...'),
        a('b3629b92', 'Just a few more steps to finish setting up your Subscription.'),
        a('f4619a62', 'Accept and continue'),
        a('c5625f84', 'Describe your Subscription perks'),
        a('c7289544', 'Set a Subscription price'),
        a('aaf68c58', 'Confirm your payout details'),
        a('b8a69fa0', 'Subscriptions Terms'),
        a('ad4a92a2', 'Badge'),
        a('d5aa8de0', 'Give your Subscribers badges'),
        a(
          'j0bbda92',
          'Nothing to change or edit here. All of your Subscribers will automatically get a public badge when they Subscribe.',
        ),
        a('e18b7a72', 'Review'),
        a('be76dc34', 'Add description'),
        a('ef5406e4', 'Add introduction'),
        a('ea8a3d2e', 'Pricing setup'),
        a('f77bb179', function (e) {
          return 'Confirm your ' + e.price + ' selection'
        }),
        a(
          'g2a6f160',
          'Double-check and confirm your Subscription price. You won’t be able to come back and change the price after you set it.',
        ),
        a('g767d1c9', 'Note: you won’t be able to change it'),
        a('df057690', 'Choose what your Subscribers pay'),
        a('g5923869', function (e) {
          return e.price + ' per month'
        }),
        a('f025ab3a', 'Build a bigger, broader base'),
        a('c962df0e', 'Infrequent posting and interacting with Subscribers'),
        a('ib075804', 'Expand your base and maximize revenue'),
        a('fc04f3a6', 'Moderate posting and interacting with Subscribers'),
        a('c246656e', 'Build an intimate base'),
        a('h0c5405c', 'Regular posting and interacting with Subscribers'),
        a('f2d2153d', function (e) {
          return 'Most creators charge ' + e.price + ' but you can choose any price you want'
        }),
        a('f1cb36b8', 'Payout setup'),
        a('e20f6662', 'You’re all set!'),
        a('g88e146c', 'Your account is pending'),
        a(
          'dfe973a6',
          'Thanks for providing your payout details. You’ll receive a notification with next steps as soon as Stripe has reviewed your information.',
        ),
        a('ja884230', 'Set up your payout details'),
        a('a3f6a966', 'Connect Stripe account'),
        a(
          'cb031e44',
          'You’ll be taken to Stripe to connect your account. If you have an existing Stripe account you’d like to use, enter the email address of that account when prompted for an email by Stripe. Note: your Stripe email may be different than your X email.',
        ),
        a('ebfb897c', 'Examples'),
        a('dc4feb1a', 'Not sure what to say?'),
        a(
          'h9b9d486',
          'The kind of content you offer Subscribers is entirely up to you. Here are some examples to help get you started.',
        ),
        a(
          'ic130fd6',
          'You’ll get some cool behind-the-scenes content, early peeks at my books and other projects, and monthly AMAs.',
        ),
        a('dd913e24', 'You’re in for my hot takes, unscripted thoughts, and extra content from yours truly.'),
        a('b737ee66', 'Get ready for a VIP experience. Think: Subscriber-only content like polls, videos, and deals.'),
        a(
          'a0bb2076',
          'Keep your intro short and sweet, you’ll be able to describe your content later. Here are a few examples to help get you started.',
        ),
        a(
          'fe076612',
          'Hi and welcome to my Subscriptions page! I’m so glad you’re here. Thanks for making it possible for me to do what I love.',
        ),
        a(
          'g7f66daa',
          'What’s up everyone? Thanks for checking out my Subscription. I think you’ll like what I have in store for you.',
        ),
        a('hbe4f99e', 'Hey there! Can’t wait to share some top secret content and get to know you even better :)'),
        a('fb278c82', 'What’s this preview?'),
        a(
          'j6cab6ec',
          'This is what people see before they Subscribe to you. Tweak and edit your descriptions until you’ve got them just right.',
        ),
        a('ecdbece0', 'You have been successfully enrolled into the Coins program.'),
        a('db3f0bbe', 'Helping creators earn money from their content.'),
        a('a1f40cf8', 'Agree'),
        a('d604fb32', 'Creator Terms'),
        a('d520d188', 'Receive Coins'),
        a(
          'ea770766',
          'Coins are virtual goods that can be received on eligible posts. As you receive Coins they accumulate into Diamonds, which can be cashed out.',
        ),
        a('d27f5ac6', 'Passive income'),
        a(
          'h1d66df0',
          'Earn money simply by posting great content on X. Your followers can now reward you by giving you Coins.',
        ),
        a('f85fb0a2', 'Connect with your audience'),
        a(
          'd1433e24',
          'Coins are a fun way for fans to reward you for making the content they enjoy the most. It’s an opportunity for you to get better connected to your followers and fans.',
        ),
        a('e6ba42de', 'Ad Revenue Share'),
        a(
          'da4cd6fa',
          'Unfortunately, you’re not yet eligible for Ads Revenue Sharing. You’ll need to meet the below requirements to participate:',
        ),
        a('d3789528', 'About Ad Rev Share'),
        a('b2b4d592', 'Subscribe to Premium or Verified Organizations'),
        a('hb4c5169', function (e) {
          return 'Have at least ' + e.impression_number + 'M impressions on your posts within the last 3 months'
        }),
        a('dd7164e0', '500 followers'),
        a('f91685ba', 'You are automatically eligible to get paid for your posts!'),
        a(
          'a9f0e0fa',
          'As a Premium or Verified Organizations subscriber, you are automatically eligible for ads revenue sharing. Your payout is based on the number of verified impressions on ads shown in the replies to your posts.',
        ),
        a('acd1a1be', 'Set up your payout details now to receive future payouts.'),
        a('ef135200', 'Join & set up payouts'),
        a('c8169274', 'There was a problem with saving your application. Please try again later.'),
        a('f242a8ac', 'Ads Revenue Sharing Terms'),
        a('d085a144', 'Creator earnings dashboard'),
        a('a5204850', 'Total revenue'),
        a('ada650cf', function (e) {
          return 'Pay period: ' + e.fromDate + ' - ' + e.toDate
        }),
        a(
          'e4972a1a',
          'Check out some of the new features we’re testing before they’re available to everyone else and tell us what you think.',
        ),
        a('b8f60d04', 'From your desktop, you can upload and post videos that are up to 10-minutes long.'),
        a('h4d3bb84', 'You can upload and post videos that are up to 10-minutes long.'),
        a('cac1046e', '1080p video uploads'),
        a('hd885ae0', 'See your impact'),
        a('je4ccd3a', 'Ad-free Articles Help Center'),
        a('eca4e32a', 'View details'),
        a('i6cb493e', 'Manage how your affiliations are displayed'),
        a('d5ff7682', 'Message @premium for support'),
        a('d7eebb60', 'Setting up your subscription'),
        a('a452ab68', 'This may take a few seconds.'),
        a('eca82e08', 'A better news reading experience'),
        a('h02b976e', 'Discover relevant long form posts and enjoy articles being shared in your network.'),
        a('ia0beb56', 'Early access to select new features'),
        a('af740df0', 'Explore select new features.'),
        a('f5338950', 'Extras'),
        a('i5cb232e', 'Choose custom app icons and add quick access to your favorite destinations.'),
        a('dcfc6540', 'Original posts'),
        a('be077e8c', 'Threads'),
        a('f3429f2c', 'Polls'),
        a('i647ba8a', 'Post Undo period'),
        a(
          'd195528e',
          'Select which types of posts you want to undo before they’re public, plus how long your undo period is.',
        ),
        a('bcf3a9e6', 'Manage settings that help limit unwelcome replies.'),
        a('c048fd3a', 'Filter potentially unwelcome replies'),
        a(
          'dab7dac4',
          'Replies to your posts that contain potentially harmful or offensive language will be filtered and appear here. Others can still see these replies.',
        ),
        a(
          'c4c53b86',
          'Keep in mind we use technology to help us identify such replies, so while we’re always improving, we may not get it right all the time.',
        ),
        a('dca3d2ee', 'Turn off reply filter?'),
        a('fe440ff8', 'Filtered replies will not be restored to your posts.'),
        a('cedbb01c', 'Legal'),
        a('b4f917d0', 'Miscellaneous'),
        a('bdfa2b8c', 'Additional resources'),
        a('b8692262', 'Check out other places for helpful information to learn more about X products and services.'),
        a('c0398892', 'Release notes'),
        a(
          'b833bcde',
          'Manage aspects of your X experience such as limiting color contrast and motion. These settings affect all the X accounts on this browser.',
        ),
        a('d5b646be', 'Vision'),
        a('jfe6a3a0', 'Motion'),
        a('e8c72272', 'Increase color contrast'),
        a('dba2cdd2', 'Improves legibility by increasing the contrast between text and background colors.'),
        a('d070244e', 'Reduce motion'),
        a('icfa5e8c', 'Limits the amount of in-app animations, including live engagement counts.'),
        a(
          'ae41b002',
          'Limits the amount of in-app animations, including live engagement counts. Your system is currently signaling to reduce motion. If you would like to re-enable motion, first disable it there.',
        ),
        a('h9d1cfae', 'Receive image description reminder'),
        a('c878e9f8', 'Enables a reminder to add image descriptions before a post can be sent.'),
        a('bbd1fc7c', 'Learn more about accessibility at X'),
        a('ac865cf0', 'Accessibility at X'),
        a(
          'd3a2bde8',
          'See information about your account, download an archive of your data, or learn about your account deactivation options',
        ),
        a('idca4742', 'See your account information like your phone number and email address.'),
        a('b6ded35e', 'Change your password at any time.'),
        a('cce24bf4', 'Get insights into the type of information stored for your account.'),
        a('i203df96', 'Find out how you can deactivate your account.'),
        a('eb073638', 'Teams has moved'),
        a('ec95b588', 'We moved the Teams feature to Delegate in your security and account access settings.'),
        a('iacafa08', 'Go to security settings'),
        a('f70cd5ee', 'Phone'),
        a('ib6f1694', 'Account creation'),
        a('de323650', 'Female'),
        a('b6ab31be', 'Male'),
        a('h3290872', 'Verified'),
        a('hbd12156', 'Request Verification'),
        a('f70d5780', 'Yes.'),
        a('dc62d3c6', 'No.'),
        a('h530db16', 'Protected posts'),
        a(
          'd6d80990',
          'This information applies to your browser or device while you’re logged out. It may be different when you’re logged in.',
        ),
        a('e159eeee', 'profile'),
        a('i0d81ddb', 'your personalization and data settings'),
        a('g2a9bd3e', 'Automated Account Labels'),
        a('dd9b3aae', 'What’s an automated account?'),
        a(
          'b80bdc40',
          'Automated accounts are programmed to perform certain actions automatically through the X API. Like posting a region’s weather conditions, for example. They’re created and managed by other people on X.',
        ),
        a(
          'a01ac9b6',
          'Labels let the world know who’s managing the automated account. Once an automated account owner has connected their managing account, a label will appear on the automated account profile and posts.',
        ),
        a('b989e1fe', 'Do I need to label my automated accounts?'),
        a('i2d599aa', 'How do I label my automated account?'),
        a('gd5bed72', 'Create a managing account'),
        a('g6d44432', 'A managing account is the human-run account responsible for the automated account.'),
        a('e20a69e8', 'Connect your managing and automated account'),
        a('d2f88358', 'Connect your accounts from the Automation page in your settings.'),
        a('e427f632', 'Your account is labeled!'),
        a('a4d7cffa', 'Once the accounts are connected, the automated account will have a label.'),
        a('a18d6a7d', 'new rules'),
        a('e9965c14', 'automated account label FAQ'),
        a(
          'a3f22d8e',
          'Select the kinds of notifications you get about your activities, interests, and recommendations.',
        ),
        a(
          'bc20979a',
          'X and its partners use cookies to provide you with a better, safer, and faster service and to support our business. Some cookies are necessary to use our services, improve our services, and make sure they work properly.',
        ),
        a(
          'ge06dadc',
          'Allow X and its partners to use cookies to provide you with ads and communications tailored to your interests.',
        ),
        a('he20de3a', 'Don’t allow X to use cookies to gather additional data for tailored ads and communications.'),
        a('g0ec0bec', 'Deactivated'),
        a('g89f4614', 'Your account is deactivated'),
        a('f1768324', 'Control how X personalizes content and collects and shares certain data.'),
        a(
          'ja94f34e',
          'These settings apply to this browser or device while you’re logged out. They don’t have any effect when you’re logged in.',
        ),
        a('bd73f7e6', 'This will enable or disable all of the settings on this page.'),
        a('ddbc3288', 'Data'),
        a('ae5339a0', 'See your X data'),
        a('b934e0ea', 'Disable personalization and data?'),
        a('i0317e0e', 'This may make the posts and ads you see less relevant.'),
        a('a148acba', 'Disable'),
        a('aa023546', 'Personalize based on the places you’ve been'),
        a('ced77194', 'Allow use of where you see X content across the web'),
        a('ie40dc4a', 'Not right? You can add your date of birth to your profile without sharing it publicly.'),
        a('fe1fc83e', 'These are the age ranges associated with you.'),
        a('bf9c74d0', 'Do not use these age ranges for personalization.'),
        a('cf0daa24', 'It may take a while to gather this information. Try again later.'),
        a('ea522535', 'Learn more'),
        a('d9cbe351', function (e) {
          return e.count + ' login event' + n(e.count, '', 's')
        }),
        a('de90b04a', 'Places you’ve been'),
        a('cbd2ef59', function (e) {
          return e.count + ' location' + n(e.count, '', 's')
        }),
        a('a4441bb8', 'Interests from X'),
        a('e1c6b2d6', 'Tailored audiences'),
        a('ed19d10d', function (e) {
          return (
            e.audienceCount +
            ' audience' +
            n(e.audienceCount, '', 's') +
            ' from ' +
            e.advertiserCount +
            ' advertiser' +
            n(e.advertiserCount, '', 's')
          )
        }),
        a('f00d0d03', function (e) {
          return e.count + ' interest' + n(e.count, '', 's')
        }),
        a('hf9c2caa', 'Request advertiser list?'),
        a('c29b7971', function (e) {
          return 'This will be sent to ' + e.primaryEmail + '.'
        }),
        a('b9e1cf02', 'Request'),
        a('a8276fac', 'Request advertiser list'),
        a('g7912a84', 'Got it. Your list will be emailed once it’s ready.'),
        a(
          'd6104de0',
          'You can opt out of interest-based advertising in your personalization and data settings. This will change the ads you see on X, however it won’t remove you from advertisers’ audiences.',
        ),
        a('ed8c03f5', 'Learn more'),
        a('e1a4daac', function (e) {
          return e.num_audiences + ' audiences'
        }),
        a('acb25e32', function (e) {
          return e.num_advertisers + ' advertisers'
        }),
        a('j4fa776e', 'Phones'),
        a('i7acdb36', 'Tablets'),
        a('c112dfc8', 'Desktop'),
        a('jd8607ba', 'Activated on'),
        a('ea4f6c9e', 'Browsers'),
        a('d750b93f', function (e) {
          return e.count + ' browser' + n(e.count, '', 's')
        }),
        a('a9783602', 'Mobile Devices'),
        a('j043aa31', function (e) {
          return e.count + ' mobile device' + n(e.count, '', 's')
        }),
        a('ae415fd2', 'This setting is off.'),
        a('a90be7b4', 'Email addresses'),
        a('c0f6f911', 'Off-X activity'),
        a('adaafb3f', 'Inferred identity'),
        a('f0f72665', 'Inferred identity'),
        a('d33b4e5b', 'Off-X activity'),
        a('c4668d4f', 'Off-X activity'),
        a('df3e137b', 'Learn more'),
        a('d1597ccb', 'Learn more'),
        a('c1b03a07', 'Learn more'),
        a('b056d9dc', 'This is your account’s primary language setting.'),
        a('h68bc23c', 'These additional languages are used to personalize your experience.'),
        a(
          'fbf0e61e',
          'If you haven’t already specified a gender, this is the one associated with your account based on your profile and activity. This information won’t be displayed publicly.',
        ),
        a('b4568a3a', 'Add your gender'),
        a('c0be743e', 'Gender updated'),
        a('c5abae66', 'This is the gender that X has most strongly associated with you.'),
        a('cdb0d3e6', 'Do not use this gender for personalization.'),
        a(
          'j31a1aa0',
          'These are the places X uses to show you more relevant content. You won’t see places listed here if you turned off “Personalize based on places you’ve been”.',
        ),
        a('ddefdd1c', 'Remove places you’ve been?'),
        a('hea740ac', 'This will take some time, and can’t be undone.'),
        a('a26e0d52', 'Got it. These places will be removed.'),
        a('he447966', 'No places currently found.'),
        a('b9d98dec', 'location settings'),
        a('e27e4fce', 'Unknown location'),
        a('ib55eb6b', 'Connected apps'),
        a('e5a4a539', 'Learn more'),
        a('gc8f2e14', 'You can opt out of interest-based advertising in your personalization and data settings.'),
        a('e6dbe66b', 'Learn more'),
        a('d3310e49', function (e) {
          return 'A file with all the information associated with your account will be sent to ' + e.primaryEmail + '.'
        }),
        a('ib03e8c8', 'Download a file with all the information associated with your account to this device?'),
        a('g49741e8', 'Download'),
        a('dc370a0c', 'Got it. Your data will be emailed once it’s ready.'),
        a('c07b4316', 'Interested in'),
        a('e97196fe', 'Known for'),
        a(
          'ja0f971c',
          'These are some of the interests matched to you based on your profile, activity, and the Topics you follow. These are used to personalize your experience across X, including the ads you see. You can adjust your interests if something doesn’t look right. Any changes you make may take a little while to go into effect.',
        ),
        a(
          'gd1ce494',
          'We believe you are known for the below interests. These are used to show more of your content to people interested in those areas. You can adjust them if something doesn’t look right. Any changes you make may take a little while to go into effect.',
        ),
        a('a6b0b41a', 'Get the X app on your mobile phone. It’s free.'),
        a('h3ed510e', 'X data'),
        a(
          'b708417c',
          'You can request a ZIP file with an archive of your account information, account history, apps and devices, account activity, interests, and Ads data. You’ll get an in-app notification when the archive of your data is ready to download.',
        ),
        a('jbf5843e', 'Periscope data'),
        a('ea886c6e', 'You can request an archive of your Periscope data on Periscope directly.'),
        a('cdcc2ad4', 'Download failed'),
        a('dbeff87a', 'Request archive'),
        a('hb02ed28', 'The download your data feature is unavailable right now. Try again at a later date.'),
        a(
          'c2254084',
          'We received your request. To protect your account, it can take 24 hours or longer for your data to be ready.',
        ),
        a(
          'f62d1d9e',
          'Your archive is ready for you to download and view using your desktop browser. Keep in mind, you need to download this data before it expires in a few days.',
        ),
        a('b221ca4c', 'We’ll let you know when your data is ready to download'),
        a('db40dfcf', 'complete this form'),
        a('g1aced04', 'Apps, devices & information'),
        a('d9ef2842', 'Unread items'),
        a('j0a8da6e', 'Add an existing account'),
        a('c6f2bf00', 'Manage accounts'),
        a('j62f43a6', 'View delegate accounts'),
        a('d4c52015', function (e) {
          return e.count + ' pending delegate account invitation' + n(e.count, '', 's')
        }),
        a('b8e1d524', 'Accounts'),
        a('gef27c4c', 'Account menu'),
        a('c61eea74', 'Personal accounts'),
        a('b7dc3885', function (e) {
          return 'Switch to @' + e.screenName
        }),
        a('cdc1bff7', function (e) {
          return 'Profile menu ' + e.loggedInUserName
        }),
        a('fd5208c6', 'Go to settings'),
        a('ee230734', 'Show more options'),
        a('ic8c615e', 'Choose and send a quick reply option'),
        a('a04077c4', 'Please choose 1 photo, video or GIF.'),
        a('c07367d8', 'Media is currently not supported for Encrypted Messages'),
        a('af71ef68', 'Voice'),
        a('b327c12a', 'Image'),
        a('fc64990e', 'Video'),
        a('e3275464', 'Send'),
        a('ca0ce0e4', 'Start a new message'),
        a('c3752568', 'Something went wrong. Try sending your message again in a minute.'),
        a('f78aa3ea', 'Some of your messages couldn’t be sent at this time. Please try again later.'),
        a('f9690dc0', 'Sorry! You cannot message this account.'),
        a('b1d35408', 'You are over the daily limit for sending messages.'),
        a('g539cca6', 'Your account is suspended and is not permitted to send messages.'),
        a('bbac001a', 'This message is too long.'),
        a('a1d2a68e', 'This user doesn’t follow you. You can only send messages to people who do.'),
        a('ec2bb9d4', 'The post you are trying to send has been deleted.'),
        a('hf383be4', 'The account you are trying to messsage has been deleted.'),
        a('c4fdbd16', 'You cannot send messages to users that you have blocked.'),
        a('hf3e7e38', 'Your message could not be sent.'),
        a('c0cf5eae', 'Get verified to send more messages'),
        a(
          'fb7f4028',
          'You’ve hit the maximum limit for Direct Messages in a single day. Sign up for Premium to continue messaging.',
        ),
        a('d938106e', 'Unable to create group'),
        a(
          'b0ef8d5a',
          'Only verified users can create a group with users that don’t follow them. Sign up for Premium to continue.',
        ),
        a('g695898f', function (e) {
          return 'Get verified to message @' + e.username
        }),
        a('d7bc1116', 'Get verified to message this user'),
        a(
          'j2e4ccaa',
          'Only verified users can send Direct Message requests to people that don’t follow them. Sign up for Premium to continue.',
        ),
        a('gdf28f56', 'Some participants could not be added to the conversation'),
        a(
          'e231d760',
          'Only verified users can add people that don’t follow them to a group. Sign up for Premium to continue.',
        ),
        a('af7368f4', 'Subscribe today'),
        a('df0daac2', 'Only verified users can create a Community. Sign up for Premium to continue.'),
        a('hd7d278c', 'No thanks'),
        a('dd8272fd', function (e) {
          return e.count + ' new message' + n(e.count, '', 's')
        }),
        a('e2cd3b7c', 'Audio call ended'),
        a('f42f365a', 'Video call ended'),
        a('a7570f2c', 'Missed audio call'),
        a('jd9831b2', 'Missed video call'),
        a('f0985268', 'Audio call'),
        a('ca397a48', 'Video call'),
        a('c1d4ac84', 'You changed the group photo'),
        a('abc7b032', 'The group photo was changed'),
        a('i263b294', 'You joined the conversation'),
        a('i8d5e62b', function (e) {
          return e.count + ' other people'
        }),
        a('f7204380', 'This Fleet has expired'),
        a('d9de7b58', 'This media is hidden because it’s from someone you don’t follow.'),
        a('f2879f4e', 'This message might include graphic media.'),
        a('b518221e', 'Open image'),
        a('eeaa9f90', 'Open video'),
        a('g2b43664', 'Open GIF'),
        a('d99de549', function (e) {
          return 'Replying to ' + e.name
        }),
        a('f5a07f7c', 'Attachment'),
        a('fd079470', 'This is spam'),
        a('c7a92dca', 'Message OK'),
        a('fb3ccb56', 'Message hidden due to suspicious content'),
        a('c94b7d8a', 'Play voice message'),
        a('eb6f9582', 'Pause voice message'),
        a('b6b4142e', 'This post is hidden because it’s from someone you don’t follow.'),
        a('fda60d78', 'This post might include graphic media.'),
        a('b59a9004', 'Open post'),
        a('daf6bf02', 'Change settings'),
        a('ba60339a', 'Delete for you'),
        a('eb497e08', 'More actions'),
        a('b170974a', 'Add reaction'),
        a('i202bd22', 'Report message'),
        a('f2e5491a', 'Copy message'),
        a('cac1482a', 'React'),
        a('bf2d08ca', 'More reactions'),
        a('ca7a2215', function (e) {
          return 'Your current reaction: ' + e.emoji
        }),
        a('j4bfee22', 'Delete message?'),
        a(
          'faddd3a2',
          'This message will be deleted for you. Other people in the conversation will still be able to see it.',
        ),
        a('f58dff34', 'Something went wrong, and the message wasn’t deleted.'),
        a('ad5a8e8e', 'Sorry! You do not have permission to delete this message.'),
        a('fad48eea', 'Sending...'),
        a('ae7d7a24', 'Message failed to send'),
        a('bbe74f3f', function (e) {
          return 'Yesterday, ' + e.time
        }),
        a('h95f9e77', function (e) {
          return e.reactionCount + ' reaction' + n(e.reactionCount, '', 's')
        }),
        a('j85999ec', 'User Reactions List'),
        a('a2d48779', function (e) {
          return 'Remove your current reaction: ' + e.emoji
        }),
        a('icd0bf34', 'Seen'),
        a('e8bd8fec', 'Sent'),
        a('b2d32fae', 'Seen by everyone'),
        a('a763d33f', function (e) {
          return 'Seen by ' + e.count + ' pe' + n(e.count, 'rson', 'ople')
        }),
        a('d84b485e', 'You followed this account'),
        a('be0c83d8', 'You accepted the request'),
        a('bcc13060', 'Early access'),
        a('e535cae9', function (e) {
          return e.count + ' Follower' + n(e.count, '', 's')
        }),
        a('cf249089', function (e) {
          return 'Joined ' + e.joinDate
        }),
        a('g1f972d7', 'Learn more'),
        a('bb0e37c3', 'Learn more'),
        a('a89e8ab3', 'Learn more'),
        a('d98540eb', 'Learn more'),
        a('j296badb', 'Learn more'),
        a('e45d77f5', 'Learn more'),
        a('h52ca4c4', 'New messages'),
        a('ffde2fdc', 'Loading conversation'),
        a('da878dc0', 'Accept'),
        a(
          'hc52446c',
          'Do you want to participate in this group? They won’t know you’ve seen their request until you accept.',
        ),
        a('f7e1ad65', function (e) {
          return (
            'Do you want to let ' +
            e.senderName +
            ' message you? They won’t know you’ve seen their message until you accept.'
          )
        }),
        a('gdf4b790', 'Leave conversation?'),
        a('bbf83d84', 'This can’t be undone and the conversation history will be deleted from your inbox.'),
        a('ib3fe8aa', 'Block or report'),
        a('gbed8594', 'Blocking will prevent this person from sending you message requests in the future.'),
        a('g9074da4', 'Leave conversation'),
        a('ad63377e', 'Delete conversation'),
        a(
          'h09b49f8',
          'This conversation will be deleted from your inbox. Other people in the conversation will still be able to see it.',
        ),
        a('i6b19b08', 'Report conversation'),
        a('cdb1a05a', 'Let X know about spam or abuse so we can help protect others from accounts like this.'),
        a('d6b11d9c', 'Your direct message failed to send because some media didn’t upload.'),
        a('c64c1884', 'Compose new Message'),
        a('j7d0e836', 'Expand'),
        a('cdcebd22', 'New message'),
        a('a66ac766', 'Loading Direct Messages'),
        a('a846382a', 'Search Direct Messages'),
        a('h845f282', 'Direct Message'),
        a('d7ad7414', 'Message not available'),
        a('ga086a54', 'Image attachment'),
        a('a9cc8cfe', 'Sent a GIF'),
        a('eb3d722e', 'You sent a GIF'),
        a('e5bfe07e', 'Sent a link'),
        a('db53c018', 'You sent a link'),
        a('bf584cd2', 'Sent a photo'),
        a('f80629ba', 'You sent a photo'),
        a('e20b65b0', 'Sent a sticker'),
        a('d30c2d40', 'You sent a sticker'),
        a('a876e58c', 'Sent a video'),
        a('j7d8101a', 'You sent a video'),
        a('dedfd266', 'Sent a voice message'),
        a('h7033cac', 'You sent a voice message'),
        a('i34ec422', 'Shared a post'),
        a('a4939874', 'You shared a post'),
        a('a30a206e', 'Got it!'),
        a('ib4b1b86', 'Introducing pinned conversations'),
        a('bd3ca2ef', function (e) {
          return (
            'Select the actions menu on any conversation to pin it to the top for easy access. You can pin up to ' +
            e.count +
            ' conversation' +
            n(e.count, '', 's') +
            ' at a time.'
          )
        }),
        a('e1c9ec9c', 'Pin conversation'),
        a('e3cfff7c', 'Snooze conversation'),
        a('f398722e', 'Conversation snoozed'),
        a('bdd91964', 'Unpin conversation'),
        a('a8ed0eca', 'Take conversation off snooze'),
        a('jac4eb1e', 'Conversation taken off snooze'),
        a('d88d0790', 'Options menu'),
        a('e4b3f520', 'Pinned conversations'),
        a('ae4d666a', 'All conversations'),
        a('d98e066c', 'Conversation pinned.'),
        a('j302dba8', 'Conversation unpinned.'),
        a('cb367658', 'Conversation failed to pin. Try again.'),
        a('ie9a7e48', 'Conversation failed to pin. Check your connection and try again.'),
        a('hd3927c6', 'Conversation failed to unpin. Try again.'),
        a('f1ac0968', 'Conversation failed to unpin. Check your connection and try again.'),
        a('d571e4f9', function (e) {
          return 'You can only pin ' + e.count + ' conversation' + n(e.count, '', 's')
        }),
        a('a551bf7e', 'You’ll need to unpin one conversation to pin another.'),
        a('b9dae4f4', 'Try a different search term'),
        a('e7fb2028', 'No more results'),
        a('ae111c99', function (e) {
          return 'No results for "' + e.query + '"'
        }),
        a('e8581cce', 'The term you entered did not bring up any results'),
        a('f08940ac', 'Start new message'),
        a('i5d7593a', 'Try searching for people, groups, or messages'),
        a('c94ac69e', 'Groups'),
        a('g2fd3206', 'People'),
        a('fb3c8e74', 'Recent searches'),
        a('fd6150fc', 'Keeping you safer in Direct Messages'),
        a('c7e8a9ee', 'Privacy Policy'),
        a('a676a876', 'Welcome to your inbox!'),
        a('h52877aa', 'Drop a line, share posts and more with private conversations between you and others on X. '),
        a('efe8fda0', 'Write a message'),
        a('bece84b4', 'Your message requests are empty'),
        a('e51be7c1', 'Learn more'),
        a('f041be05', function (e) {
          return e.stringCount + ' pending request' + n(e.count, '', 's')
        }),
        a('a2fad0f3', function (e) {
          return e.stringCount + ' new pe' + n(e.count, 'rson', 'ople') + ' you may know'
        }),
        a('cbddf365', function (e) {
          return e.stringCount + ' pe' + n(e.count, 'rson', 'ople') + ' you may know'
        }),
        a('fac945ad', function (e) {
          return e.stringCount + ' new request' + n(e.count, '', 's')
        }),
        a('b6bd6ae4', 'Current account'),
        a('d577bccd', function (e) {
          return (
            'If you have more than one X account, you can add them and easily switch between. You can add up to ' +
            e.maxAccounts +
            ' accounts.'
          )
        }),
        a('dc65b3e5', function (e) {
          return 'You have reached the limit of ' + e.maxAccounts + ' accounts.'
        }),
        a('bade139e', 'Log out of all accounts'),
        a('ae33b982', 'Log out of all accounts?'),
        a('fa07bf68', 'This will apply to all your accounts across all your browser tabs.'),
        a('f7865ab6', 'Not your account?'),
        a('a35248e4', 'This isn’t my account'),
        a('f794a67c', 'This is my account'),
        a('j79c0ff7', function (e) {
          return 'We’ve removed ' + e.emailAddress + ' from this account'
        }),
        a('fb46383c', 'You cannot remove the email address from your own account.'),
        a('gcfdbc2b', function (e) {
          return 'The email address is no longer associated with the X account ' + e.screenName + '.'
        }),
        a('f351663c', function (e) {
          return '@' + e.screenName
        }),
        a('baaa89c4', function (e) {
          return '' + e.emailAddress
        }),
        a('h75b475c', function (e) {
          return '@' + e.screenName
        }),
        a('a8f0e157', 'notification settings.'),
        a('h1732cde', function (e) {
          return '' + e.emailAddress
        }),
        a('d374a600', function (e) {
          return '@' + e.screenName
        }),
        a('c1d75571', 'Why was your email address associated with an X account that’s not yours?'),
        a('ac71e82f', 'Learn more'),
        a('a0b4541c', 'Something went wrong - but don’t fret, it’s not your fault'),
        a('d35c9eec', 'Account Analytics'),
        a('b15df4b4', 'Times your posts were seen on X'),
        a('e5fe61e0', 'Impressions'),
        a('e623137c', 'Engagement rate'),
        a('d9d34182', 'Posts engagements divided by impressions.'),
        a('aeee0182', 'Profile visits'),
        a('b2bde01a', 'Number of profile views from your posts'),
        a('d5f1e554', 'Link clicks'),
        a('cf573986', 'Number of clicks on any URL in your posts'),
        a('d8abdaa4', 'New followers'),
        a('bc6efc52', 'Number of new followers you gained'),
        a('b1b4d57e', 'Video views'),
        a('bdaf100e', 'Number of video views in your posts'),
        a('j590577e', 'Number of replies you got for your posts'),
        a('ia1da622', 'Number of likes you got for your posts'),
        a('ja42739e', 'Reposts'),
        a('ca6e8de0', 'Number of times your posts were reposted'),
        a('ca826772', 'Media views'),
        a('j43b8f52', 'Number of views your media (GIFs, Images, Videos) got'),
        a('g01559c6', 'Metrics shown for the last 7 days'),
        a('j8ee9ee4', 'Detailed analytics on analytics.twitter.com'),
        a('edb8e792', 'Access your Post Analytics'),
        a('h965157c', 'This page is not supported.'),
        a('cd388852', 'Please visit the author’s profile on the latest version of X to view this content.'),
        a('f88e624e', 'Conversation updated'),
        a('e15e5637', function (e) {
          return 'Last ' + n(e.count, 'hour', e.count + ' hours')
        }),
        a('h5ab8b0e', 'People they follow'),
        a('a0f01bca', 'Click to change time frame'),
        a(
          'he30b16c',
          '"People they follow" expands your results, showing the most-shared articles from the people you follow, plus the people they follow.',
        ),
        a('b0589550', 'Get more news'),
        a('b60e4f78', 'Check it out'),
        a('e950f6e0', 'No articles have been shared in your network.'),
        a('e7dcfb81', 'more accounts'),
        a('g7e3d2a4', 'Space Analytics'),
        a('abebdfae', 'You may only view analytics about Spaces you hosted or co-hosted.'),
        a('fcb205da', 'Live listeners'),
        a('jb088200', 'Recording replays'),
        a('if65328a', 'Tuned in'),
        a('a1a0e6d8', 'Follow host'),
        a('a3c4e396', 'Unfollow host'),
        a('j58e7b00', 'View profile'),
        a('hd908df2', 'Live Spaces'),
        a('fec3c1e0', 'Where live audio conversations happen'),
        a('ce447fcb', function (e) {
          return e.count + ' listener' + n(e.count, '', 's')
        }),
        a('ef7da97f', function (e) {
          return e.count + ' listening'
        }),
        a('a065e7e7', function (e) {
          return 'Happening now: ' + e.spaceTitle
        }),
        a('hd5e7b21', function (e) {
          return e.date + ': ' + e.spaceTitle
        }),
        a('f651e375', function (e) {
          return 'This Space has ended: ' + e.spaceTitle
        }),
        a('i8478ae7', function (e) {
          return 'Play recording: ' + e.spaceTitle
        }),
        a('b2a94e93', function (e) {
          return e.hostSpace + ' · ' + e.descriptionListening + ' · ' + e.descriptionGeneric
        }),
        a('f6432ce5', function (e) {
          return e.hostSpace + ' · ' + e.descriptionGeneric
        }),
        a('e4e811fc', 'Connecting...'),
        a('ba55e824', 'Ended'),
        a('aadbc747', function (e) {
          return 'Co-host' + n(e.hostCount, '', 's')
        }),
        a('hbd6035f', function (e) {
          return 'Speaker' + n(e.speakerCount, '', 's')
        }),
        a('f7dc3b1c', 'This Space has ended'),
        a('c1d15dc0', 'It looks like this Space has been closed.'),
        a('g3e2f3a6', 'Listen anonymously'),
        a('jcdc32f0', 'Start listening'),
        a('e51df2e6', 'Your mic will be off to start'),
        a(
          'e61bdea4',
          'The host is recording this Space. Everyone that speaks will be included in the public recording.',
        ),
        a('d0ebf4f7', 'Learn more'),
        a('d782b808', 'Subscribing has its perks'),
        a('i7f83b8d', 'Learn more'),
        a('fc962610', 'Search for the name of a Space or Host'),
        a('e5b5f091', function (e) {
          return 'No Spaces match "' + e.searchQuery + '"'
        }),
        a('g5812140', 'Why not start one?'),
        a('e8fe1ecb', function (e) {
          return 'There are no ' + e.section + ' Spaces matching "' + e.searchQuery + '"'
        }),
        a('c432d2b2', 'Search for a Space'),
        a('i66136aa', 'Top'),
        a('d39e8b30', 'Add a note'),
        a('dc7a6625', function (e) {
          return 'Writing as ' + e.displayAlias
        }),
        a(
          'g17e4064',
          'Your note will be published using your Community Notes alias, without connections to your X profile.',
        ),
        a('d9b09ee8', 'Be precise — providing links to outside sources is required.'),
        a('b7476596', 'Be precise — providing links to outside sources is encouraged.'),
        a('df6c8292', 'Your explanation'),
        a(
          'ecb4d20c',
          'Your note was not saved, please make sure that you have not previously written a note on this post and try again later.',
        ),
        a('eb5b4a12', 'About Community Notes aliases'),
        a('ja0ee360', 'Choose your alias'),
        a('f7b7c250', 'Choose a Community Notes alias to stay private'),
        a('c6382384', 'Why is Community Notes using aliases?'),
        a('j48ab594', 'Contribute privately'),
        a('bc2399a0', 'Write and rate notes without sharing your X identity.'),
        a('d939cf16', 'Focus on the content'),
        a(
          'a56f0c32',
          'Aliases can help reduce bias by helping contributors focus more on content, and less on authors.',
        ),
        a('d17c59e4', 'Everyone remains accountable'),
        a('i719f8e2', 'You can see contributors’ histories, and everyone is accountable through ratings they earn.'),
        a('a96bb564', 'Choose your Community Notes alias'),
        a(
          'afcdcf84',
          'This alias will be your identity when writing and rating Community Notes. It’s not associated with your X profile.',
        ),
        a('f83d0446', 'Your alias has been saved.'),
        a('ed0e6b2e', 'Start rating notes'),
        a('if4c5e06', 'Welcome to Community Notes!'),
        a('g880a78a', 'Start by rating notes'),
        a(
          'd1be2236',
          'Community Notes relies on contributors like you to help identify helpful notes to show to everyone.',
        ),
        a('af9f2b78', 'Track your Rating Impact'),
        a('af68afc8', 'Your Impact goes up every time you help a note get the status of Helpful or Not Helpful.'),
        a('fb5c5d42', 'Unlock the ability to write notes'),
        a(
          'a1e58cdc',
          'Once your Rating Impact reaches 5 or higher, you’ll unlock the ability to write your own Community Notes.',
        ),
        a('j5f112b4', 'Two of your recent notes currently have the status of Not Helpful.'),
        a(
          'ac34c5e8',
          'Enough contributors, including ones who’ve disagreed with each other in their past ratings, agreed that 2 of your notes are not helpful. Here’s their feedback:',
        ),
        a('ib7886d0', 'See these notes on your profile'),
        a('b0a7d360', 'You’re at risk of being temporarily locked out from writing notes.'),
        a(
          'e473f876',
          'Contributors whose 5 most recent notes with a status of Helpful or Not Helpful include 3 Not Helpful notes have their ability to write temporarily locked.',
        ),
        a('ef490ae8', 'Sources not included or unreliable'),
        a('bf3dc462', 'Sources do not support note'),
        a('heb35e12', 'Incorrect information'),
        a('ib117532', 'Harassment or abuse'),
        a('a7bc3192', 'Cites high-quality sources'),
        a('a26f8dc2', 'Easy to understand'),
        a('cbdef06c', 'Directly addresses the post’s claim'),
        a('faa5f9e8', 'Provides important context'),
        a('gf3b38f4', 'Neutral or unbiased language'),
        a('a50327ea', 'Note not needed on this post'),
        a('h7c59ea2', 'Opinion or speculation'),
        a('d60c0064', 'Typos or unclear language'),
        a('e06416ca', 'Misses key points or irrelevant'),
        a('cff1aa8c', 'Argumentative or biased language'),
        a('c5d55592', 'Offers unique information or context'),
        a('f3e6f0aa', 'Informative'),
        a('hc2b6a7e', 'Nonjudgmental and/or empathetic'),
        a('bbe8b4ac', 'Opinion, speculation, or bias'),
        a('dd1f17ea', 'Off topic'),
        a('if966b54', 'Outdated information'),
        a('fdc2060a', 'You need a higher Impact Score score in order to write notes.'),
        a('edd80858', 'See your profile and score'),
        a('eec24ff6', 'Start rating'),
        a(
          'eb9dc3ec',
          'Contributors like you collectively help identify Helpful notes to be shown as context on posts to keep people informed.',
        ),
        a('f2f61788', 'Unlock the ability to write'),
        a(
          'ca7e11e6',
          'Once your successful rating score reaches 5 or higher, you’ll unlock the ability to write Community Notes.',
        ),
        a('e7beb100', 'See your profile and feedback'),
        a('ee7b8050', 'You are temporarily locked out from writing new notes.'),
        a(
          'f37faf22',
          'Because 3 of your 5 most recent notes with a status of Helpful or Not Helpful are deemed Not Helpful, your ability to write notes is temporarily locked.',
        ),
        a('f6c8613e', 'Feedback from contributors on your notes:'),
        a('fd5c2282', 'Get more note writing tips'),
        a('c23e67ea', 'Unlock your ability to write'),
        a('i0e66c5a', 'Select one'),
        a('j8e3e3be', 'Select at least one'),
        a('f1e851f0', 'Enter an explanation'),
        a('ff5dcac8', 'Your explanation is too long'),
        a('b47b5a16', 'All fields are required. Please make sure you’ve answered all questions.'),
        a('g9cffe16', 'Your note doesn’t include a source'),
        a('j6e12b24', 'It contains a digitally altered photo or video'),
        a('eda68484', 'It is digitally altered'),
        a(
          'e198eb8c',
          'Write a note with context that you believe should be shown with the video to keep others informed.',
        ),
        a(
          'a9803d44',
          'Write a note with context that you believe should be shown with the image to keep others informed.',
        ),
        a(
          'g3874520',
          'Write a note with context that you believe should be shown with the post to keep others informed.',
        ),
        a(
          'ac1141aa',
          'Write a note to help other Community Notes contributors understand why this video is not misleading or doesn’t need added context.',
        ),
        a(
          'f99ebcfc',
          'Write a note to help other Community Notes contributors understand why this image is not misleading or doesn’t need added context.',
        ),
        a(
          'h641949e',
          'Write a note to help other Community Notes contributors understand why this post is not misleading or doesn’t need added context.',
        ),
        a('c926cff6', 'Given current evidence, I believe this post is likely...'),
        a('e0ef7a2c', 'Given current evidence, I believe this image is likely...'),
        a('g491d33a', 'Given current evidence, I believe this video is likely...'),
        a('b1b2d004', 'Potentially misleading and would benefit from added context'),
        a('ha9655c2', 'Not misleading'),
        a('ebd2de06', 'Why do you believe this post may be misleading?'),
        a('i865abe8', 'Why do you believe this image may be misleading?'),
        a('add096c6', 'Why do you believe this video may be misleading?'),
        a('c33bc7d4', 'It contains a factual error'),
        a('aadb676c', 'It contains outdated information that may be misleading')
      a('g21a0ef4', 'It is a misrepresentation or missing important context'),
        a('daf354de', 'It presents an unverified claim as a fact'),
        a('d1d2ef84', 'It is a joke or satire that might be misinterpreted as a fact'),
        a('bfee6064', 'Why do you believe this post is not misleading?'),
        a('dfd1f7f0', 'Why do you believe this image is not misleading?'),
        a('b8623176', 'Why do you believe this video is not misleading?'),
        a('g228df26', 'It expresses a factually correct claim'),
        a('h890a3f2', 'It was correct when shared, but is out of date now'),
        a('hf607a0a', 'It is clearly satirical/joking'),
        a('j6ac7742', 'It expresses a personal opinion'),
        a('b1d82aae', 'Did you link to sources you believe most people would consider trustworthy?'),
        a('ae859ee0', 'Is your note about the post or the image?'),
        a('ba84e7f8', 'Is your note about the post or the video?'),
        a('ibb784c6', 'About this specific post'),
        a('a21ecb8c', 'About the image in this post, and should appear on all posts that include this image'),
        a('he0ca8da', 'About the video in this post, and should appear on all posts that include this video'),
        a('abdd8d0a', 'Edit note'),
        a('c097608e', 'Your note doesn’t have an explanation'),
        a('ba25898c', 'Notes that explain their sources have a better chance of being rated helpful.'),
        a('e764d704', 'Notes that link to trustworthy sources have a better chance of being rated helpful.'),
        a('gb67e44c', 'Submit without explanation'),
        a('d6b758a2', 'Submit without source'),
        a('dc1fa12c', 'Community Notes accounts must have verified phone numbers'),
        a(
          'a1752fde',
          'To continue contributing to Community Notes from this account, you’ll need to verify your phone number.',
        ),
        a(
          'hef02710',
          'In addition to verified, your number must be from a trusted phone carrier, and not associated with another Community Notes account.',
        ),
        a('dff9b6bc', 'Verify your phone'),
        a('f051e434', 'Community Notes contributors must have unique phone numbers'),
        a(
          'eaef2f72',
          'It looks like there are multiple Community Notes contributors whose X accounts are associated with this phone number.',
        ),
        a(
          'j78d41b4',
          'In order to continue contributing from this account, you’ll need to remove this phone number from other X accounts.',
        ),
        a('a7c9a176', 'Community Notes accounts must have verified phone numbers from a trusted carrier'),
        a(
          'ec853dfa',
          'To reduce the use of artificially created or virtual phone numbers, phone numbers must be from a trusted carrier.',
        ),
        a('j6e19c58', 'Community Notes values'),
        a('ea580ee2', 'A quick reminder of the Community Notes values:'),
        a('eac7b6ac', 'Contribute to build understanding'),
        a('b0381cfc', 'Act in good faith'),
        a('f0addddc', 'Be helpful, even to those who disagree'),
        a('h7c7b204', 'Help rate existing notes before writing a new one'),
        a('i8cae552', 'By rating you’ll help keep quality in Community Notes high.'),
        a('hd43a218', 'You’ve reached your daily limit for writing notes'),
        a(
          'aaba8ed2',
          'To keep note quality high and prevent spam, there’s a limit to the number of notes contributors can write each day, based on their Writing Impact. Please try again later.',
        ),
        a('a9f4ca9c', 'Community Notes contributors can now see your note'),
        a('eb8f7c0c', 'Other contributors can now rate your note'),
        a('h87c6bd6', 'Other contributors can now see your note'),
        a('gc1a5bce', 'They’ll rate it for helpfulness'),
        a(
          'i0e950ca',
          'If your note earns a status of Helpful, it will start showing as context to everyone who sees the post',
        ),
        a('a047e800', 'Your note is helping other contributors have more context when rating notes'),
        a('cec8a38c', 'If your note earns a status of Helpful, you’ll earn Writing Impact.'),
        a(
          'a377532e',
          'If enough people from different points of view rate it as helpful, it will be shown as context to everyone who sees the post',
        ),
        a('d790fa4e', 'Note statuses aren’t defined by majority rule'),
        a(
          'e90cda68',
          'To identify notes that are helpful to a wide range of people, note statuses require agreement between contributors who have sometimes disagreed in their past ratings.',
        ),
        a('j5a1d85a', 'See your note'),
        a('b25b64d6', 'Your note was submitted!'),
        a('g1428d70', 'Your note is submitted!'),
        a('a4ec7004', 'Here’s what happens now:'),
        a('c4093274', 'About Community Notes after submission'),
        a('bc8746a6', 'Please rate at least one note before writing a new note.'),
        a('d6078a7e', 'Community Notes depends on you ratings to keep quality high.'),
        a('fa6a075a', 'Notes suggesting context to be shown with the post'),
        a('acb7ecae', 'Notes explaining why added context isn’t needed'),
        a('af15cef8', 'Post with notes'),
        a('ad8883f2', 'No notes on this post'),
        a('efd14e7a', 'Loading notes'),
        a('e65b7186', 'People have proposed Community Notes about this post'),
        a(
          'bcc14a68',
          'Community Notes is a program where volunteer contributors add context (called “notes”) to posts they believe could be misleading. Notes below can be rated by contributors, and if they become currently rated helpful, they will shown as context on the post. If a note is currently rated helpful, and you disagree, you can request additional review — meaning more contributors will review the note, and its rating could change. ',
        ),
        a('c21313ba', 'Notes currently rated not helpful'),
        a('c2c40120', 'Show all notes'),
        a('ia596d40', 'See anything you’d like to improve?'),
        a('deff0bde', 'Write a note'),
        a(
          'i8e85ef8',
          'Join Community Notes and gain access to note writing and other features to help create a better-informed world',
        ),
        a(
          'af88892a',
          'These notes are added by Community Notes contributors who believe the post is potentially misleading, and would benefit from additional context.',
        ),
        a(
          'cf8a40a6',
          'Notes are only visible in Community Notes, until they are rated Helpful by enough contributors.',
        ),
        a(
          'g22c8c30',
          'If these notes are rated Helpful by enough contributors, including those who typically disagree in their past ratings, they start showing publicly with the post as added context.',
        ),
        a(
          'jf04b084',
          'These notes are added by contributors who believe the post isn’t misleading and does not need additional context.',
        ),
        a(
          'g5a72e98',
          'These are only visible in Community Notes as additional information to raters, and are not shown as context with the post, even if they earn the status of Helpful.',
        ),
        a('bd7eb888', 'See all notes on this post'),
        a('i97b83f6', 'There was an error submitting your appeal, please try again.'),
        a('i606fc4c', 'About Community Notes appeals'),
        a('b664c554', 'Request additional contributor review'),
        a('ab66e1f2', 'Here’s how it works:'),
        a('e36d807c', 'More Community Notes contributors will receive a request to review and rate this note.'),
        a(
          'd8afb99c',
          'If contributors’ ratings change the status of the note so that it’s no longer currently rated helpful, the note will not be displayed on the post.',
        ),
        a('f9e1090c', 'Reviews are made by contributors, not X.'),
        a('i80c8a84', 'Additional review requested.'),
        a('f93d4391', 'request additional contributor review of this note'),
        a('e457970a', 'Note Details'),
        a('df587b98', 'Note ID'),
        a('h201bdc8', 'Note Author'),
        a('h74b96b0', 'Note submitted '),
        a('ge25848a', 'Current Status'),
        a('fe4fd310', 'Helpful'),
        a('d6db34cc', 'Needs more ratings'),
        a('ce8b505e', 'Not helpful'),
        a('e5be8156', 'Note status computed by open-source algorithm'),
        a(
          'fca23c42',
          'Enough contributors from different perspectives agreed that this note is helpful, so it’s being shown as context on the post.',
        ),
        a('hef420c2', 'This note hasn’t yet been rated by enough contributors from different perspectives.'),
        a('j3af43c4', 'Enough contributors from different perspectives agreed that this note is not helpful.'),
        a('fc6e4594', 'Top tags selected by raters'),
        a('f7427d6f', 'this post'),
        a('aa94541d', 'this post'),
        a('fe821ebb', 'this post'),
        a('i55a9303', 'this post'),
        a('dffa0161', 'this post'),
        a('ddd809d3', 'this post'),
        a('f685ac9b', 'this post'),
        a('ebbec6ad', 'this post'),
        a('c28036d5', 'this post'),
        a('e272836c', 'Delete note?'),
        a('da5a5d8c', 'Once you delete this note, it will be permanently removed from Community Notes.'),
        a('a804a8f4', 'More notes need your help'),
        a('ib9628b8', 'Rate more notes to keep building your Rating Impact'),
        a('bf08be2e', 'Rate more notes now'),
        a('ed5156fa', 'There was an error saving your rating, please try again.'),
        a('i26425d8', 'Somewhat'),
        a('c6e683d0', 'Submit & Agree'),
        a('j6aa6172', 'Delete rating?'),
        a('i4112750', 'This can’t be undone.'),
        a('b3fcaac6', 'Consider opening and reviewing the sources before rating this note'),
        a('e8a33850', 'Please open and review the sources before rating this note'),
        a('ca6f04ec', 'Reviewing the sources cited in notes helps ensure their accuracy. '),
        a('a7338bc2', 'Is this note helpful?'),
        a('bd0b6422', 'Is this a helpful explanation of why added context isn’t needed?'),
        a('ac7f9746', 'What was helpful about it?'),
        a('c7751804', 'What was unhelpful about it?'),
        a('af198630', 'available to the public'),
        a('d39720d3', 'Helpful'),
        a('i7d91dc9', 'Somewhat Helpful'),
        a('c75b7fb4', 'Not Helpful'),
        a('h8335712', 'Your note'),
        a('b9f18eec', 'Currently rated helpful'),
        a('j33f6520', 'Currently rated not helpful'),
        a('d5061d00', 'Not shown on X'),
        a('idc0e9fc', 'Sign up to be a Community Notes contributor'),
        a('a83cccfa', 'Contributors can review note proposals, write notes, track their impact, and more!'),
        a('c2a6ec00', 'Want to join Community Notes?'),
        a('d2470b62', 'Help people stay better informed.'),
        a('ab23a972', 'Follow the conversation'),
        a('c68f3bc0', 'Learn more about our values'),
        a('dfb1f498', 'Feedback'),
        a('a584cfa7', 'Send us a DM @CommunityNotes'),
        a('ca6ae344', 'Community Notes Tab Bar'),
        a('fe27c1e2', 'Notes'),
        a('ff692d64', 'Your profile'),
        a('cb1adfa0', 'Download data'),
        a('ab28945c', 'Contributor profile'),
        a('jaf0d42c', 'Your notes'),
        a(
          'fa9a644a',
          'If 3 of your 5 most recent notes with a status of Helpful or Not Helpful are deemed Not Helpful, your ability to write notes will be temporarily locked.',
        ),
        a(
          'i4014342',
          'Avoid having your writing ability locked. Here’s feedback from contributors about your two notes:',
        ),
        a('j9897a7c', 'Get note writing tips'),
        a(
          'd07b1650',
          'Because 3 of your 5 most recent notes with a status of Helpful or Not Helpful were deemed Not Helpful, your ability to write notes is temporarily locked.',
        ),
        a('ac71a5a0', 'Rate notes that need help'),
        a('h544e3c8', 'Contributors now need to unlock the ability to write notes by earning a Rating Impact of 5.'),
        a('d88c63f6', 'New: Unlock the ability to write notes'),
        a('a490bc51', 'Learn more'),
        a('c94ad3e8', 'send us feedback'),
        a('ee160790', 'Deleted notes'),
        a('b3de4a42', 'Rating Impact'),
        a('a7b0393c', 'Writing Impact'),
        a('id568acc', 'Top Writer'),
        a('e25f9ad6', 'Ratings that helped a note earn the status of Helpful'),
        a(
          'a0697fbc',
          'Nice work! These ratings identified Helpful notes that get shown as context on posts and help keep people informed.',
        ),
        a(
          'a3311a60',
          'These ratings identified Helpful notes that get shown as context on posts and help keep people informed.',
        ),
        a(
          'bbc44f5a',
          'These ratings identify Helpful notes that get shown as context on posts and help keep people informed.',
        ),
        a('b4f21858', 'Ratings that helped a note reach the status of Not Helpful'),
        a(
          'd46b6bc8',
          'These ratings improve Community Notes by giving feedback to note authors, and allowing contributors to focus on the most promising notes.',
        ),
        a('a5e6ba6a', 'Ratings of Helpful on notes that ended up with a status of Not Helpful'),
        a('a22929e4', 'Ratings of Not Helpful on notes that ended up with a status of Helpful'),
        a(
          'b76dd726',
          'These ratings are common and can lead to status changes if enough people agree that a "Helpful" note isn’t sufficiently helpful.',
        ),
        a(
          'j29cc0f2',
          'These ratings are counted twice because they often indicate support for notes that others deemed low-quality.',
        ),
        a('cd4333d0', 'Don’t worry, everyone gets some of these! '),
        a('e9fa53ac', 'Ratings on notes that don’t currently have a status of Helpful or Not Helpful.'),
        a('fc664dee', 'Ratings made after a status was reached'),
        a('f024ec64', 'These ratings can strengthen a note’s status, or help overturn it.'),
        a('e1ee08e6', 'Writing impact'),
        a('je3fc324', 'Your notes that earned the status of Helpful'),
        a('f7358242', 'Notes that earned the status of Helpful'),
        a(
          'j8e9b514',
          'Well done! These notes are now showing to everyone who sees the post, adding context and helping keep people informed.',
        ),
        a(
          'e9e57c5c',
          'These notes are now showing to everyone who sees the post, adding context and helping keep people informed.',
        ),
        a('fee0d8a8', 'These notes get shown on X, adding context to posts and helping keep people informed.'),
        a('iab44364', 'Your notes that reached the status of Not Helpful'),
        a('d8c90438', 'Notes that reached the status of Not Helpful'),
        a(
          'accaa48e',
          'These notes have been rated Not Helpful by enough contributors, including those who sometimes disagree in their past ratings. You can see these notes and the feedback they’ve received on your profile.\nNote statuses can change as more people rate them.',
        ),
        a(
          'fa2156f6',
          'These notes have been rated Not Helpful by enough contributors, including those who sometimes disagree in their past ratings.\nNote statuses can change as more people rate them.',
        ),
        a('d004c768', 'Notes that need more ratings'),
        a('f3d6d6c0', 'Notes that don’t yet have a status of Helpful or Not Helpful.'),
        a('d68a370c', 'Last update: '),
        a('f10aaf3c', 'Note rating tips'),
        a('b9793c9a', 'You haven’t written any notes yet'),
        a('bed66f92', 'Here’s how to start:'),
        a('a3ca686a', 'See tips for writing helpful notes'),
        a('ga8034c6', 'Tap the ••• menu on any post to write a note'),
        a(
          'h4109636',
          'If you think a post is potentially misleading, write a note that adds helpful context to people who may encounter it.',
        ),
        a('ec30e9ac', 'Other contributors will rate the helpfulness of your note'),
        a('e0c42f80', 'If it reaches a status of Helpful, it will be shown as context to everyone who sees the post'),
        a(
          'ife4baaa',
          'Community Notes doesn’t work by majority rule. To identify notes that are helpful to a wide range of people, statuses require agreement between contributors who have sometimes disagreed in their past ratings. This helps prevent one-sided ratings.',
        ),
        a('a0c552ee', 'Your impact will be shown here'),
        a('a4e5ea3c', 'You haven’t rated any notes yet'),
        a('g9a28bde', 'Browse notes that need help'),
        a('dc0046e2', 'Browse the Community Notes home'),
        a('fecae168', 'There, you’ll find notes that need more ratings, and where your rating specifically can help.'),
        a('h525e29e', 'Help find notes that could be helpful to many people'),
        a(
          'f6db7706',
          'The best Community Notes directly address the post’s claim, are written in helpful and clear language, and add sources that a wide range of people would find reliable.',
        ),
        a('f636b582', 'Help find notes that aren’t helpful'),
        a(
          'f58f4f62',
          'Rating low quality notes improves Community Notes by giving feedback to note authors, and allowing contributors to focus on the most promising notes.',
        ),
        a('g97a2d6c', 'Learn More'),
        a('cf30af22', 'Did you know?'),
        a(
          'd145b0fa',
          'Note statuses aren’t reached by majority rule. To identify notes that are helpful to a wide range of people, note statuses require agreement between contributors who have sometimes disagreed in their past ratings. This helps prevent one-sided ratings.',
        ),
        a('c20a24cc', 'Congratulations!'),
        a('d01b8fc8', 'You’re a top Community Notes writer.'),
        a(
          'jbe2ad46',
          'Writers with a high Writing Impact and a high proportion of notes with a status of “Helpful” get access to:',
        ),
        a('d2dc3d4c', 'Priority for note alerts'),
        a('heb73816', 'Top Writers’ note proposals are more likely to trigger notifications to get rater’s attention.'),
        a('b760d51a', 'Badge in alias profile'),
        a('ief63e50', 'Top Writers can be identified by a badge in their Community Notes profile.'),
        a('jd6b88ca', 'Notes about media'),
        a(
          'c39bdf5a',
          'Top Writers can write notes about media featured on multiple posts, keeping many more people better informed.',
        ),
        a('efb9a9e0', 'Nothing to see here'),
        a('a1529ce7', 'Learn more'),
        a(
          'f07ed596',
          'Contributors like you collectively help identify Helpful notes to be shown as context on X and keep people informed.',
        ),
        a('h2b5268a', 'Well done! Rate more notes to continue growing your impact.'),
        a('e86c87a0', 'Rate more notes'),
        a('ad98f836', 'Your Rating Impact went negative. Don’t worry!'),
        a('e2d7c914', 'Continue rating notes'),
        a('a5427624', 'Browse the Community Notes home to find notes that need ratings from more contributors.'),
        a('e227a7fa', 'Note statuses can always change'),
        a(
          'eda73c9c',
          'Your ratings will, sometimes, disagree with the status on a note. That’s not a problem! If more contributors agree with you, the status can be overturned, and your impact will change.',
        ),
        a('cfa3b664', 'You can now write Community Notes!'),
        a('j44125ee', 'This contributor hasn’t written any notes yet.'),
        a('da55067c', 'Check this space later!'),
        a('f893c3b8', 'Join Community Notes'),
        a('a701795c', 'No Community Notes yet'),
        a('db08295e', 'Want to join?'),
        a(
          'ha275800',
          'Looks like you’re not a part of the Community Notes pilot program. Join now to help people stay better informed.',
        ),
        a(
          'ce0a213a',
          'To create a note, select the Community Notes icon in any post’s menu. Notes you create will show up here.',
        ),
        a('c87f3cf8', 'Note'),
        a('a5b19492', 'This note does not exist'),
        a(
          'c21d1b2a',
          'Notes reach a status of Helpful or Not Helpful once there is agreement from enough contributors, including people who have sometimes disagreed in their past ratings. This helps ensure notes are helpful to a wide range of people, and prevents one-sided ratings.',
        ),
        a('c7b59cde', 'Community Notes settings'),
        a('c8be1d0d', 'Find out more.'),
        a('e1288bdc', 'Alerts when a note needs help'),
        a('ca14eab4', 'Receive notifications when a Community Note needs your rating.'),
        a('gb2bc3d0', 'I’m all in 🔥'),
        a('c35ebcd2', 'As many as I can help with – up to a few per day'),
        a('ba165b3c', 'Often'),
        a('g72e2a58', 'A few alerts per week'),
        a('idd249e0', 'Sometimes'),
        a('if2e01ee', 'A few alerts per month'),
        a('fdaeaab8', 'There was an error saving your settings, please try again.'),
        a('db4e443a', 'Your settings have been saved.'),
        a('dc11636c', 'Languages you speak'),
        a('f40c7b32', 'Show Community Notes in mobile app navigation'),
        a(
          'j39329ee',
          'As a Premium subscriber, you can customize your navigation in your mobile app’s Settings › Premium › Extras.',
        ),
        a(
          'hf68e810',
          'Community Notes is a program that aims to create a better-informed world. It empowers people on X to collaboratively add helpful notes to posts that might be misleading.',
        ),
        a('jdb52860', 'Contributors write and rate notes'),
        a(
          'c104025c',
          'Contributors are people on X, just like you, who chose to enroll in the pilot to write and rate notes. The more people that participate, the better the program becomes.',
        ),
        a('j7872b8c', 'Only notes that people find helpful appear on a post'),
        a(
          'fb59415e',
          'In order to be shown publicly as context on the post, a note needs to be rated helpful by enough people from different points of view. This approach helps avoid bias and manipulation, and helps find notes that are helpful to many people.',
        ),
        a('f9a44022', 'X, the company, doesn’t choose what shows up: the people do'),
        a(
          'gdf4fbb2',
          'X, the company, doesn’t write, rate or moderate notes (unless they break the X Rules). We believe giving people voice to make these choices together is a fair and effective way to add information that helps people stay better informed.',
        ),
        a('cc720e6a', 'Community Notes is built on data transparency'),
        a('j2fcd33a', 'Data includes contributions up until'),
        a(
          'd4a6b322',
          'All Community Notes data are published here daily, so people have free access to analyze it, identify problems, and spot opportunities to make Community Notes better. We can’t wait to learn with you.',
        ),
        a('c359263a', 'Learn how to use and analyze Community Notes data '),
        a('b8a27fe2', 'in our guide'),
        a('j1c99e00', 'Notes data'),
        a('i6f69314', 'Ratings data'),
        a('b7e4c114', 'Note status history data'),
        a('d7f19114', 'User enrollment status data'),
        a('h786cd7a', 'Notes data isn’t available yet'),
        a('d0fe8052', 'Ratings data isn’t available yet'),
        a('c0427f94', 'Note status history data isn’t available yet'),
        a('g880d8c0', 'User enrollment status data isn’t available yet'),
        a('c43fb933', 'X Developer Agreement and Policy'),
        a('ed88e742', 'Copy link to Topic'),
        a('h92fe1be', 'Unfortunately, Community Notes is not available to you at this time.'),
        a('f0dc1434', 'Community Notes is currently only available in the U.S.'),
        a('f8fc0b48', 'Create a Folder'),
        a('c8c1fa6e', 'Clear all Bookmarks'),
        a('jf748f40', 'Clear all Bookmarks?'),
        a('d63a211a', 'This can’t be undone and you’ll remove all posts you’ve added to your Bookmarks.'),
        a('f075b0e8', 'Edit Folder'),
        a('beba2a0e', 'Create a new Bookmark Folder'),
        a('e41c9b4f', function (e) {
          return 'Saved to ' + e.bookmarkFolderName
        }),
        a('h18f86a4', 'Delete Folder'),
        a('f4ea967a', 'Folder has been deleted'),
        a('b670aa62', 'Folder Name'),
        a('aece5462', 'Folder name has been updated successfully'),
        a('e3299b94', 'Something went wrong. Try updating that folder again in a minute.'),
        a('c09ea714', 'Something went wrong. Try deleting that folder again in a minute.'),
        a('gee78816', 'Bookmark folder names cannot exceed 25 characters'),
        a('h9a5daa2', 'Delete Folder?'),
        a('ac9d5f56', 'Your posts will still be saved in the "All Bookmarks" folder'),
        a('i6e7e298', 'Create'),
        a('a0ea2fa6', 'Name field cannot be empty'),
        a('eec37eac', 'Bookmark Folder with that name already exists'),
        a(
          'fce0c59e',
          'Failed to parse the animation JSON. Please check the format of the JSON in your animation file and try again.',
        ),
        a('g0eea6c2', 'Failed to read the animation JSON file. Please try to open the file again.'),
        a('ae58026a', 'Open a Branded Like .json file to preview'),
        a('e3aac82a', 'Loading Broadcast'),
        a('hd0bc1eb', function (e) {
          return e.name + ' is live'
        }),
        a('bea1f26b', function (e) {
          return e.name + ' was live'
        }),
        a('i0ed3f4e', 'Event image'),
        a('icfd32c2', 'Say something...'),
        a('fc82a896', 'This broadcast has ended'),
        a('ea58dbd0', 'This broadcast has not started'),
        a('h73b9cc0', 'Your message was not sent because you are not currently connected to the chat'),
        a('h5e38204', 'Chat'),
        a('cb5b6784', 'Limited by Broadcaster'),
        a('a3fec810', 'Subscribe to Premium to chat'),
        a('eba27300', 'Only accounts the broadcaster follows can chat'),
        a('efc7a76f', function (e) {
          return 'Only accounts ' + e.broadcasterUsername + ' follows can chat'
        }),
        a('e7a74d26', 'Subscribe to the broadcaster to chat'),
        a('a1985b4b', function (e) {
          return 'Subscribe to ' + e.broadcasterUsername
        }),
        a('cbae35fa', 'Report Broadcast'),
        a('fd12ab58', 'Collection posts'),
        a('a226497c', 'Create a new Community'),
        a('d7346632', 'You haven’t joined any Communities yet'),
        a('b732a4cc', 'When you do, you’ll see their posts here.'),
        a('e50e1bb0', 'Welcome to Communities'),
        a('i6829daa', 'Communities are moderated discussion groups where people on X can connect and share.'),
        a('fc5c6914', 'Meet others with your interests'),
        a('ad211086', 'Talk to people who care about the same things you do.'),
        a('edef4c82', 'Post directly to a Community'),
        a('h785a8b0', 'Your posts are shared with other Community members — not your followers.'),
        a('h3bb8068', 'Get backup when you need it'),
        a('a709f8f8', 'Admins and moderators help manage Communities and keep conversations on track.'),
        a('c8d33380', 'New items'),
        a('cb6adb10', 'Discover Communities'),
        a('df362964', 'Find Communities'),
        a('dfd5031f', function (e) {
          return e.newTweets + ' new post' + n(e.newTweets, '', 's')
        }),
        a('ha4bb8a9', function (e) {
          return e.reportedTweets + ' report' + n(e.reportedTweets, '', 's')
        }),
        a('caf003b3', function (e) {
          return e.memberRequests + ' request' + n(e.memberRequests, '', 's')
        }),
        a('hb01fe46', 'When you do, you’ll see them here.'),
        a('c170a564', 'The term you entered did not bring up any results. Try a different search term.'),
        a('fbf01e52', 'Search Communities'),
        a('dc6ce7b4', 'Members'),
        a('ga2aa43c', 'Moderators'),
        a('b139b54a', 'Invite members'),
        a('cf4898a0', 'Search for people'),
        a('g30bc699', function (e) {
          return 'View @' + e.screenName + ' profile'
        }),
        a('e585d844', 'Add to mod team'),
        a('cab7c6f8', 'Add to the mod team?'),
        a('e96d5255', function (e) {
          return '@' + e.screenName + ' is now a moderator.'
        }),
        a('f348a395', function (e) {
          return 'We can’t add @' + e.screenName + ' to the mod team right now. Please try again later.'
        }),
        a('c3a1aebe', 'Remove from mod team'),
        a('c273c8a6', 'Remove from mod team?'),
        a('c0eb2a53', function (e) {
          return '@' + e.screenName + ' is no longer a moderator.'
        }),
        a('a5808125', function (e) {
          return 'We can’t remove @' + e.screenName + ' from the mod team right now. Please try again later.'
        }),
        a('cdd87524', 'No one’s here yet'),
        a('cca51910', 'When people join this Community, you’ll see them here.'),
        a('c9d56b72', 'Tell us a little about your Community. You can always change these details later.'),
        a('c1ad5a12', 'Looks like we’re having trouble creating your new Community. Please try again later.'),
        a('f713fbd2', 'Membership'),
        a('d1fa71fc', 'Approval question (optional)'),
        a('a0a16d38', 'Anyone can join and/or be invited to the Community.'),
        a('ce0523a8', 'Restricted'),
        a(
          'i1aad6ec',
          'People must ask to join, and the mod team must approve those requests. People invited by the mod team are automatically approved.',
        ),
        a('c85960a0', 'Allow members to issue invitations'),
        a('ca373cd2', 'People invited by existing members are automatically approved.'),
        a(
          'dfdcc6b4',
          'Control who can join your Community. Keep in mind all Communities are visible to everyone on X.',
        ),
        a('h3e55b40', 'Community name'),
        a('dd71d9c9', function (e) {
          return (
            'Name must be between ' +
            e.minCharacterCount +
            ' and ' +
            e.maxCharacterCount +
            ' characters and can’t include hashtags or @usernames'
          )
        }),
        a('cf65e56b', function (e) {
          return 'Name must be between ' + e.minCharacterCount + ' and ' + e.maxCharacterCount + ' characters'
        }),
        a('d936eeca', 'Names can’t include hashtags or @usernames.'),
        a('e2df7cf2', 'Community purpose'),
        a('be9bb312', 'A strong purpose describes your Community and lets people know what to expect'),
        a('e988475f', function (e) {
          return 'Purpose must be between ' + e.minCharacterCount + ' and ' + e.maxCharacterCount + ' characters'
        }),
        a('gcddfba8', 'Approval question'),
        a(
          'hf86d862',
          'When users request to join, they can answer this question. Their response will be shown with their request. You may remove the question by leaving it blank.',
        ),
        a('i88b7305', function (e) {
          return 'Question must be less than ' + e.maxCharacterCount + ' characters'
        }),
        a('dce5e1b4', 'Admin tools'),
        a('c5d8c93e', 'Moderator tools'),
        a('c8c7f9fc', 'Review needed'),
        a('a87df2ee', 'Community management'),
        a('d755f47d', function (e) {
          return e.count + ' new post' + n(e.count, '', 's') + ' to review'
        }),
        a('efc26607', function (e) {
          return e.memberCount + ' member' + n(e.memberCount, '', 's')
        }),
        a('adfcc3ce', 'Add, delete, or edit rules'),
        a('d0330d9c', 'View rules'),
        a('fd67f7c8', 'Edit Community name, purpose, and more'),
        a('gc00d212', 'Support and resources'),
        a('g0cbfc50', 'Useful guide for Community moderation'),
        a('h6ebcfca', 'Show this Community on your profile'),
        a('c0fa0634', 'Spotlight your Community'),
        a('da035fd5', function (e) {
          return 'New' + e.ttc_c9s_spotlight_header
        }),
        a('h41224f8', 'Spotlight your Community on your profile'),
        a(
          'b18e94b2',
          'Switch to a professional profile to show a Community on your profile, access audience analytics, and more.',
        ),
        a('dc716b1c', 'Community list'),
        a('c3e2dda6', 'Add or remove a Community list'),
        a('c6ea29a2', 'Leave moderation team'),
        a('a6e13fac', 'Are you sure you want to leave the mod team?'),
        a(
          'e538848c',
          'You’ll no longer have access to the moderation tools. If you change your mind, you’ll have to be invited as a moderator again.',
        ),
        a('j49e6aa2', 'Yes, I want to leave'),
        a('dde5f323', function (e) {
          return e.count + ' new member request' + n(e.count, '', 's') + ' to review'
        }),
        a('e983404a', 'Pinned hashtags'),
        a('j8af8eaa', 'Membership type'),
        a('d5f01116', 'Purpose'),
        a('c3c04b70', 'Color theme'),
        a('f4a98e9e', 'Community information'),
        a('ab1069de', 'Delete Community'),
        a(
          'h09d0920',
          'This can’t be undone. Post authors can still see their own posts, but all posts will be excluded from Search results.',
        ),
        a('i27eb0b7', function (e) {
          return '' + e.communityName
        }),
        a('a49f884e', 'Community Banner'),
        a('ea965b82', 'Edit Community Banner'),
        a('j35d3ad6', 'Remove and replace'),
        a('f1e8fb22', 'Your banner will be removed and replaced with the default banner.'),
        a('e405ec22', 'Looks like we’re having trouble saving your banner image. Please try again later.'),
        a('b7fb6bda', 'Crop Image'),
        a('e71cdf4e', 'Crop Thumbnail'),
        a('ef199198', 'Your settings have been saved'),
        a('ee10aa5a', 'Your settings could not be saved'),
        a('i307a7ca', 'Edit pinned hashtags'),
        a('dc6eca54', 'Hashtag deleted'),
        a('d27de326', 'Pin hashtags to organize your community’s posts on separate timelines'),
        a('d84cc77a', 'Type a hashtag here'),
        a('d22e4cba', 'Hashtags should be unique'),
        a('ca72a540', 'You have reached the maximum number of hashtags allowed'),
        a('bd96bf16', 'Hashtags should have a minimum length of 1 character and a maximum length of 30 characters'),
        a('j27623d4', 'Hashtags should not have spaces or special characters'),
        a('c5d1634e', 'Okay, I understand'),
        a(
          'daedd9fa',
          'This will allow anyone to join your Community. All pending requests to join will be automatically approved.',
        ),
        a('h3c0f1a2', 'Edit Community name'),
        a('cb5e6510', 'Looks like we’re having trouble saving your new name. Please try again later.'),
        a('a8955490', 'Edit purpose'),
        a('ced2292a', 'Looks like we’re having trouble saving your purpose description. Please try again later.'),
        a('ba74c098', 'Edit question'),
        a('bd3e0420', 'Looks like we’re having trouble saving your question. Please try again later.'),
        a('dbda7bec', 'Change theme'),
        a('hcf35d0d', function (e) {
          return 'Save theme as ' + e.themeName
        }),
        a('da48b72c', 'Theme options'),
        a(
          'd94edeb4',
          'Your Community can have up to 10 rules. Clear rules can encourage respectful participation and help keep conversations on track.',
        ),
        a('j560c8ea', 'Add rule'),
        a('a9ba79c0', 'Good rules make good Communities'),
        a(
          'h5482c7a',
          'Give some serious thought to your Community rules. They set the tone and let your members know what’s expected of them.',
        ),
        a(
          'd5033a7a',
          'For example, do you want conversations to stay strictly on topic? Is self-promotion allowed? What about swearing?',
        ),
        a('ee8c43a0', 'The clearer you are up front, the less moderation you’ll have to do later.'),
        a('gaa3239a', 'Looks like we’re having trouble saving your new rule. Please try again later.'),
        a('a67445d6', 'You’re maxed out'),
        a('fcbe0993', function (e) {
          return (
            'Communities can have up to ' +
            e.maxRuleCount +
            ' rules. To add a new one, you’ll need to delete a rule you already have.'
          )
        }),
        a('c66769a4', 'Rule'),
        a('ef02695b', function (e) {
          return 'Rule names must be between ' + e.minCharacterCount + ' and ' + e.maxCharacterCount + ' characters'
        }),
        a('c8242020', 'Description (optional)'),
        a('d32cf5e7', function (e) {
          return 'Descriptions can be up to ' + e.maxCharacterCount + ' characters'
        }),
        a('f8fa00c7', function (e) {
          return 'Descriptions can’t exceed ' + e.maxCharacterCount + ' characters'
        }),
        a('d45ae5e0', 'Don’t forget to tell the Community'),
        a('c1631260', 'Keeping everyone updated about rule changes helps build trust.'),
        a('d3190bde', 'Save rule'),
        a('ifd6e91c', 'Cancel and edit rule'),
        a('h99020e0', 'Edit rule'),
        a(
          'f74a5adc',
          'Communities need at least one rule. You can edit what you have, or add another rule and then delete this one.',
        ),
        a('fbb0ed92', 'Delete this rule'),
        a('hed35472', 'Deleting a rule is permanent and can’t be undone.'),
        a('c8677446', 'Delete rule'),
        a('c3a0d44e', 'Cancel and edit rule instead'),
        a('d703ce9e', 'Add a list to your Community'),
        a(
          'f21f023c',
          'Adding a list to your Community populates the feed with relevant content curated by you. Choose one from your lists below:',
        ),
        a('gbc2cf50', 'Your Lists'),
        a('ef9462fa', 'Don’t have a relevant list?'),
        a(
          'fcda89f4',
          'Create a new list featuring accounts on X that post content relevant to your Community. Keep your list public so it remains visible to the Community.',
        ),
        a('c09609d8', 'Create a List'),
        a('dfddd842', 'Sent via Direct Message'),
        a('a3b3939b', function (e) {
          return '@' + e.screen_name + ' has already been invited'
        }),
        a('db4f0cc9', function (e) {
          return '@' + e.screen_name + ' is already in this Community'
        }),
        a('h252ede6', 'You’ve already used all your invites'),
        a('a5cd93f9', function (e) {
          return '@' + e.screen_name + ' can’t be invited right now'
        }),
        a('ba5a88e4', 'Suggested'),
        a('i6568549', function (e) {
          return 'You have ' + e.remaining_invite_count + ' invite' + n(e.remaining_invite_count, '', 's') + ' left'
        }),
        a('b4f16d00', 'Search for people to invite'),
        a(
          'ja1387a8',
          'Search results will include only your followers and people who allow Direct Messages from everyone.',
        ),
        a('b92a21d9', function (e) {
          return 'No results for ' + e.query
        }),
        a('ae85768c', 'Search results include only your followers and people who allow Direct Messages from everyone.'),
        a('cd133486', 'Invite'),
        a('hb1e378e', 'Invited'),
        a('bcd6bb0e', 'Member'),
        a('addbb11e', 'No new membership requests'),
        a('c38131de', 'You’re all caught up. When new requests come in, you’ll see them here.'),
        a('d7f13fb9', function (e) {
          return '@' + e.screenName + ' was approved and is now a member of your Community'
        }),
        a('a340df67', function (e) {
          return '@' + e.screenName + ' was denied and can’t join your Community'
        }),
        a('jd8aae9d', function (e) {
          return 'Looks like we can’t approve @' + e.screenName + ' right now. Please try again later.'
        }),
        a('i580e149', function (e) {
          return 'Looks like we can’t deny @' + e.screenName + ' right now. Please try again later.'
        }),
        a(
          'b4a38e4e',
          'You’ve blocked this person. If their membership is approved, you’ll need to unblock them to see their posts.',
        ),
        a(
          'f0956736',
          'You’ve muted this person. If their membership is approved, you’ll need to unmute them to see their posts.',
        ),
        a('b7f1e58a', 'Follows you'),
        a('dffb0774', 'Nothing to review right now'),
        a('j2e04b1e', 'Moderators have taken care of all reported posts.'),
        a('fa524058', 'Keep'),
        a('dc7a9436', 'Report post to X'),
        a('ff0f742a', function (e) {
          return e.formattedCount + ' member' + n(e.count, '', 's')
        }),
        a('dca19c06', 'You hid this post'),
        a('dd641764', 'You kept this post'),
        a('jf99d610', 'Community Feedback'),
        a('bbd69672', 'This post was hidden by a moderator for breaking Community rules'),
        a('c730a21c', 'Here’s the rule it broke:'),
        a('a5baa7d2', 'Take a minute to review the rules. They help keep conversations safe and on track'),
        a('icc32e3d', function (e) {
          return 'A moderator removed you from ' + e.communityName + ' for violating this Community rule:'
        }),
        a('c2117be6', 'See that stuff in the nav? 👀'),
        a('c2c4dad4', 'Pick something and it’ll show up here. Go ahead. We’ll wait.'),
        a('a7c2e06d', function (e) {
          return e.communityName + ' Community'
        }),
        a('a94092a2', 'You now have access to moderation tools'),
        a('i1fda798', 'As a Community mod, you can add and remove members. Use your power wisely.'),
        a('b4f877be', 'Community not found'),
        a('f27a2232', 'Search Community'),
        a('e48fbb02', 'Report Community'),
        a('b1614c34', 'About Communities'),
        a('ad87814e', 'Pin to Home'),
        a('c9fe0fc4', 'Unpin from Home'),
        a('j1dcedde', 'Search for posts'),
        a('cc683fba', 'About Community'),
        a('af7c11aa', 'Community Info'),
        a('d8a0b64e', 'Only members can post, like, or reply.'),
        a('fcef2922', 'Anyone can join this Community.'),
        a('c93dd2c8', 'To join this Community, you must ask and be approved.'),
        a('gedb877d', 'All Communities are publicly visible.'),
        a('bf359e0e', 'About your new Community'),
        a(
          'e8fcdd3a',
          'We start you out with some basic settings, but your Community is completely customizable. We’ll get into that next.',
        ),
        a('b37d580e', 'Your Community is Restricted'),
        a(
          'c6d9c07c',
          'All Communities are visible to everyone on X. People must ask to join your Community, or be invited by the mod team or (if allowed) existing members.',
        ),
        a('ea3b38fa', 'Your Community is Open'),
        a(
          'i625c42e',
          'All Communities are visible to everyone on X. Anyone can join and/or be invited to your Community.',
        ),
        a('ca7eeab0', 'Your starter Community rules are'),
        a('acae4034', 'Settings can be changed in Admin Tools'),
        a('e2186ee2', 'Not feeling your settings? No problem. It’s easy enough to change.'),
        a('a0e3ece4', 'Community Detail'),
        a('d601fc20', 'Latest'),
        a('hb9400dc', 'See More'),
        a('b71a08a0', 'Subscriber Community'),
        a('d0574662', 'Set notifications'),
        a('fc16f13a', 'Which notifications do you want?'),
        a('be341c46', 'Community Spaces (audio chats)'),
        a('fbe88a32', 'Community live text chats'),
        a('b551cd1e', 'Pinned posts'),
        a('bec3b8fa', 'Share Community'),
        a('cc7d5b88', 'Invite via DM'),
        a('c66b37fa', 'Community checklist'),
        a('g2768d0e', 'Just a few things to get your Community in good shape for its debut ...'),
        a('b192b58c', 'Dismiss Checklist'),
        a('gd302780', 'Check out the community I created:'),
        a('cbdddb0a', 'Completed'),
        a('h5890b1a', 'Uncompleted'),
        a('b4a6faca', 'Review your rules'),
        a('a01e1a7c', 'Personalize your Community'),
        a('f493480c', 'Post your Community'),
        a('i9b7f6ba', 'Loading posts'),
        a('a1ab9c80', 'There aren’t any posts in this Community yet'),
        a('b32c4fb0', 'Once there are, you’ll see them here.'),
        a('c22e8902', 'Try it out'),
        a('a3466e1c', 'Track conversations with hashtags'),
        a('a524bb7e', 'Hashtags make it easy to create, find, and join themed conversations in the Community.'),
        a('he8db880', 'Doesn’t look like this Community exists'),
        a('cc684fbc', 'It could’ve been deleted, or maybe it never existed at all. Life is full of mysteries.'),
        a('b7218496', 'No hashtags ... yet'),
        a('gc09bcfe', 'Your Community doesn’t have any hashtagged conversations, but you can change that.'),
        a('cf35a990', 'Loading Community Hashtag posts'),
        a('a1c41fe8', 'Community Hashtag posts'),
        a('af05a978', 'Search results will appear here as you type.'),
        a('eb4d2cd0', 'No posts found.'),
        a('ie2efe36', 'Community Search Results'),
        a('b4f8b518', 'Creators for you'),
        a('j231d352', 'Follow all'),
        a('f5c41e22', 'Go to Delegate Settings'),
        a('b9226ec1', 'Signed in as '),
        a('f47b48f6', 'user'),
        a('b2ca74aa', 'You’re about to switch to a delegate account'),
        a('ba77b438', 'Switch accounts'),
        a('g5261e91', function (e) {
          return 'You are now acting as @' + e.screenName + '.'
        }),
        a(
          'cc15a3ea',
          'Remember that this account does not belong to you. As an admin, you can send Direct Messages, publish posts, and create Lists — as well as view them. You can also invite or remove contributors to the account and view post analytics.',
        ),
        a(
          'e406250c',
          'Remember that this account does not belong to you. As a contributor, you can send Direct Messages, publish posts, and create Lists — as well as view them.',
        ),
        a('e6718a62', 'Only the account owner can use this feature'),
        a('ba411b6f', 'send us feedback.'),
        a('f01ee14b', 'send us feedback.'),
        a('dbc85148', 'Select a message'),
        a('a073658c', 'Choose from your existing conversations, start a new one, or just keep swimming.'),
        a('f325afc4', 'Compose a DM'),
        a('f5dc353c', 'Now filtering graphic media'),
        a('daeda054', 'Go to Settings'),
        a(
          'fe1eaa96',
          'Warnings will now be displayed over messages detected to contain potentially graphic media (like nudity, sexual content, or violence). You can always turn this off later in Settings.',
        ),
        a('hc32acba', 'Delete message requests?'),
        a('f9048f58', 'This can’t be undone and selected message requests will be deleted from your inbox.'),
        a('a9d0d7f0', 'Bulk edit'),
        a('eb7de4aa', 'Show additional messages, including those that may contain offensive content.'),
        a(
          'ee8c0c8a',
          'Incoming messages or group messages from people you don’t follow will show up here, and you’ll be able to accept or delete them.',
        ),
        a('ff599112', 'Create a group'),
        a('c602600a', 'Add people'),
        a('fa2033f6', 'Encrypted'),
        a('aa59bb6a', 'Send post separately'),
        a('a2ccb2e8', 'Direct Message sent.'),
        a('f906f464', 'Post shared with group.'),
        a('i8a99aae', 'Post shared separately.'),
        a('hbbc401c', 'Send to group'),
        a('e1bde73f', function (e) {
          return '@' + e.screenName + ' can’t be messaged'
        }),
        a('f7289cd6', 'You have a group conversation selected'),
        a('e6cced4e', 'Only 1 on 1 conversations can be "sent to group". You can still send your message separately.'),
        a('e3e58b6e', 'Conversation info'),
        a('a9ddbb94', 'Group info'),
        a('e62d3c10', 'There’s no account with that name. Please try again.'),
        a('h8403fb6', 'You can’t add them to this conversation right now.'),
        a('ja522ed4', 'You can’t add some of those people to this conversation right now.'),
        a('d87bff5a', 'Your conversation info is loading.'),
        a('cabb453e', 'Group name'),
        a('eb1bb5a2', 'View all people'),
        a('a70436ac', 'Start an encrypted message'),
        a('a7f20223', function (e) {
          return 'Snooze notifications from ' + e.name
        }),
        a('g2f04a6b', function (e) {
          return 'You’ve taken ' + e.name + ' off snooze'
        }),
        a('i453fedf', function (e) {
          return 'Snoozed until ' + e.expiration
        }),
        a('b3dfd51a', 'Snooze mentions'),
        a('cc7c8ce6', 'Disable notifications when people mention you in this conversation.'),
        a('hab58674', 'Mentions disabled'),
        a('e3c6e080', 'Mentions enabled'),
        a('f33ef58a', 'Report conversation as EU illegal content '),
        a('a30e1677', function (e) {
          return (
            'Block @' +
            e.screenName +
            ', @' +
            e.screenName +
            ' will no longer be able to follow or message you, and you will not see notifications from @' +
            e.screenName
          )
        }),
        a('d83414a1', function (e) {
          return 'Unblock @' + e.screenName + '? They will be able to follow you and view your posts.'
        }),
        a('j37c4674', '1 hour'),
        a('je7e1fed', function (e) {
          return 'You’ve put ' + e.name + ' on snooze for 1 hour'
        }),
        a('hf94a2d6', 'Muted for 1 hour'),
        a('fb7a43c6', '8 hours'),
        a('e95c8f8b', function (e) {
          return 'You’ve put ' + e.name + ' on snooze for 8 hours'
        }),
        a('bd54fad2', 'Muted for 8 hours'),
        a('cb5bf56e', '1 week'),
        a('gb7a130b', function (e) {
          return 'You’ve put ' + e.name + ' on snooze for 1 week'
        }),
        a('f6fce0fe', 'Muted for 1 week'),
        a('i78153dd', function (e) {
          return 'You’ve put ' + e.name + ' on snooze forever'
        }),
        a('je9455da', 'Messages are encrypted'),
        a('ac85c6b2', 'An error occurred loading this image'),
        a('b5b0afa4', 'Customize your view'),
        a('ec5880e6', 'These settings affect all the X accounts on this browser.'),
        a('babfa32c', 'Quickly customize your view'),
        a('a2a2f98e', 'See what’s new'),
        a(
          'b4a361c0',
          'You can personalize your color and the size of your text, as well as control your dark mode selection, right now. These settings are only visible to you.',
        ),
        a('c797b44e', 'The latest stories on X - as told by posts.'),
        a('a19ce060', 'Explore is unavailable.'),
        a('f7d1a8e0', 'Android App'),
        a('aab2fae0', 'iOS App'),
        a('eedfd35c', 'Company'),
        a('a35d9c9a', 'Resources'),
        a('i6671128', 'You’ve unlocked more on X'),
        a(
          'd5e4d0a6',
          'You can join the conversation and connect with others more easily. Now you can do the following:',
        ),
        a('a97bc07e', 'Unlock more on X'),
        a(
          'a72188d6',
          'To make X great for everyone, we want to be sure there’s a human behind this account. Help us learn by spending time engaging with your timeline and connecting with others. When we’re confident, you can do the following:',
        ),
        a('a4ee9572', 'Be seen by more people'),
        a('e5f4eac0', 'Your content will be more discoverable. And you’ll appear in search results and trends.'),
        a('c7832a72', 'Connect directly with others'),
        a(
          'i1ccd17a',
          'Send Direct Messages to people, who don’t follow you, without your message being automatically filtered.',
        ),
        a('d9621e06', 'Grok logo - Fun mode'),
        a('b93b9b3a', 'Grok logo'),
        a('fc35b4a2', 'Okay I’ve cancelled your request.'),
        a('b5df32b0', 'Grok something'),
        a('f0d3edba', 'Grok something else'),
        a('eec193de', 'Subscribe to Premium+'),
        a('ad411a68', 'Grok is an early feature and can make mistakes. Verify its outputs.'),
        a('c02e7e3c', 'Loading...'),
        a('af6c4470', 'Something went wrong, please try again.'),
        a('f808a13a', 'Rate limit exceeded. Please wait a few moments then try again.'),
        a('e0481e5a', 'Grok is not supported in your country at this time.'),
        a('bc0a5b5a', 'Grok is currently unavailable, please check back later.'),
        a('ef674976', 'You are not authorized to use this service.'),
        a('f794af9a', 'Fun mode'),
        a('eccf9fea', 'Regular mode'),
        a('b90f4ea2', 'Clear conversation?'),
        a('b25f1310', 'This can’t be undone and you’ll lose your conversation.'),
        a('f5cd3bdc', 'Grok Early Access'),
        a('c49f9104', 'Grok is a new enhanced search feature available to Premium+ subscribers. A few things to note:'),
        a(
          'jbd62da4',
          'This is an early version of Grok. It may confidently provide factually incorrect information, missummarize, or miss some context. We encourage you to independently verify any information.',
        ),
        a('b7a68892', 'Usage'),
        a(
          'j8cdb21a',
          'While we test, we may store your conversations to debug our search as well as provide context to Grok.',
        ),
        a('bcbf5b6e', 'Sharing'),
        a('da2f14cc', 'You are responsible for the conversations you share publicly. Use your common sense.'),
        a('icf7f1a4', 'Copy to clipboard'),
        a('a31e2e68', 'Grok anything'),
        a('bf45172a', 'Start typing or start from a suggestion.'),
        a('e13591c0', 'Example Grok conversation'),
        a('ab1e3e0a', 'Premium+ subscribers can now use our most advanced AI, Grok, on X.'),
        a('f9b89464', 'Clear conversation'),
        a('eb78b77e', 'Fun Mode'),
        a('f1a055ee', 'Regular Mode'),
        a('i6fa5b1e', 'Grok Mode - Fun'),
        a('e4f893be', 'Grok Mode - Regular'),
        a('a71d7584', 'Featured'),
        a('d9c8057a', 'Click here'),
        a('d2b8da2c', 'Software Engineering'),
        a('cd958040', 'Data & Analytics'),
        a('c5760ca2', 'Product'),
        a('d31b4a2a', 'Design'),
        a('f38959a6', 'Sales'),
        a('bc78a26c', 'Operations'),
        a('ec28738e', 'People & HR'),
        a('icb06308', 'Finance & Accounting'),
        a('d0b978ec', 'Legal & Compliance'),
        a('af19cdc2', 'Science & Engineering'),
        a('e4a51fca', 'Medical'),
        a('e8ca78ae', 'Construction & Trades'),
        a('e89b3f04', 'Entry Level'),
        a('h55825dc', 'Junior'),
        a('cc537386', 'Mid-Level'),
        a('jfc3cece', 'Senior'),
        a('e1b683aa', 'Lead'),
        a('c4627fda', 'Manager'),
        a('db75b47c', 'Executive'),
        a('i312f0ce', 'Onsite'),
        a('b4aff05e', 'Hybrid'),
        a('c08b9138', 'Remote'),
        a('ia5d6422', 'Required to be at a physical location'),
        a('h97c7f42', 'Partial requirement to be onsite'),
        a('ibed2d04', 'No requirement to be onsite'),
        a('f508c49c', 'Copy link to job'),
        a('d6825dce', 'Share via Direct Message'),
        a('b9613442', 'Share via Post'),
        a('c791d3fc', 'Share job'),
        a('ef1649e2', 'X - Keyboard shortcuts'),
        a('aefd89c8', 'Navigation'),
        a('cafdefb2', 'Actions'),
        a('dda42cf2', 'Columns & Decks'),
        a('ecb3df70', 'Event posts'),
        a('j32d345e', 'The following may contain sensitive material'),
        a('a01d5a7c', 'This is not available because it was created by someone you blocked'),
        a('cab51f93', function (e) {
          return 'You cannot view this because @' + e.screenName + ' blocked you.'
        }),
        a('eaaca5dc', 'Score'),
        a('abdcd68a', 'Loading Event'),
        a('cfb57adb', function (e) {
          return 'Post about ' + e.hashtag
        }),
        a('b1037710', 'Share your thoughts'),
        a('bb980db0', 'Event Timeline'),
        a('a3b80be6', 'Check back later to see posts about this.'),
        a('ffd929c1', function (e) {
          return 'NEW' + e.ttc_live_event
        }),
        a('c9b302f8', 'Check back later to see the latest products.'),
        a('cfe836d1', function (e) {
          return e.percent + '% off'
        }),
        a('efb132c3', function (e) {
          return e.title + ' - ' + e.description + ' for ' + e.price
        }),
        a('f27deeea', 'Commerce product tile'),
        a('e8166cee', function (e) {
          return '' + e.formattedPrice
        }),
        a('e349147c', 'What’s happening?'),
        a('f2382014', 'LIVE'),
        a('g66c8348', 'REPLAY'),
        a('j1d352d8', 'Reminder set'),
        a('d18909d4', 'Set reminder'),
        a('b0b38774', 'Header media'),
        a('a7a119ec', 'Undock'),
        a('if420852', 'Play recording'),
        a('cfadb00e', 'Listening'),
        a('db4620aa', 'LIVE SPACE'),
        a('c958e692', 'RECORDED SPACE'),
        a('i2c2bfb7', function (e) {
          return e.count + ' listening'
        }),
        a('i3f7ff00', 'Media thumbnail'),
        a('h400d7c2', 'JOIN SPACE'),
        a('be6ef5b4', 'COMING UP'),
        a('f75be4aa', 'Timeline settings'),
        a('d1e0a75f', function (e) {
          return 'For you' + e.noun
        }),
        a('dafd69e9', function (e) {
          return 'Following' + e.noun
        }),
        a('d80a1c37', function (e) {
          return 'Subscribed' + e.noun
        }),
        a('f089620c', 'Your Home Timeline'),
        a('bf17deda', 'Let’s go!'),
        a('defba9a4', 'Welcome to X!'),
        a(
          'c3fbf1da',
          'This is the best place to see what’s happening in your world. Find some people and topics to follow now.',
        ),
        a('a2515900', 'Waiting for posts'),
        a('je23cdb2', 'Posts from people in this List will show up here.'),
        a('ad5a564a', 'Nothing here yet'),
        a('hc99f1de', 'List'),
        a('e7897aa3', 'Community'),
        a('d893c962', 'Lists'),
        a('g96d197b', 'Communities'),
        a('f5edfbde', 'Log out of X?'),
        a('f12b4db5', function (e) {
          return 'Log out of @' + e.screenName + '?'
        }),
        a(
          'ia5ff8b6',
          'You can always log back in at any time. If you just want to switch accounts, you can do that by adding an existing account.',
        ),
        a('ea3750c4', 'This will only apply to this account, and you’ll still be logged in to your other accounts.'),
        a('gc6866f8', 'Logging out'),
        a('f8ad0092', 'We’re sorry, there was an error. Please try logging in again.'),
        a('h2c7767e', 'Your session is no longer valid. Please try logging in again.'),
        a('e83047c2', 'You have entered too many incorrect codes. Please try logging in again.'),
        a(
          'g4b108ee',
          'You have generated too many backup codes. You need to re-enroll in login verification on your phone.',
        ),
        a('a9be9b44', 'Continue to X'),
        a('e55188f0', 'You’re logged in to this account with this browser'),
        a('d55d8fe2', 'Do you want to continue with this account?'),
        a('g806008e', 'Log in with a different account'),
        a('c55f5c9a', 'Something went wrong, but don’t fret — it’s not your fault. Let’s try again.'),
        a('h576d07c', 'Subscribe to unlock the ability to post and engage'),
        a(
          'e8e48a72',
          'New unverified users are required to pay a small annual fee before you’re able to perform any write actions on web, including posting, liking, bookmarking, and replying. This is to reduce bots and spam to make the experience better for everyone. You can still follow accounts and browse X for free.',
        ),
        a('c41e1023', function (e) {
          return e.price + ' / year'
        }),
        a('i61a221c', 'Subscribe & Pay'),
        a('c6614cc0', 'plus any applicable tax'),
        a('f8d3b50a', 'tax inclusive'),
        a('fce91ab4', 'Hmmm - that didn’t work.'),
        a(
          'a235cb76',
          'There was a problem with processing your Not A Bot subscription. Please check your payment information and try again.',
        ),
        a('a8eea654', 'Your purchase was successful.'),
        a('a98ba778', 'Notifications timelines'),
        a('j887d006', 'From likes to reposts and a whole lot more, this is where all the action happens.'),
        a('c06d4306', 'When someone mentions you, you’ll find it here.'),
        a(
          'ge7c661a',
          'Likes, mentions, reposts, and a whole lot more — when it comes from other verified people, you’ll find it here.',
        ),
        a(
          'd3de3b5c',
          'Likes, mentions, reposts, and a whole lot more — when it comes from your subscribers, you’ll find it here.',
        ),
        a('e3f9838d', 'Learn more'),
        a('eba8b1c8', 'Control which conversations you’re mentioned in'),
        a(
          'j745b8a6',
          'Use the action menu — those three little dots on a post — to untag yourself and leave a conversation.',
        ),
        a('c380d684', 'Your report'),
        a('da7cf0d8', 'We flagged these posts as sensitive content'),
        a('a6da21a1', function (e) {
          return e.appName + ' wants to access your X account'
        }),
        a('f4392d00', 'Authorize app'),
        a('ee4dca3c', 'cancel link'),
        a('bb347bbc', 'help center'),
        a('be38d34e', 'To use this App you have to be logged in to X.'),
        a('e087691a', 'You weren’t able to give access to the App. Go back and try logging in again.'),
        a('e4ff75aa', 'Something went wrong. Check your connection and try again.'),
        a('e4f6bd9e', 'Oops, something went wrong. Please try again later.'),
        a('hdf040dd', function (e) {
          return e.percentage + '% complete'
        }),
        a('cea71014', 'We’re loading your contacts...'),
        a('hc72e1fc', 'Please enter a valid email.'),
        a('d5568440', 'Please enter a stronger password.')
      a('d0511fe6', 'This number is already in use with other accounts. Please use another.'),
        a('cd24fe60', 'Please enter a valid phone number.'),
        a('c52be452', 'Yes, remove'),
        a(
          'bcb388a0',
          'This removes any contacts you’ve previously uploaded and turns off address book syncing with X on all your devices. Please be aware that this takes a little time.',
        ),
        a('ec129eb6', 'You have successfully removed your contacts.'),
        a('f1b5048a', 'There was an error removing your contacts.'),
        a('ca86b62c', 'or'),
        a('gf8388fe', 'Country code'),
        a(
          'b60eba9e',
          'Let’s check one thing first. Please confirm you’re not a robot by passing a Google reCAPTCHA challenge.',
        ),
        a('ba939778', 'Are you a robot?'),
        a('d44efc66', 'What’s your name?'),
        a('b4867a18', 'Your full name can’t include the word “Twitter”.'),
        a('j1c3f4b9', function (e) {
          return 'Edit birthdate ' + e.birthdate
        }),
        a('f134915f', function (e) {
          return e.count + ' selected items'
        }),
        a('b8fb87e0', 'View selected topics'),
        a('e854ad27', function (e) {
          return 'Topic - ' + e.title
        }),
        a('b5474bd2', 'Hmmm... something went wrong.'),
        a('ab4b970a', 'Please use the X app to go back and request a new verification email.'),
        a(
          'j6d103b8',
          'Sign up for a X account. From breaking news and entertainment to sports and politics, get the full story with all the live commentary.',
        ),
        a('ca042c78', 'Log in to X'),
        a(
          'ff869362',
          'Log in to X to see the latest. Join the conversation, follow accounts, see your Home Timeline, and catch up on posts from the people you know.',
        ),
        a('f4a654a4', 'View on Foursquare'),
        a('c09de2d4', 'Search timeline'),
        a('f191a2ba', 'Search settings'),
        a('i1801686', 'This is an invalid search query. Please try a different one.'),
        a('accbcc78', 'Updated successfully'),
        a('g2c0144a', 'Verified Organizations'),
        a('ae71ff52', 'You are on the waitlist'),
        a('j6fe39e4', 'We will contact you via email once your account has been approved.'),
        a('c0d13570', 'Affiliates'),
        a('i4dccc18', 'Billing'),
        a('abebf0fa', 'Featured Jobs'),
        a('fc6eae0f', function (e) {
          return 'Jobs (' + e.count + ')'
        }),
        a('bb39aec3', function (e) {
          return 'Featured Jobs (' + e.count + ')'
        }),
        a('b026896a', 'Are you sure you want to delete this job?'),
        a('dde8b306', 'Deleting a job immediately removes it from your profile and jobs list.'),
        a('e0ce628e', 'There was a problem with sending an invitation. Please try again later.'),
        a('ddf35536', 'There was a problem with deleting the invitation. Please try again later.'),
        a('db7144b6', 'There was a problem changing affiliation type. Please try again later.'),
        a('be78e5fa', 'There was a problem removing the affiliate. Please try again later.'),
        a('fa9709ba', 'There was a problem with creating the application. Please try again later.'),
        a('j62f13fc', 'There was a problem updating this job. Please try again later.'),
        a('ff5716fc', 'There was a problem creating this job. Please try again later.'),
        a('jffc425e', 'There was a problem accessing ATS integrations. Please try again later.'),
        a('fd059188', 'There was a problem syncing your jobs. Please try again later.'),
        a('jf1576ba', 'Failed'),
        a('ff985a36', 'Syncing'),
        a('e5b8058c', 'Not synced'),
        a('a86e335a', 'Last synced '),
        a('a511934e', 'Start hiring on X'),
        a('e68d2d16', 'Apply for the Beta'),
        a(
          'f7a37e30',
          'By clicking ‘Apply for the Beta’ you consent to be contacted over email using the business email address associated with this account, upon approval for Beta access.',
        ),
        a('c3f28126', 'Reach a massive audience'),
        a(
          'dec1601e',
          'X has over 528m users. From software engineers to retail sales to forklift operators, your next hire is here.',
        ),
        a('be8393da', 'Feature your most important roles'),
        a('a049efd4', 'Import your jobs quickly'),
        a('d12be15a', 'Connect a supported Applicant Tracking System or XML feed to add your jobs to X in minutes.'),
        a('f58cf1ac', 'Add job'),
        a('d248d75e', 'Get Support'),
        a('c49d8e42', 'Need help? Contact Us'),
        a('ib244b2e', 'Copy email address'),
        a('b36022d1', 'xhiringsupport@x.com'),
        a('b450472c', 'Import jobs'),
        a('aeac3eb4', 'Refresh Jobs'),
        a('a85cda86', 'Add your jobs to get started'),
        a(
          'c04b6472',
          'Import or add your jobs in a few simple steps to start getting more applicants. Your jobs can also be shared with your followers and featured on your company profile.',
        ),
        a('d14c02d0', 'Add jobs manually'),
        a('b12424fc', 'New job'),
        a(
          'ca8df1e2',
          'Create a job and add it to your job list. Each job must have an Application URL where candidates can see more about the job and apply.',
        ),
        a('f4f4dd60', 'Required'),
        a('b2c213e0', 'Character limit exceeded'),
        a('fb146dd2', 'Employment Type'),
        a('d84e9c2a', 'Share the type of work commitment expected for this role.'),
        a('bc8b300c', 'Job Function'),
        a('d1eedb50', 'Help candidates understand the area this role supports.'),
        a('eaf3ce64', 'Team'),
        a('b36cd50e', 'Specify the core team that candidates will work with once hired.'),
        a('jda06238', 'Seniority'),
        a('d3a427ce', 'Select the level of experience required.'),
        a('i7174442', 'Job Description'),
        a(
          'fef0cf02',
          'Provide a detailed job description. Outline the key responsibilities and qualifications to give candidates a clear understanding of the role.',
        ),
        a('b7800bec', 'Pitch the job in 200 characters or less. Shown in posts, recommendations, and search.'),
        a('a5244ece', 'Application URL (Required)'),
        a('g2b553f6', 'Enter the public URL where candidates can apply for this job.'),
        a('c2e77608', 'Job Title (Required)'),
        a(
          'cdf414d4',
          'Used for search and recommendations. Try using industry standard titles to improve your results.',
        ),
        a('e7117ee4', 'Location (Required)'),
        a(
          'c05176ec',
          'If this role is onsite, enter the site location(s). If this role is remote, describe where candidates can be located.',
        ),
        a('fa7d455a', 'Location Type'),
        a('d70c24d4', 'Used to help candidates search for your job.'),
        a('de1c4376', 'Salary Range'),
        a(
          'hf352d42',
          'Add an optional salary range that will be visible to candidates. If you choose not to, be aware of any pay transparency laws in the location you’re hiring for.',
        ),
        a('fcf0ec1c', 'Minimum'),
        a('a36bebf2', 'Maximum'),
        a('ede7d0a2', 'Currency'),
        a('b925c18c', 'Salary Type'),
        a('j3d242ce', 'Invalid range'),
        a('f4d07bd2', 'Include optional details to make it easier for candidates to discover your roles with search.'),
        a('b8cbb51a', 'Job Summary'),
        a(
          'bda6881e',
          'This job has been imported from your Applicant Tracking System (ATS). Please note that only specific fields can be modified.',
        ),
        a('b075c68a', 'Edit job'),
        a('c9cc122b', function (e) {
          return e.feature + ' is included in ' + e.title
        }),
        a('bff35771', function (e) {
          return e.feature + ' is not available for ' + e.title
        }),
        a('i7fbacc4', 'Switch between the available subscription tiers'),
        a('bd40d5b5', function (e) {
          return 'Subscribe & Pay for ' + e.title
        }),
        a('i2c32253', function (e) {
          return e.price + ' / month'
        }),
        a('j6a5b9ff', function (e) {
          return e.price + ' per year billed monthly'
        }),
        a('j617750f', function (e) {
          return e.price + ' per year billed annually'
        }),
        a('a69fd369', function (e) {
          return 'Starting at ' + e.price
        }),
        a('i36a0b6e', 'You can only subscribe on the X iOS app (for now).'),
        a('hc64d5b0', 'Monthly plan'),
        a('ga482a88', 'Annual plan'),
        a('i253b5c6', 'Upgrade & Pay'),
        a('c906ad94', 'Downgrade'),
        a('db5c77e0', 'This is your active subscription'),
        a('h77ef73e', 'Switch to monthly plan'),
        a('d723d44a', 'Switch to annual plan'),
        a('ieafe1c6', 'Confirm your subscription change'),
        a('d7f04bc6', 'Proceed'),
        a('h13f8d8d', 'Purchaser Terms of Service'),
        a('b6cb77eb', 'Terms'),
        a('a5a0a117', 'Purchaser Terms of Service'),
        a('hbf92d6d', 'Terms'),
        a('hcb034c7', 'Purchaser Terms of Service'),
        a('c63a4a83', 'Terms'),
        a('c578c4ca', 'Current plan'),
        a('a6eb5775', 'New plan'),
        a('b47d123d', function (e) {
          return 'SAVE ' + e.percentage + '%'
        }),
        a(
          'j1f5a580',
          'There was a problem with processing your Premium subscription. Please check your payment information and try again.',
        ),
        a('cd9102d4', 'Choose category'),
        a('eb551aea', 'Show category on profile'),
        a('f386777a', 'Switch account type'),
        a('d4b6a6e0', 'Profile Spotlight'),
        a('jb38600c', 'None'),
        a('db483090', 'Switched to Personal account'),
        a('c701200c', 'Switched to Business account'),
        a('acd8da0a', 'Switched to Creator account'),
        a('cb55ecce', 'Switch to Personal account'),
        a('h4aeb984', 'Switch to personal account'),
        a('ada6073a', 'Don’t need professional tools?'),
        a(
          'eb723d4c',
          'Personal accounts don’t have tools like Profile Spotlight and Shopping Manager. You’ll have to set up a new professional account if you want to switch back.',
        ),
        a('hbb1af08', 'Switch to Business account'),
        a('a9b5e3aa', 'No, cancel'),
        a('ia49207a', 'Yes, switch'),
        a('g3f74902', 'Switch to a Business account?'),
        a('f3bcfac0', 'This is best for brands, retail shops, services providers, and organizations.'),
        a('d0c3f02e', 'Switch to Creator account'),
        a('a01e84e0', 'Switch to a Creator account?'),
        a('e8af8ef4', 'This is best for public figures, artists, and influencers.'),
        a('e44eab74', 'Currently not all modules are supported on all X clients'),
        a('ce4185bc', 'More Spotlights coming soon'),
        a('b5aed332', 'No spotlights available'),
        a('g419ecf4', 'Stay on page'),
        a('d3a097a2', 'Yes, discard'),
        a('j1e1cd30', 'Discard your changes?'),
        a('fc779c28', 'Feature spotlight'),
        a('ddee8ae2', 'View all jobs'),
        a('d2a04c68', 'We’re Hiring'),
        a('dc12a126', 'Get directions'),
        a('e2acb642', 'Contact'),
        a('ha9b8035', function (e) {
          return 'Call ' + e.phoneCode + ' ' + e.phoneNumber
        }),
        a('g2244521', function (e) {
          return 'Text ' + e.phoneCode + ' ' + e.phoneNumber
        }),
        a('b44c0205', function (e) {
          return e.day + ' at ' + e.time
        }),
        a('de1123f5', function (e) {
          return 'at ' + e.time
        }),
        a('e2a5bd50', 'Open 24 hours'),
        a('e41a0dc2', 'Closed'),
        a('e0d7da6c', 'Closes'),
        a('i7059f56', 'Opens'),
        a('a7391348', 'No hours available'),
        a('c9eba532', 'Updated hours'),
        a('b5fea270', 'Product carousel'),
        a('h10bb33c', 'Report product?'),
        a('dda5d96a', 'Report product'),
        a('fca46f40', 'Help Center'),
        a('c71a053b', 'click here'),
        a('ie85a7a8', 'Delete your business info?'),
        a('b5348efc', 'No hours'),
        a('db285564', 'Always open'),
        a('g7993eee', 'Custom hours'),
        a('c9ee902a', 'Display map'),
        a(
          'j224a074',
          'All location information provided will be publicly accessible when Location Spotlight is on. Phone and email can be accessed via the Contact button.',
        ),
        a('f448cbcc', 'Optional'),
        a('c16c9568', 'Address'),
        a('i3a38711', 'Google Maps Terms of Service'),
        a('beb66f50', 'Google Privacy Policy'),
        a(
          'e0d47030',
          'Where can your customers reach you? Keep in mind, this information will be publicly available to allow your customers to find you. You can remove it at any time.',
        ),
        a('c7a4adb0', 'Add address'),
        a('cd39daf6', 'ZIP code / postal code'),
        a('gc0df5a6', 'Add ZIP code / postal code'),
        a('c6c16a52', 'City'),
        a('aa8015be', 'Add city'),
        a('b688f53a', 'State / Province / Region'),
        a('a67f5bbc', 'Add state / province / region'),
        a('if92b1b4', 'Add country'),
        a('ffc5590e', 'Invalid city'),
        a('a8fd64d8', 'Search for countries'),
        a('a0abe108', 'Invalid state / province / region'),
        a('j163df8e', 'Invalid address'),
        a('af9b9b78', 'Invalid ZIP code / postal code'),
        a('i373e022', 'Enter email'),
        a('f91751f8', 'This will be visible to the public'),
        a('g33c0564', 'Invalid Email'),
        a('ga71fbf4', 'Business hours'),
        a('ca2ba204', 'Edit custom hours'),
        a('d7b7dbca', 'No hours will be shown on your profile'),
        a('a460e770', 'e.g. parks, beaches, online shopping'),
        a('ddc88bf0', 'Set business hours for each day'),
        a('e9cf3af8', 'Monday'),
        a('d5868a7e', 'Tuesday'),
        a('b5dfdb46', 'Wednesday'),
        a('ab8095a2', 'Thursday'),
        a('e298e6f2', 'Friday'),
        a('ef519654', 'Saturday'),
        a('e9f55db8', 'Sunday'),
        a('j11df0ca', 'Overlapping hours'),
        a('f9f911f4', 'Search time zone'),
        a('d21a4252', 'Add more hours'),
        a('ac6ce1c0', 'From'),
        a('c647aac8', 'To'),
        a('b926e64a', 'Enter website'),
        a('i019c8b6', 'Call'),
        a('eabc6906', 'SMS'),
        a('h24d868c', 'Call & SMS'),
        a('fa64f1fc', 'Select a country code'),
        a('c7d3629a', 'Phone number'),
        a('ce48a958', 'How would you like to be reached?'),
        a(
          'b97705ce',
          'Keep in mind, this phone number will be publicly available for customers to contact you. You can remove it at any time.',
        ),
        a('f7ff19ec', 'Add country code'),
        a('bb7f177a', 'Invalid Phone Number'),
        a('b91d1394', 'Add App'),
        a('d3cd1160', 'Add iOS App'),
        a('f2124008', 'App Store URL'),
        a('dc0d9d6a', 'Add Android App'),
        a('dd1605f0', 'Play Store URL'),
        a('g4098f78', 'Where can I find this?'),
        a('b949cdc6', 'Remove app'),
        a('b4b8a486', 'Select Community'),
        a('jfe04cf6', 'Clear your selection?'),
        a('a14aa8dc', 'This will remove the Community from your Spotlight.'),
        a('cc4add98', 'Choose a Community to preview how it’ll look on your profile page'),
        a('jd3e9ea6', 'You don’t have any Communities'),
        a('daad9741', 'create a Community'),
        a('c46cdabc', 'Advanced Tools'),
        a('f6a2233a', 'Manage permissions across accounts'),
        a('ccb3ca48', 'Business Settings'),
        a('b0ef3100', 'Create rich ad campaigns'),
        a('ff1c5e1a', 'Professional Home'),
        a('f53adc36', 'Drive real world outcomes'),
        a('hc4981d6', 'Profile Spotlights'),
        a('fbce8dbe', 'Find people to follow'),
        a('ae76c624', 'Make more connections'),
        a('ae0383d4', 'Increase engagement and reach more people'),
        a('a1dbe746', 'Boost engagement and reach more people'),
        a('hbd124ae', 'Boost a post'),
        a('hd80bd3e', 'Promote a post'),
        a('fe2b0008', 'Learn how to use X'),
        a('h257d4aa', 'Select a post to promote'),
        a('h030c24c', 'Report an issue'),
        a('c3e6226a', 'Remove member'),
        a('e37836f8', 'Report Detail'),
        a('fb35e52a', 'View Rule'),
        a('e238c590', 'What’s next'),
        a(
          'if218e60',
          'Our team and technology will review your report. If we find a rule violation, we’ll let you know what actions we’re taking.',
        ),
        a('b6dc1984', 'What’s our process?'),
        a(
          'b0a16894',
          'Context matters. We consider the following factors when enforcing our rules (this isn’t a complete list):',
        ),
        a('d4716820', 'Does the reported content target people because of their identity?'),
        a('e899a534', 'How severe is this violation?'),
        a('d9c4e7ae', 'Was the report submitted by the person being targeted?'),
        a('afb51066', 'Creating duplicate reports will not accelerate our process.'),
        a('b7ba712a', 'Violation found'),
        a('d90b8c04', 'No Violation Found'),
        a('c2d0494a', 'Our safety recommendations'),
        a('be46e000', 'Report duplicates'),
        a(
          'e846ae32',
          'Even if the content is deleted, someone might have made a copy or taken screenshots. If you see it on X, please report it so we can remove it.',
        ),
        a('e3647d08', 'Reach out to law enforcement'),
        a(
          'gad89c4a',
          'If you feel like you’re in danger, we recommend you contact local law enforcement. They can reference our guidelines for law enforcement if they have follow-up questions. ',
        ),
        a('h7fa9240', 'United States:'),
        a('fb2ff552', 'National Suicide Prevention Lifeline at 988.'),
        a('bb57e8c0', 'Other countries and regions:'),
        a('b9ce59ba', 'Thanks again for bringing this to our attention.'),
        a('d42899ad', 'International Association for Suicide Prevention.'),
        a('c9853de0', 'Content hidden'),
        a('c197728e', 'Resolved'),
        a('i07c24fa', 'You don’t have any open reports'),
        a('h542c98a', 'See details'),
        a('e6e11d12', 'You don’t have any resolved reports'),
        a('ibf33bae', 'Report duplicates so they can be removed'),
        a('a288ca36', 'guidelines for law enforcement'),
        a('a62c9c34', 'Follow your interests.'),
        a('cf39fca2', 'Hear what people are talking about.'),
        a('j86184fe', 'Join the conversation.'),
        a('ac2035f2', 'Join today.'),
        a('eba1b198', 'Happening now'),
        a('fa811c30', 'Already have an account?'),
        a('a4298bc0', 'X. It’s what’s happening'),
        a(
          'j3f49ff6',
          'From breaking news and entertainment to sports and politics, get the full story with all the live commentary.',
        ),
        a('d1cc8c06', 'Limit unwelcome interactions'),
        a('c1da34c3', function (e) {
          return 'We flagged ' + e.count + ' potentially abusive or spammy account' + n(e.count, '', 's') + '.'
        }),
        a('j85176c1', function (e) {
          return (
            'We flagged more than ' + e.count + ' potentially abusive or spammy account' + n(e.count, '', 's') + '.'
          )
        }),
        a('ga7fce66', 'Turn on Safety Mode'),
        a('g42fd3ae', 'If you think you’re in danger, contact local emergency services.'),
        a('b55f9e0b', 'Preview flagged accounts'),
        a('ed5457da', 'What’s Safety Mode?'),
        a('e75df5c9', function (e) {
          return e.query + ' - Search'
        }),
        a('ac4fb0f4', 'Photos'),
        a('bb967f9e', 'Videos'),
        a('aea62568', 'Search filters'),
        a('gfcfbf8c', 'Your search was saved.'),
        a('a4645d92', 'Your saved search was deleted.'),
        a('b11805af', function (e) {
          return 'See posts about ' + e.query + ' on X. See what people are saying and join the conversation.'
        }),
        a('d610e8c3', function (e) {
          return 'The latest posts on ' + e.query + '. Read what people are saying and join the conversation.'
        }),
        a('j622effe', 'Advanced search'),
        a('i5045e74', 'Anywhere'),
        a('h2388754', 'Near you'),
        a('f9d35b98', 'You can only have 25 saved searches. Delete a search to save a new one.'),
        a('ha925ad4', 'Something went wrong. Try saving your search again in a minute.'),
        a('h0a9931c', 'Something went wrong. Try deleting your search again in a minute.'),
        a('h4912b5e', 'Save search'),
        a('b9bc69ca', 'Delete saved search'),
        a('eb63de70', 'X - Advanced search'),
        a('d3938be8', 'Words'),
        a('e0dded5e', 'Engagement'),
        a('a097f7ba', 'Dates'),
        a('c03f15ca', 'Any language'),
        a('cb334136', 'Links'),
        a('jf1cbcc2', 'Include posts with links'),
        a('gede6f6e', 'Only show posts with links'),
        a('bda44dd4', 'Include replies and original posts'),
        a('ab870904', 'Only show replies'),
        a('b6215680', 'All of these words'),
        a('cceffa5e', 'Example: what’s happening · contains both “what’s” and “happening”'),
        a('f1c5faee', 'This exact phrase'),
        a('ad10780e', 'Example: happy hour · contains the exact phrase “happy hour”'),
        a('a555a3f4', 'Any of these words'),
        a('ee8a2b60', 'Example: cats dogs · contains either “cats” or “dogs” (or both)'),
        a('f51fe348', 'None of these words'),
        a('hb657ad4', 'Example: cats dogs · does not contain “cats” and does not contain “dogs”'),
        a('d10da5da', 'These hashtags'),
        a('f0b52b50', 'Example: #ThrowbackThursday · contains the hashtag #ThrowbackThursday'),
        a('e292598a', 'From these accounts'),
        a('hef790d8', 'Example: @X · sent from @X'),
        a('g2c27394', 'To these accounts'),
        a('d158d9d0', 'Example: @X · sent in reply to @X'),
        a('a10e3230', 'Mentioning these accounts'),
        a('daaf2c72', 'Example: @SFBART @Caltrain · mentions @SFBART or mentions @Caltrain'),
        a('b18366ba', 'Minimum replies'),
        a('f481ba1c', 'Example: 280 · posts with at least 280 replies'),
        a('ib3ddbd4', 'Minimum Likes'),
        a('ef994dac', 'Example: 280 · posts with at least 280 Likes'),
        a('a504ca74', 'Minimum reposts'),
        a('jd9bd944', 'Example: 280 · posts with at least 280 reposts'),
        a('e95b9448', 'General'),
        a('f458a3b2', 'Privacy'),
        a('bdc6f5b8', 'Your account'),
        a('f24266fe', 'Earlybird Settings'),
        a('df483b48', 'Feature switches'),
        a('bd05add8', 'Not a Bot'),
        a('d94f12b6', 'Try searching for notifications, privacy, etc.'),
        a('ba8f6f82', 'Search Settings'),
        a('g931a6e5', function (e) {
          return 'You’re following ' + e.topic
        }),
        a(
          'h3f9027a',
          'You’ll see posts about this in your Home timeline. This Topic will help personalize your experience across X.',
        ),
        a('e241095e', 'Your Topics'),
        a('f8bc75e2', 'your Topics'),
        a('ed827af6', 'Topic is unavailable.'),
        a('d094c720', 'All Topics'),
        a('g3e87c61', function (e) {
          return e.topicName + ' | Topics'
        }),
        a(
          'g02269ba',
          'Follow Topics on X. Topics let you see posts from a number of accounts that are experts or just fans of different topics on X.',
        ),
        a('e80d2509', function (e) {
          return (
            'Follow the ' +
            e.topicName +
            ' Topic on X. You’ll see top posts from a number of accounts that are experts, fans or just tend to talk about ' +
            e.topicName +
            ' on X.'
          )
        }),
        a('e1e5d552', 'Edit your Circle'),
        a('ec13f9cc', 'There isn’t anyone in your Circle — yet'),
        a('dab58e32', 'When you add people, they’ll show up here.'),
        a('f43112a4', 'How it works'),
        a('a4d60c94', 'Something went wrong. We can’t add them to your Circle right now.'),
        a('a1ba3bd8', 'Your Circle is full. You’ve reached the maximum of 150 people in your Circle.'),
        a('ac3fd6e2', 'You don’t have any recommendations — yet'),
        a('eeb4d3f0', 'We’ll suggest people to add to your Circle here.'),
        a('aea3c420', 'No Quotes yet'),
        a('b40a22c0', 'Add your take when sharing someone else’s post and it’ll show up here.'),
        a('f08d8d08', 'Amplify posts you like'),
        a('f0ccff52', 'Share someone else’s post on your timeline by reposting it. When you do, it’ll show up here.'),
        a('fc1acb54', 'No Likes yet'),
        a('e3527230', 'When someone (even you) taps the heart to Like this post, it’ll show up here.'),
        a('i3e8b808', 'Loading users who liked this post'),
        a('c69fd704', 'Loading users who reposted this post'),
        a('f12858d4', 'Liked by'),
        a('fe62cfec', 'Reposted by'),
        a('h1c5d6aa', 'Sent by you'),
        a('h6d45054', 'Sent by all'),
        a('da68fff1', function (e) {
          return e.count + ' Coin' + n(e.count, '', 's') + ' (only visible to you)'
        }),
        a('e35f2534', 'Loading post engagements'),
        a('i60dfa72', 'Post engagements'),
        a('dc604dda', 'Users who liked this post'),
        a('cdd4ef4a', 'Users who reposted this post'),
        a('icc72234', 'Quotes of this post'),
        a('hc35b530', 'No likes yet'),
        a('e0d6a246', 'No Reposts yet'),
        a('i2a26cb4', 'When someone taps the heart to Like this post, it’ll show up here.'),
        a('i9b724e8', 'You will find a list of everyone who quoted this post here.'),
        a('c75cc3ca', 'No similar posts found.'),
        a('a9d8b656', 'Share similar posts'),
        a('i725f07e', 'Copy link to similar posts'),
        a('fc4e5d96', 'You may only view analytics about your own posts.'),
        a('f0336d68', 'Post Analytics'),
        a('ae32e7de', 'This is a promoted post. The number of times this post was seen is private.'),
        a('a10aa36c', 'Help Center'),
        a('d0740558', 'Help Center'),
        a('d2d76dca', 'Help Center'),
        a('b069d89c', 'Audience'),
        a('b6414532', 'The estimated breakdown of the people that have seen your post'),
        a('c61c6624', 'Promoted'),
        a('d267afa2', 'Under 20'),
        a('db81cab0', '20-29'),
        a('f173716e', '30-39'),
        a('ada329e6', '40-49'),
        a('j2950694', 'Above 50'),
        a('a5c91a8e', '18-24'),
        a('cf30cdfa', '25-34'),
        a('gf672f7c', '35-44'),
        a('jf28b41c', '45-54'),
        a('ja78da94', '55-64'),
        a('bcd9cf68', 'Above 65'),
        a('a3c544e8', 'Top countries'),
        a('f05f1838', 'Other / Not specified'),
        a('fa5be588', 'Organic'),
        a('c69069e6', 'Times this post was seen on X'),
        a('dbe9353e', 'Engagements'),
        a(
          'a0615bac',
          'Total number of times a user has interacted with a post. This includes all clicks anywhere on the post (including hashtags, links, avatar, username, and post expansion), reposts, replies, follows, and likes.',
        ),
        a('c72f25a8', 'Follows gained directly from this post'),
        a('acc4cf12', 'Number of profile views from this post'),
        a('c7d0d1c4', 'Number of clicks on any URL in this post'),
        a('b40d33e4', 'Detail expands'),
        a('a4da7724', 'Times people viewed the details about this post'),
        a('c5d4d3a8', 'Cost per follow'),
        a(
          'f56e24f2',
          'Total spend divided by the number of followers, including earned. You only pay when someone follows you',
        ),
        a('g33fd6b1', function (e) {
          return e.percentage + ' from promotion'
        }),
        a('b71059c3', function (e) {
          return e.percentage + ' from non followers'
        }),
        a('b32334a0', 'Accounts Reached'),
        a('h142a79c', 'Number of unique views for this post'),
        a('de4def4e', '% from all promotions to date'),
        a('e3390c1e', 'First 48 hours'),
        a('aead0975', function (e) {
          return (
            'This tracks the number of times this post has been read over the first 48 hours since it was posted. Maximum value is ' +
            e.maxValue +
            ' impressions.'
          )
        }),
        a('ib1f8491', function (e) {
          return e.likeCount + ' like' + n(e.likeCount, '', 's')
        }),
        a('dc0e7f37', function (e) {
          return e.retweetCount + ' repost' + n(e.retweetCount, '', 's')
        }),
        a('d0eeb127', function (e) {
          return e.replyCount + ' repl' + n(e.replyCount, 'y', 'ies')
        }),
        a('db6efeb8', 'Your promotion is running'),
        a('j6daea86', 'Your promotion is paused'),
        a('hf9ed10f', function (e) {
          return e.endTimeString + ' · ' + e.endDateString
        }),
        a('f42a198d', function (e) {
          return e.spentBudget + ' of ' + e.totalBudget + ' spent'
        }),
        a('a63a89fe', 'Your promotion is complete'),
        a('g0877e80', 'Your boosted post package has ended.'),
        a('he737dd1', function (e) {
          return (
            'This post has earned ' +
            e.impressions +
            ' new impression' +
            n(e.impressions, '', 's') +
            ' and got ' +
            e.engagements +
            ' new engagement' +
            n(e.engagements, '', 's')
          )
        }),
        a('e8adeec8', 'Promote again'),
        a('fbb5c37e', 'Boost again'),
        a('b25b0490', 'Boost your post'),
        a('ccffb487', function (e) {
          return (
            'Your post has earned ' +
            e.impressions +
            ' impression' +
            n(e.impressions, '', 's') +
            ' so far. Switch to a professional account to broaden your reach.'
          )
        }),
        a('b8e964dc', 'Get more impressions and grow your brand. Promote this post and broaden your reach.'),
        a('c39d81ba', 'Promote this post'),
        a('e05fc2c0', 'Boost this post'),
        a('jede3014', 'Your promotion is under review'),
        a('b823301e', 'Once it’s approved, your post will be promoted to the audience you selected.'),
        a('a2e48870', 'Review X’s Ads Policy'),
        a('ge538876', 'Metrics for the video you shared'),
        a('ca7e10d8', 'Unique views'),
        a('i611fc96', 'Total number of times this video was viewed across all posts'),
        a('a69cd868', 'Number of unique views for this video'),
        a('f894a688', 'Audience retention'),
        a(
          'ad9d9204',
          'Percentage of time viewers have watched a video they watch before they leave it, and how much of the video they’ve watched.',
        ),
        a('da4b7a70', 'Percentage of viewers that have watched a video up to a given time'),
        a('de2d89a2', 'Watched 25%'),
        a('i92754c2', 'Watched 50%'),
        a('be8ddcc2', 'Watched 75%'),
        a('b01410d6', 'Watched 100%'),
        a('gfb3d8af', function (e) {
          return 'Watched until ' + e.timeLabel
        }),
        a('hb52cc4a', 'Please try again later.'),
        a('fc6cbba2', 'Nothing to see here - yet'),
        a('b80a53c8', 'Once more data is collected, you’ll see that information here.'),
        a('d25dccb6', 'Analytics aren’t available for Circle posts.'),
        a('d948b978', 'You may only promote your own posts.'),
        a('cfcdb4a2', 'Something went wrong. Make sure you’ve disabled any ad blockers.'),
        a('j7a2af7a', 'Don’t want to promote this post?'),
        a('a78bce8e', 'If you leave now this post won’t be promoted.'),
        a('g8844150', 'Don’t promote'),
        a('e7eb3684', 'Daily budget'),
        a('d9f6e3ce', 'Daily budget slider'),
        a('b3954eca', 'Duration in days slider'),
        a('ce665a60', 'Estimated reach is approximate. Actual reach can’t be guaranteed.'),
        a('i0c3b95c', 'The next round is on us!'),
        a('e8702feb', function (e) {
          return 'Get ' + e.couponAmount + ' on us!'
        }),
        a('e44dc579', function (e) {
          return 'Get started now and get ' + e.couponAmount + ' off on your first promotion before ' + e.date + '.'
        }),
        a('hd8df545', function (e) {
          return 'Get started now and get ' + e.couponAmount + ' off on your next promotion before ' + e.date + '.'
        }),
        a('f1d32e41', function (e) {
          return 'Spend ' + e.spendAmount + ' and get ' + e.couponAmount + ' in ad credits.'
        }),
        a('c4d0434b', function (e) {
          return e.dailyBudget + ' per day for ' + e.durationLabel
        }),
        a('dc4a9413', function (e) {
          return e.totalBudget + ' over ' + e.durationLabel
        }),
        a('bad70c09', function (e) {
          return 'Location' + n(e.numLocations, '', 's')
        }),
        a('c133a39b', function (e) {
          return e.minAge + '-' + e.maxAge
        }),
        a('ee5da8f5', function (e) {
          return e.minAge + '+'
        }),
        a('g4bf9cb7', function (e) {
          return e.durationDays + ' day' + n(e.durationDays, '', 's')
        }),
        a('gc3ce5d9', function (e) {
          return 'Estimated reach of ' + e.audienceLow + ' - ' + e.audienceHigh + ' people per day'
        }),
        a('c1778029', function (e) {
          return (
            e.locationsHeading +
            ': ' +
            e.locations +
            e.newlinePlaceholder +
            'Age range: ' +
            e.formattedAge +
            e.newlinePlaceholder +
            'Gender: ' +
            e.gender
          )
        }),
        a('a4ab12b9', function (e) {
          return (
            'Once you’ve spent ' +
            e.spendAmount +
            ' over one or more campaigns, we’ll credit ' +
            e.couponAmount +
            ' directly to your ads account. It may take several days for your credit to be applied.'
          )
        }),
        a('cb51c854', 'Any Gender'),
        a('bb7b39e2', 'Men'),
        a('eb9466d0', 'Women'),
        a('b07cc9f2', 'Region'),
        a('ce309bee', 'Metro'),
        a('cc49d030', 'Postcode'),
        a('c3fca124', 'Boost engagement'),
        a('d4f57cce', 'Grow your followers'),
        a('c6daa762', 'Get more link clicks'),
        a('ca65dcf2', 'Your promoted post is under review'),
        a('e4a4c608', 'Check back soon.'),
        a('db841200', 'Boost engagement, reach more people, and spread the word about your page.'),
        a('hc67be9e', 'Get Started'),
        a('fcc839b6', 'What’s your goal?'),
        a('b679a538', 'Your post includes media'),
        a('cb19a2f0', 'Get more likes, reposts, etc.'),
        a('a2d37164', 'Get more visitors to your site'),
        a('cefad302', 'Add a link to your post'),
        a('b614fad0', 'Make sure your post includes a link.'),
        a('de43b660', 'Payment Methods'),
        a('hb4773a0', 'Add new payment method'),
        a('aa2a3dd4', 'Delete Card'),
        a('b1c5b63c', 'ending in'),
        a('affb5878', 'Confirm Deletion'),
        a('db443ae2', 'Does everything look OK?'),
        a('a96f811e', 'Promotion goal'),
        a('fbd44e96', 'Your budget'),
        a('e36bce64', 'Payment method'),
        a('c602f5b8', 'Total'),
        a('ia83756c', 'Subtotal'),
        a('cc217a04', 'Coupon balance'),
        a('g4f2b588', 'Remaining coupon balance'),
        a('i41612da', 'Create promotion'),
        a('cdae1af0', 'Add tax information'),
        a('ed8bb5a0', 'Add payment details'),
        a('fc640c20', 'Add payment details to claim your coupon'),
        a('be2dc078', 'Sign up and add payment details'),
        a('iaefd4de', 'Sign up and add payment details to claim your coupon'),
        a('e5e42640', 'Hmmm... your coupon didn’t load. Please try again later.'),
        a('e85dfd66', 'A campaign for this post has already been created.'),
        a('a4db098c', 'It looks like we couldn’t create your promotion. Please try again later.'),
        a('ef7e3916', 'Something went wrong. Check your promotion details and try again.'),
        a('c1134966', 'Terms and Advertising Guidelines'),
        a('he45cc43', 'Coupon Terms'),
        a('c9439a82', 'Terms and Advertising Guidelines'),
        a('c672105a', 'Who do you want to reach?'),
        a('e1efbeae', 'Age range'),
        a('c6ff7c10', 'Age range minimum'),
        a('b555fb46', 'Age range maximum'),
        a('j2c03e12', '55+'),
        a('d4e01892', 'Housing, Lending, and Employment Opportunities Ads policy'),
        a('df8d4fa0', 'Select a Gender'),
        a('cc642518', 'Search Locations'),
        a('i0e8c3c6', 'Location results'),
        a('f69ad048', 'Choose a location'),
        a('f3c6c86d', 'Learn more'),
        a('j9f78b42', 'There are no tagged users in this post.'),
        a('cb2054fa', 'Loading users'),
        a('e4ad6bda', 'In this photo'),
        a('cdd4aafe', 'Loading people in conversation'),
        a('aac3fad2', 'People in this conversation'),
        a('a7f66562', 'Loading post'),
        a('h59700fa', 'ImmersiveMediaViewer'),
        a('i86c2940', 'Scrubber'),
        a('h2fcc532', 'Loading history'),
        a('ce374ee0', '@TwitterWrite'),
        a('fe430958', 'Help Center'),
        a(
          'a74821a0',
          'Looks like your payment didn’t go through or is about to expire. Update your payment information to keep your Premium subscription.',
        ),
        a('dad69faa', 'Update your payment method'),
        a(
          'bb55752e',
          'Coins allow you to support creators who post great content. Unused Coins are kept in your balance.',
        ),
        a('ea7ce65f', function (e) {
          return e.count + ' bonus Coin' + n(e.count, '', 's') + ' included.'
        }),
        a('e557f9d2', 'You have reached your Coin balance limit.'),
        a('f89dfa74', 'Best Value'),
        a('e2beba5e', 'Most Popular'),
        a('gafeeb96', 'Buy Coins'),
        a('bc42db1c', 'Cancel anytime. Auto-renews monthly.'),
        a('f1561b06', 'Purchaser Terms'),
        a('fe93ed4a', 'Purchase successful'),
        a('bcb90375', function (e) {
          return 'Your new Coin balance is ' + e.balance + '.'
        }),
        a('ia2eb0c0', 'Purchase failed!'),
        a('c5fb5a1a', 'No jobs'),
        a('c7e11484', 'Your Lists are empty'),
        a('a96208ba', 'You’ll need to create a List before adding someone.'),
        a('d2826908', 'Create a new List'),
        a('he062e8a', 'Pick a List'),
        a('c2fb1e94', 'Only 5,000 accounts can be added to a List.'),
        a('f30edc68', 'Make private'),
        a('h51a2cf6', 'Something went wrong. Try deleting your Banner again in a minute.'),
        a('bb10280e', 'Something went wrong. Try saving your List again in a minute.'),
        a('h8885a22', 'List names cannot exceed 25 characters'),
        a('f8132984', 'When you make a List private, only you can see it.'),
        a('h421e74c', 'Suggested Lists'),
        a('aa62dea8', 'We’re on the lookout'),
        a('e5e4d3aa', 'Check back later to see suggested Lists.'),
        a('c4d7650c', 'Manage members'),
        a('h7f2418c', 'Loading List information'),
        a('b18e5cd2', 'Something went wrong. Try deleting your List again in a minute.'),
        a('cdd73e9c', 'Delete List'),
        a('def8ff62', 'Delete List?'),
        a('j8b9cde8', 'This can’t be undone and you’ll lose your List.'),
        a('e9f3dec4', 'List Search'),
        a('b9192d55', function (e) {
          return e.query + ' - List Search'
        }),
        a('d6a23192', 'Create new List'),
        a('ie256518', 'List search timeline'),
        a('j57a2568', 'List search'),
        a('hc76e8cd', function (e) {
          return 'No Lists matched "' + e.query + '"'
        }),
        a('d872881a', 'Why not create one?'),
        a('j177067a', 'Search Lists'),
        a('g13ea02c', 'Try searching for lists'),
        a('d1461f1e', 'This List is lonely'),
        a('bcbd3416', 'People who follow this List will show up here.'),
        a('b197a56c', 'List followers'),
        a('f0ab07f5', function (e) {
          return 'Members (' + e.memberCount + ')'
        }),
        a('h9ce3406', 'List members'),
        a('dfeaeb26', 'Add to your List'),
        a('a332103e', 'People added to this List will show up here.'),
        a('e2f7dc62', 'Find suggested members'),
        a('gc23cc00', 'Try searching for accounts to see suggestions to add to this List.'),
        a('e3deb126', 'List suggestions'),
        a('eb7b54be', 'Loading Lists'),
        a('a9ca06d2', 'Information'),
        a('a367dc9a', 'You’re seeing latest posts as they happen'),
        a('dd438748', 'You’re seeing top posts first'),
        a('fe7e217c', 'See latest posts'),
        a('ce78b698', 'You’re seeing top posts first. Latest posts will show up as they happen.'),
        a('i5a1628a', 'See top posts'),
        a('f333a93e', 'You’re seeing latest posts first. Top posts show you the best posts.'),
        a('c7294984', 'Report List'),
        a('g6340998', 'This won’t automatically add you back to their Lists.'),
        a('i6da4f7a', 'Share List'),
        a('a062ff80', 'Copy link to List'),
        a('dcdc75a3', function (e) {
          return '@' + e.screenName + '/' + e.listName
        }),
        a('gba95028', 'View posts'),
        a('e79ed125', function (e) {
          return '@' + e.screenName + ' is blocked'
        }),
        a('a2216a79', 'Learn more'),
        a('d2004da3', function (e) {
          return 'You aren’t following @' + e.screenName
        }),
        a('a64512a4', 'Lists timeline'),
        a('i0bcc456', 'When you do, you’ll be able to see their Lists.'),
        a('d8315ca0', 'Lists you’re on'),
        a('e74be9ac', 'Lists they’re on'),
        a('c80cb4e4', 'New List'),
        a('bbcaa24b', function (e) {
          return 'Lists created by @' + e.screenName
        }),
        a('b081cdf7', function (e) {
          return '@' + e.screenName + ' hasn’t created any Lists'
        }),
        a('f5978664', 'When they do, they’ll show up here.'),
        a('d1e5e328', 'When you do, it’ll show up here.'),
        a('h243711c', 'You haven’t created any Lists yet'),
        a('b69e2f71', function (e) {
          return '@' + e.screenName + ' hasn’t been added to any Lists'
        }),
        a('e05568cc', 'When they’re added to a List, it’ll show up here.'),
        a('b86a098a', 'You haven’t been added to any Lists yet'),
        a('h06e09a2', 'When someone adds you to a List, it’ll show up here.'),
        a('gbaa5489', function (e) {
          return 'List memberships for @' + e.screenName
        }),
        a('c203db71', function (e) {
          return 'Loading posts by @' + e.screenName
        }),
        a('c9a1cb5e', 'This account doesn’t exist'),
        a('e7b201de', 'Try searching for another.'),
        a('j162847e', 'Autoblocked by X'),
        a('ca89f440', function (e) {
          return '@' + e.screenName
        }),
        a('ff050533', 'We know we don’t get autoblocks right all the time, so we’re working to improve our detection.'),
        a('e0da6d02', 'What’s Safety Mode?'),
        a('ia457a1a', 'Here are ways to keep your conversations healthy — and avoid getting autoblocked.'),
        a('f5531a44', 'Remember the human'),
        a('b4a7c31b', 'There’s a person on the other end of your post with feelings.'),
        a('aa5fe8ec', 'Avoid repetitive, uninvited replies'),
        a('d5d82dd5', 'They can overwhelm people, even if the content is innocent.'),
        a('afa1bbda', 'Skip the insults, name-calling, and harmful remarks'),
        a('h4a40ee9', 'Even if they seem playful to you, others might find them hurtful.'),
        a('ica87fde', 'You’re blocked'),
        a('c7ec6faf', 'Learn more'),
        a('a2811f96', 'Profile timelines'),
        a('d25805fa', 'Subs'),
        a('b05be0c8', 'Highlights'),
        a('c0f7a722', 'You must be subscribed to Premium to highlight posts on your profile.'),
        a('i3b31136', 'Write Articles on X'),
        a('c80b568e', 'You must be subscribed to Premium to write Articles on X'),
        a('a5defbe8', 'Introducing the About tab, a new place to describe yourself.'),
        a('ieef7656', 'Take a look'),
        a('abb13fc9', function (e) {
          return 'About @' + e.screenName
        }),
        a('e9b67105', function (e) {
          return 'Loading @' + e.screenName + ' about tab details'
        }),
        a('b9891db3', function (e) {
          return 'Posts with replies by ' + e.fullName + ' (@' + e.screenName + ')'
        }),
        a('e1ab545d', function (e) {
          return 'Loading Subscription posts by @' + e.screenName
        }),
        a('ac3f4be9', function (e) {
          return 'Loading Highlights by @' + e.screenName
        }),
        a('da38f955', function (e) {
          return 'Loading Articles by @' + e.screenName
        }),
        a('b7363b66', 'Send a post'),
        a('ce659062', 'Don’t keep your Subscribers waiting'),
        a('f1e98cc2', 'Show off your best posts!'),
        a('d5c743c6', 'Write an Article'),
        a(
          'hb26a1fe',
          'Go on — start posting that exclusive content. All of your Subscription posts will show up here.',
        ),
        a(
          'b7c3572e',
          'To add Highlights to your profile:\n\n1. Find any post you created\n2. Tap the “•••” menu button\n3. Tap “Add/remove from Highlights”',
        ),
        a('i8123550', 'When you publish an Article, it’ll show up here.'),
        a('b786a77d', function (e) {
          return '@' + e.screenName + ' hasn’t posted'
        }),
        a('j7b80397', function (e) {
          return '@' + e.screenName + ' hasn’t posted any Subscription posts yet'
        }),
        a('jbae8c54', 'There are no highlighted posts available.'),
        a('g8fb219e', 'There are no Articles available.'),
        a('f34dfc18', 'When they do, their posts will show up here.'),
        a('h9346040', 'Subscription posts will appear here when posted.'),
        a('i4c3ddc6', 'Articles will appear here when published.'),
        a('e0118142', 'Post now'),
        a('e0c1d871', function (e) {
          return e.fullName + '’s posts'
        }),
        a('c575828f', function (e) {
          return e.fullName + '’s Subscription posts'
        }),
        a('e8300dbb', function (e) {
          return e.fullName + '’s Highlights'
        }),
        a('c46b420d', function (e) {
          return e.fullName + '’s Articles'
        }),
        a('h5a65db7', function (e) {
          return 'Subscription posts by ' + e.fullName + ' (@' + e.screenName + ')'
        }),
        a('g7ccac9d', function (e) {
          return 'Highlights by ' + e.fullName + ' (@' + e.screenName + ')'
        }),
        a('ja6e5d35', function (e) {
          return 'Articles by ' + e.fullName + ' (@' + e.screenName + ')'
        }),
        a('h088ae72', 'Profile posts'),
        a('hbf64b75', function (e) {
          return 'Posts liked by ' + e.fullName + ' (@' + e.screenName + ')'
        }),
        a('a64da953', function (e) {
          return 'Loading Likes by @' + e.screenName
        }),
        a('be3d5b9f', function (e) {
          return '@' + e.screenName + ' hasn’t liked any posts'
        }),
        a('d34b5306', 'When they do, those posts will show up here.'),
        a('bb0e41bc', 'You don’t have any likes yet'),
        a('d3d4a21c', 'Tap the heart on any post to show it some love. When you do, it’ll show up here.'),
        a('d95c3d31', function (e) {
          return e.fullName + '’s liked posts'
        }),
        a('eeb7d696', 'Your likes are private. Only you can see them.'),
        a('h6e91bb1', function (e) {
          return 'Media posts by ' + e.fullName + ' (@' + e.screenName + ')'
        }),
        a('fe38901b', function (e) {
          return 'Loading media by @' + e.screenName
        }),
        a('bc4223a3', function (e) {
          return '@' + e.screenName + ' hasn’t posted media'
        }),
        a('ccc363f6', 'Once they do, those posts will show up here.'),
        a('d1614228', 'Lights, camera … attachments!'),
        a('d7dc8d0a', 'When you post photos or videos, they will show up here.'),
        a('hf761abf', function (e) {
          return e.fullName + '’s media'
        }),
        a('je5311d3', function (e) {
          return 'Affiliates of ' + e.fullName + ' (@' + e.screenName + ')'
        }),
        a('fd0772eb', function (e) {
          return 'Loading Affiliates of @' + e.screenName
        }),
        a('ccf03833', function (e) {
          return 'Affiliates of ' + e.fullName
        }),
        a('f30795d0', 'Opens profile photo'),
        a('a270100c', 'Opens NFT details'),
        a('gd7acb84', 'Set up profile'),
        a('b7636014', 'Message'),
        a('b63c46ed', function (e) {
          return 'Subscribe to @' + e.screenName
        }),
        a('j4e0fd88', 'View more'),
        a('df7cb6d4', 'Professional Categories'),
        a('ec429e79', 'Learn more.'),
        a('a1ea2f12', 'Happy Birthday!'),
        a('g8191e78', 'Today is their birthday!'),
        a('c1b819ba', 'Birthday balloons are shown here today'),
        a('ad7a451e', 'Translate bio'),
        a('f543dbf6', 'Verified phone number'),
        a('cef4e8cf', function (e) {
          return 'Unmute @' + e.screenName + '?'
        }),
        a('h03a094a', 'Posts from this account will now be allowed in your Home timeline.'),
        a('a6e94418', 'You have muted posts from this account.'),
        a('e018b5fa', 'Upgrade to get verified'),
        a(
          'b74bd6c6',
          'This account is verified because it’s notable in government, news, entertainment, or another designated category.',
        ),
        a('e1e0c916', 'This account is verified because it’s subscribed to Premium.'),
        a('eb5d72e4', 'This account has its posts protected. Only their followers can read them.'),
        a('g776ca50', 'Verified account'),
        a('ad465ee8', 'Set primary affiliation'),
        a('d01612d3', function (e) {
          return 'Verified since ' + e.date + '.'
        }),
        a('e14d8719', function (e) {
          return e.year + ' BCE'
        }),
        a('b7caffb7', function (e) {
          return '' + e.name
        }),
        a('d834ab9c', 'Yes, view profile'),
        a('cb339f26', 'Caution: This account has been behaving in an unusual manner'),
        a(
          'hf06085e',
          'You’re seeing this warning because there has been some unusual activity from this account. Do you still want to view it?',
        ),
        a('aa959f36', 'Caution: This account is temporarily restricted'),
        a('jf604336', 'Caution: This profile may include potentially sensitive content'),
        a(
          'c9bfda48',
          'Caution: This profile may include potentially sensitive content. You’re seeing this warning because they use potentially sensitive images or language. Do you still want to view it?',
        ),
        a(
          'g29ebf26',
          'You’re seeing this warning because they post potentially sensitive images or language. Do you still want to view it?',
        ),
        a(
          'jcfb7fba',
          'You’re seeing this warning because they may have potentially violated the X Rules. Do you still want to view it?',
        ),
        a('bd598c70', 'These posts are protected'),
        a('e617164b', 'Learn more'),
        a('ab9f0362', 'View autoblocked posts'),
        a('dbcaaab6', 'This autoblock ends in a few hours.'),
        a('hf162fb7', function (e) {
          return (
            'This autoblock ends in ' +
            e.dayCount +
            ' day' +
            n(e.dayCount, '', 's') +
            ', ' +
            e.hourCount +
            ' hour' +
            n(e.hourCount, '', 's') +
            '.'
          )
        }),
        a('ad7b2b39', function (e) {
          return 'This autoblock ends in ' + e.dayCount + ' day' + n(e.dayCount, '', 's') + '.'
        }),
        a('f19b4073', function (e) {
          return 'This autoblock ends in ' + e.hourCount + ' hour' + n(e.hourCount, '', 's') + '.'
        }),
        a('ha62da97', function (e) {
          return '@' + e.screenName + ' is autoblocked'
        }),
        a('g6645d94', function (e) {
          return '@' + e.screenName
        }),
        a('ifea24ca', function (e) {
          return '@' + e.screenName
        }),
        a('g8475f82', 'Account suspended'),
        a('j5e1cf59', 'X Rules'),
        a('gbf342a4', 'Account Withheld'),
        a('d11934ec', 'Get notified'),
        a('a2cd2b0a', 'Follow and get notified'),
        a('a70bae53', function (e) {
          return 'Now you can get notified every time ' + e.fullName + ' posts.'
        }),
        a('f51a4c29', function (e) {
          return 'Now you can follow ' + e.fullName + ' and get notified every time they post.'
        }),
        a('cfa5e58d', function (e) {
          return 'You’re following ' + e.fullName + ' and will be notified when they post.'
        }),
        a('be3a652d', function (e) {
          return 'You’ll be notified whenever ' + e.fullName + ' posts.'
        }),
        a('g6b54ff6', 'You’re up to date'),
        a('ec5fd35a', 'When someone requests to follow you, it’ll show up here for you to accept or decline.'),
        a('j85d8d90', 'No follow request pending for that user.'),
        a(
          'c3d23f10',
          'Looks like there was a slight hiccup. Don’t worry though, it’s not your fault. Click below to try again.',
        ),
        a('d2613123', function (e) {
          return 'Subscribe - ' + e.price + '/mo'
        }),
        a('c4640fc0', 'Share Subscriptions profile'),
        a('a72064a8', 'Copy link to Subscriptions profile'),
        a('e6c72234', 'Email Sharing Terms'),
        a('b17f0c4b', function (e) {
          return 'You are now Subscribed to @' + e.screenName
        }),
        a('a5634d9a', 'There was an issue with processing the Subscription. Please dismiss this prompt and try again.'),
        a('fe9d3afa', 'Loading Followers'),
        a('ab7fc3ef', function (e) {
          return 'People super following ' + e.fullName + ' (@' + e.screenName + ')'
        }),
        a('j0d17377', function (e) {
          return 'People you know following ' + e.fullName + ' (@' + e.screenName + ')'
        }),
        a('fa9e827f', function (e) {
          return 'People following ' + e.fullName + ' (@' + e.screenName + ')'
        }),
        a('ha979be5', function (e) {
          return 'People followed by ' + e.fullName + ' (@' + e.screenName + ')'
        }),
        a('d28be573', function (e) {
          return 'People subscribed to ' + e.fullName + ' (@' + e.screenName + ')'
        }),
        a('g9da3853', function (e) {
          return 'People subscribed by ' + e.fullName + ' (@' + e.screenName + ')'
        }),
        a('cfd952a1', function (e) {
          return 'Verified accounts following ' + e.fullName + ' (@' + e.screenName + ')'
        }),
        a('fecc696e', 'Verified Followers'),
        a('g0a2fbbe', 'You don’t have any Subscribers yet'),
        a('g65f4bac', 'You don’t have any followers yet'),
        a('c36cfddc', 'Looking for followers?'),
        a('fd275c1a', 'You don’t have any verified followers yet'),
        a('e08bd098', 'You will find a list of everyone who Subscribes to you here.'),
        a('j029a4dc', 'When someone follows you, you’ll see them here.'),
        a(
          'b2b2c6ce',
          'When someone follows this account, they’ll show up here. Posting and interacting with others helps boost followers.',
        )
      function i(e, t) {
        for (var o = 0; o < t.length; o++) {
          var a = t[o]
          ;(a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            'value' in a && (a.writable = !0),
            Object.defineProperty(
              e,
              ((n = a.key),
              (i = void 0),
              'symbol' ==
              _typeof(
                (i = (function (e, t) {
                  if ('object' != _typeof(e) || null === e) return e
                  var o = e[Symbol.toPrimitive]
                  if (void 0 !== o) {
                    var a = o.call(e, t || 'default')
                    if ('object' != _typeof(a)) return a
                    throw new TypeError('@@toPrimitive must return a primitive value.')
                  }
                  return ('string' === t ? String : Number)(e)
                })(n, 'string')),
              )
                ? i
                : String(i)),
              a,
            )
        }
        var n, i
      }
      function r(e, t) {
        return (
          (r = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e
              }),
          r(e, t)
        )
      }
      a(
        'cb1a15c8',
        'Following accounts is an easy way to curate your timeline and know what’s happening with the topics and people you’re interested in.',
      ),
        a('i967b954', 'You will find a list of all your Subscriptions here.'),
        a('a44e403e', 'When a verified account follows you, you’ll see them here.'),
        a('d74ee2e3', function (e) {
          return '@' + e.screenName + ' doesn’t have any followers you know yet'
        }),
        a('ae5749c7', function (e) {
          return '@' + e.screenName + ' isn’t following anyone'
        }),
        a('b5099e33', function (e) {
          return '@' + e.screenName + ' doesn’t have any verified followers.'
        }),
        a('ec251f36', 'When someone you know follows them, they’ll be listed here.'),
        a('f8af4f48', 'Once they follow accounts, they’ll show up here.'),
        a('fd0aad94', 'When someone verified follows this account, they’ll show up here.'),
        a('c1a40fd4', 'View NFT details'),
        a('ef1c2c78', 'Show NFT details'),
        a('gd912af2', 'Hide NFT details'),
        a('e83b141e', 'Verified collection by OpenSea'),
        a('dcbace0c', 'NFT Details'),
        a('d4741cb4', 'Blockchain'),
        a('b748db08', 'Contract Address'),
        a('accae48c', 'Token ID'),
        a('h8fe11ac', 'Token Standard'),
        a('e6aa52aa', 'Creator'),
        a('eb023c94', 'What is an NFT?'),
        a(
          'ad5dfe80',
          'NFTs (short for Non-Fungible Tokens) are digital items that you own. Proof of ownership is stored on a blockchain, a digital database that is publicly accessible.',
        ),
        a('hb7d1bb4', 'More on Opensea'),
        a('c6000492', 'Owner'),
        a('eadbd438', 'Properties'),
        a('f6e2a407', function (e) {
          return 'Allow anyone to see your Subscribed badge when you reply to @' + e.screenName + '’s posts'
        }),
        a('j8dedddd', function (e) {
          return (
            'When you turn this off, @' +
            e.screenName +
            ' and their Subscribers will still see your badge when you reply to @' +
            e.screenName +
            '’s Subscriber-only posts. @' +
            e.screenName +
            ' will always see your badge.'
          )
        }),
        a('c8a513f6', 'Cancel Subscription'),
        a('ea000ec8', 'Already canceled your Subscription?'),
        a(
          'd7b8387e',
          'If you’ve already canceled, there’s nothing more to do. Your Subscription will automatically expire at the end of the billing cycle.',
        ),
        a('f4166d9a', 'Want to cancel your Subscription?'),
        a('b74ff5fc', 'If you cancel, your Subscription will automatically expire at the end of the billing cycle.'),
        a('ee9efbc8', 'Continue to cancellation'),
        a(
          'c5d9c77a',
          'Looks like there was a slight hiccup. Don’t worry though, it’s not your fault. Close this window and try again.',
        ),
        a('jda53c24', 'You can cancel your Subscription through the Apple App Store.'),
        a('g0a7a53e', 'You can cancel your Subscription through the Google Play Store.'),
        a('d1a35ec6', 'Add accounts'),
        a('b437adda', 'Upgrade to paid'),
        a('f1f6c88b', function (e) {
          return 'Accounts (' + e.count + ')'
        }),
        a('b02156b8', 'Invitations'),
        a('gd67d29b', function (e) {
          return 'Invitations (' + e.count + ')'
        }),
        a('daf646e6', 'Please note: you must label accounts appropriately.'),
        a('i3895c32', 'Your account is under review because you changed your X @handle'),
        a('i5f8b628', 'You cannot modify your affiliates until your account is reviewed.'),
        a('e9e663ac', 'Your payment is past due.'),
        a('c3ddd22c', 'terms'),
        a('c9729d8a', 'terms'),
        a('cdcd1d2c', 'Add affiliations to your organization'),
        a('d30ea6f3', function (e) {
          return 'Are you sure you want to remove @' + e.name + '?'
        }),
        a('c2dfbb86', 'Yes, do it'),
        a(
          'ba047f76',
          'Removing an affiliation immediately removes their checkmark and affiliation badge. You will continue to be billed until the end of the month.',
        ),
        a('j26dee0e', 'Remove affiliate'),
        a(
          'e30cbdf0',
          'This affiliate is a Verified Organizations subscriber and must remain an Organization. They cannot be changed to Individual.',
        ),
        a('j3115ce8', 'Individual'),
        a('d8bb1d84', 'Organization'),
        a('e970bdbd', function (e) {
          return e.count + ' invites remaining'
        }),
        a(
          'd5dfaf92',
          'Something went wrong while retrieving your Stripe checkout details. Please contact verified-premium-support@twitter.com if this problem continues.',
        ),
        a('f323d314', 'Resend'),
        a('ac645cde', 'You can always add them again.'),
        a('d12af2dd', function (e) {
          return 'Are you sure you want to remove this invitation to @' + e.screenName + '?'
        }),
        a('ib60b2d5', function (e) {
          return 'Are you sure you want to resend this invitation to @' + e.screenName + '?'
        }),
        a('abd10f16', 'To make changes to your billing details, use the Billing tab in the left hand menu.'),
        a('e979e7d5', 'here'),
        a('f23a997e', 'twitter.com'),
        a('cd30afed', 'click here'),
        a('f30cfcff', 'verified-premium-support@twitter.com'),
        a('c9c3464c', 'Subscription cancellation in progress'),
        a('dd3a293c', 'Your Verified Organization subscription has ended.'),
        a('faa0f956', 'Something went wrong while cancelling your subscription.'),
        a('b28289ea', 'Thanks'),
        a('b36f74ae', 'You will no longer have access to the portal unless you sign up and activate again.'),
        a('ac7ab794', 'We’re sorry to see you go.'),
        a(
          'c9e8d770',
          'You will not be refunded the remaining days left on your subscription before your next billing cycle. You will not be billed after that.',
        ),
        a('f5b352ec', 'Cancel subscription'),
        a('ff0edac0', 'Are you sure you want to cancel your subscription?'),
        a(
          'b39996b8',
          'Canceling Verified Organizations will result in your organization immediately losing its gold checkmark.',
        ),
        a(
          'b0ae7088',
          'In addition, all affiliated accounts will be immediately canceled and lose their gold or blue checkmarks and affiliate badges.',
        ),
        a('dbf9667e', 'I’m sure'),
        a('h2ac0348', 'No, take me back'),
        a('b5447710', 'User not found'),
        a('h94755b8', 'User already selected for invitation'),
        a('bfb5effe', 'User already affiliated'),
        a('c4b9664e', 'Affiliated'),
        a('g0eadcf6', 'Affiliated with another organization'),
        a('a8c81f88', 'Organization Account'),
        a('e5abe772', 'User already has a pending invite'),
        a('e49b97e2', 'Search accounts'),
        a('f002f1d6', 'Send Invite'),
        a('g2a8bae4', 'Add X accounts'),
        a(
          'af7293cc',
          'Invite X accounts to join your organization. If they accept, they will get a checkmark, and your affiliation will be displayed on their profiles.',
        ),
        a(
          'ec0f203e',
          'Once the affiliate has accepted the invite, make sure to update their checkmark to the correct checkmark color.',
        ),
        a('cec08784', 'You have hit the limit for affiliates on this invoice.'),
        a('ab70828f', function (e) {
          return 'Add @' + e.screenName
        }),
        a('d49b389f', 'here'),
        a('jf351704', 'To continue you need to update the affiliate limit on this invoice.'),
        a('ia5a6a40', 'In order to get started, you’ll need to add your payment details.'),
        a('d40d1cc0', 'To continue you need to pay via Stripe.'),
        a('c4a5f614', 'Add Payment Details'),
        a('fa2a280a', 'Update Invoice'),
        a('i7b2f08e', 'Welcome to Verified Organizations'),
        a('g4e18b84', 'You’ve hit your affiliate limit'),
        a('cbe23239', function (e) {
          return 'For purchase orders above ' + e.affiliatesCount + ' affiliates.'
        }),
        a('jd8b2e66', 'Subscribe & pay'),
        a('fc1f43d0', 'Generate invoice'),
        a('g8881c78', 'Proceed to payment'),
        a('g59f8506', 'Note: Accounts that cannot verify as a business or government entity, will not be refunded.'),
        a('a310e476', 'Direct'),
        a('fde6cf98', 'For immediate access to Verified Organizations.'),
        a('fdfbfcb0', 'Invoicing'),
        a('fb4288c9', 'Learn more'),
        a('df8a3cb1', 'Learn more'),
        a(
          'f45d02e8',
          'Something went wrong while setting up your subscription. Please try resubmitting from your activation email.',
        ),
        a('a1c566c0', 'Something went wrong while setting up your subscription. Please resubmit your details.'),
        a('d754c89b', function (e) {
          return 'Spend ' + e.price
        }),
        a('jc99439d', function (e) {
          return 'Get ' + e.price
        }),
        a('c0b24d1d', function (e) {
          return (
            '+ ' +
            e.price +
            ' advertising credit to spend on your organization or any of its affiliates with dedicated support.'
          )
        }),
        a(
          'h46e0fd0',
          '+ advertising credit to spend on your organization or any of its affiliates with dedicated support.',
        ),
        a('da2e5332', 'Find your customers and grow your business'),
        a('bf6b72ac', 'Full Access'),
        a('e5bfb7e9', 'Learn more'),
        a('d470c67b', 'Learn more'),
        a('cb2c201b', 'Learn more'),
        a('e2e8d8e5', 'Purchaser Terms of Service'),
        a('efc32bf4', 'Gold checkmark'),
        a('c8537dc2', 'Priority support'),
        a('j322f4ba', '2x boost'),
        a('ec688286', 'Affiliations'),
        a('dd7bceb4', 'Reach more customers organically, affiliate your network, or find your next hire.'),
        a('a011c160', 'Try advertising and grow your business with priority support and ads credits.'),
        a('d23a7158', '2x Organic Reach'),
        a('d49357c8', 'You and your affiliate’s posts will be seen by more people.'),
        a('e99e9416', 'Affiliates Badges'),
        a('a3711a52', 'Let everyone know who’s on your team.'),
        a('b16c85de', 'Feature critical roles on your company profile.'),
        a('bad7f00e', 'Premium Support'),
        a('jdc38226', '30 minute average response times for any escalation.'),
        a('b6992f20', 'All the features of Premium+ and more'),
        a('a8314f5b', 'here.'),
        a('d47c0c7c', 'Who are you?'),
        a('hbd31720', 'Choose the right subscription for you:'),
        a('c75a9386', 'Learn more about'),
        a('b916b258', 'and'),
        a('ic6012ea', 'I am an individual'),
        a('d8e618ce', 'For individuals and creators'),
        a('dcbccede', 'I am an organization'),
        a('f44ce884', 'For businesses, government agencies, and non-profits'),
        a('dece6c60', 'Organization name'),
        a('c4c1b600', 'Organization email address'),
        a('b1e0aec0', 'Organization @handle'),
        a('c42d5f4a', 'Number of affiliates'),
        a('fca5f04b', function (e) {
          return 'You can purchase up to ' + e.affiliatesCount + ' affiliates and will be charged accordingly.'
        }),
        a('dca6b3ac', 'Setup an invoice'),
        a('c97ad52a', 'Update invoice'),
        a('b36f0fd4', 'Select how many affiliates you need for your organization.'),
        a('b4871f4f', 'here'),
        a('b633d19e', 'Thank you'),
        a('f713d3e2', 'Your application has been received and is now under review.'),
        a(
          'e11d5e1a',
          'You will be able to leverage all the benefits of Premium, but your organization will not receive a gold or grey checkmark and you will not be able to add affiliated accounts until your account is approved.',
        ),
        a('d83617cc', 'Your account will be reviewed.'),
        a('afb30564', 'We may request additional information to approve you account'),
        a(
          'gdd3fa68',
          'Once reviewed and approved, your account will immediately be verified and you will be able to onboard and add affiliations.',
        ),
        a('e6389996', 'Any account that is not approved will not be refunded.'),
        a('e6b0965a', 'Your order'),
        a('a1b58798', 'Review your order below'),
        a('b651c7d7', function (e) {
          return 'Affiliate' + n(e.count, '', 's') + ' x ' + e.count
        }),
        a('d3469342', 'Organizations and affiliates'),
        a('gf77fdde', 'Tax'),
        a('ec5e9c54', 'Base subscription'),
        a('e16093fc', 'Total per month'),
        a('f4db2df0', 'Your subscription will not become active until the invoice is paid.'),
        a('b9e0d614', 'Your affiliate limit has been updated in your invoice.'),
        a('a45c9596', 'Your invoice has been successfuly generated.'),
        a(
          'c25841ee',
          'Something went wrong while retrieving your Stripe invoice details. Please contact verified-premium-support@twitter.com if this problem continues.',
        ),
        a('e8c366ce', 'X Purchaser Terms'),
        a('b7054230', 'Apply for access'),
        a('a549705c', 'Apply for Full Access'),
        a('g76d1bfa', 'Apply for Basic'),
        a('b9c9ccca', 'Your full name'),
        a('i60d7542', 'Organization website'),
        a('b92f9dee', 'Organization type'),
        a('j3961a09', 'here'),
        a('f09630ff', 'here'),
        a('eb043b72', 'Application pending'),
        a('a9ac4602', 'Your application to Verified Organizations is still being reviewed. Please try again later.'),
        a('d74adc30', 'Incorrect ads account added'),
        a('f304cdac', 'The ads account ID you entered does not match your organisation or its affiliates.'),
        a('b3323ada', 'Add a credit card to your ads.twitter.com account'),
        a(
          'ac325eb8',
          'In order to activate your ads credit, you must add a credit card to your ads account on ads.twitter.com.',
        ),
        a('j4e6e966', 'Ads account review required'),
        a('ef86e7f6', 'Your account has been flagged for review and requires approval.'),
        a('c9c8edae', 'Subscribe to Verified Organizations to apply ads credits'),
        a(
          'b36c6278',
          'Only paid subscriptions to Verified Organizations can use our advertising credit. Upgrade now to advertise with your affiliates.',
        ),
        a(
          'a3a4340c',
          'Verified Organizations now includes $1k of ads credits*. Every 30 days, you’ll receive $1k to spend on ads that can be spent at any time. You can apply it to your organization or any of your affiliates. Just choose the ad account below to redeem.',
        ),
        a(
          'h2e476a4',
          'This is a limited time offer. You must spend your credits within 30 days. Credits do not accumulate.',
        ),
        a('bb2b128a', 'Activate your ads credit for your organization or affiliates'),
        a('b82b5c00', 'Something went wrong while activating ads credit. Please try again later.'),
        a('cf2ba3a2', 'Ads account ID'),
        a('gd7d051c', 'Activate'),
        a('d8a303ce', 'Ads credit is live!'),
        a('f391c800', 'Ads account ID is required'),
        a('ja116d2c', 'Ads account ID is invalid'),
        a('f1c03a6e', 'How to use your ads credit'),
        a(
          'd0381896',
          'Ads credits can be used to run ads on X. Organizations can maximize their 2x reach by running ads spreading the message even further.',
        ),
        a('d60a8f14', 'Run Ads on X'),
        a('fe66e4a8', 'X Ads Manager'),
        a(
          'a9c03060',
          'Spread your message far and wide using X Ads. You can apply your ads credit and run ads for 30 days.',
        ),
        a('b293c6b4', 'Verified Premium Support'),
        a('c244210c', 'X Pro'),
        a('eb0d4fe2', 'Make a column'),
        a('e93d2f8a', 'Customize your experience by adding a variety of columns such as:'),
        a('e8203d1e', 'Searches'),
        a('d82fd532', 'DMs'),
        a('c87babee', 'And more...'),
        a('f1990aa4', 'Organize your columns with Decks'),
        a(
          'ib9c9a54',
          'Imagine having multiple desktops on X Pro. Tune out the noise and only focus on the topics and tools you need when you need them.',
        ),
        a('fb5ac13e', 'Move a column'),
        a('bd545b7e', 'Click on these dots to drag and drop a column anywhere on your Deck.'),
        a('a98513b6', 'Customize columns'),
        a('c8759e44', 'Rollover the top of a column for options like:'),
        a('a93e96c8', 'Order posts by top or latest'),
        a('df300378', 'Change column size'),
        a('aa263910', 'Use advanced search tools'),
        a('ab3915aa', 'Tips and settings'),
        a('ia03837a', 'Go here to:'),
        a('f0bd595c', 'Manage Decks'),
        a('a74e9464', 'Change display settings'),
        a('h254eb92', 'Discover keyboard shortcuts'),
        a('j6e669a0', 'Take the tour again'),
        a('c15802be', 'Sending posts...'),
        a('e5506950', 'Decks'),
        a('b1bd9a8a', 'New Deck'),
        a('cf1a138f', function (e) {
          return 'Changed to deck - ' + e.title
        }),
        a('g9c2da24', 'Opens dialog to create a new deck'),
        a('hcef6b72', 'Opens dialog to manage your decks'),
        a('a77dbc7a', 'Edit Deck'),
        a('a154a293', function (e) {
          return 'Selected Deck ' + e.deckName
        }),
        a('a77bbe9d', function (e) {
          return 'Unselected Deck ' + e.deckName
        }),
        a('ha2aae72', 'Opens dialog to manage the selected deck'),
        a('hf59ffc8', 'Nav bar'),
        a('d69fc67a', 'Add a new column'),
        a('ad61a830', 'Compose post'),
        a('c44f5114', 'Messages settings'),
        a('c71066fe', 'Take the tour'),
        a('b452e6c2', 'How have you been getting on?'),
        a('j7737bc2', 'Thank you for using X Pro, we’d love to hear how you have been finding it so far.'),
        a('e8038d64', 'Your opinion is important to us, it will help us make a better experience.'),
        a('fce3c5ce', 'Give feedback'),
        a('ha39df38', 'Personal'),
        a('ja7b7d1a', 'We are having trouble connecting right now. Changes you make may not be saved.'),
        a('cb82860a', 'Column not found'),
        a('icbecd02', 'Add Column'),
        a('fdf1a2c6', 'Add Deck'),
        a('d25acc28', 'What’s in it?'),
        a('ad5df1d7', function (e) {
          return 'Changed to column - ' + e.title
        }),
        a('ba7bd92e', 'Column settings'),
        a('cc4ff736', 'Sharing column'),
        a('g684a93a', 'Any changes you make to this column will be seen by anyone viewing it.'),
        a('a6bbdc1c', 'View only'),
        a('e6df688c', 'Options'),
        a('e3f2b93a', 'Show or hide info about this column.'),
        a('db257758', 'Media preview size'),
        a('if2fbab8', 'Replies media preview size'),
        a('he517d52', 'Rename column'),
        a('f6eb2cfe', 'Column name'),
        a('d6d39c84', 'Columns must have a name.'),
        a('e5c06aee', 'Column width'),
        a('af6a4368', 'Rename this conversation and see who’s in it.'),
        a('cdeac5ee', 'Direct Message settings'),
        a('fda7ee26', 'Manage who can message you.'),
        a('c4ec8620', 'Include'),
        a('d5f29cd4', 'Exclude'),
        a('d01a62f8', 'Time and location'),
        a('d614afc8', 'Likes, Replies & Reposts'),
        a('fb2bbc7a', 'Post content'),
        a('a589add2', 'Any of these words (OR)'),
        a('d2f8dc8a', 'Posts from someone'),
        a('e37201ec', 'Replying to someone'),
        a('e035e056', 'Mentioning someone'),
        a('ef2d4092', 'Exclude words'),
        a('d59f395e', 'Your display language'),
        a('g67cd3f2', 'Choose languages'),
        a('c85f9b9c', 'Change languages'),
        a('b5148188', 'More than'),
        a('hf369320', 'Less than'),
        a('f4dce7b6', 'How many'),
        a('ddafa9a2', 'View Options'),
        a('c6be8432', 'Level of engagement'),
        a('e60b9fac', 'Show original posts'),
        a('eb441fee', 'Show Reposts'),
        a('e920e6dc', 'Show Quotes'),
        a('g9580526', 'Show Replies'),
        a('i73cbb5c', 'You can only add one List to a search. Only the first List will apply to this search.'),
        a('c765315d', function (e) {
          return 'Enter ' + e.listHandleListNameFormat + ' or List ID'
        }),
        a('a153fbf2', 'How to use a List in a search'),
        a('bf0d5a7c', 'You can add one List per search.'),
        a('c6e8759a', 'To add a List follow this format:'),
        a('dd9daca8', 'Replace periods with - in the List name.'),
        a('cd71b264', 'Learn about Lists.'),
        a('ca23d726', 'Images and videos'),
        a('a911623c', 'Images'),
        a('f1fa97a8', 'Broadcasts'),
        a('c0bab0ba', 'Only show posts with media'),
        a('g9512656', 'Only show verified people'),
        a('b967e296', 'Only show people you follow'),
        a('gc51a2ac', 'At any time'),
        a('d42a4916', 'Recently'),
        a('a2229a06', 'Within a time frame'),
        a('c1fe6156', 'Start time'),
        a('cbc02622', 'End time'),
        a('b666573c', 'Search location'),
        a('cf260344', 'Posts in'),
        a('j5805302', 'Radius'),
        a('e592ab3c', 'For better results include location and state or country in your search.'),
        a('e8843b5d', function (e) {
          return e.meters + 'm'
        }),
        a('g9e6a4e5', function (e) {
          return e.kilometers + 'km'
        }),
        a('ec688a09', function (e) {
          return 'This prevents @' + e.screenName + ' from including you in any of their Lists, including this one.'
        }),
        a('iad54d54', 'Clear Bookmarks'),
        a('g4d581a2', 'Empty this, and all Bookmark Folders'),
        a('fb14aebe', 'Empty Bookmarks'),
        a('ab352ee0', 'Show latest posts'),
        a('c004c4d6', 'Clear posts'),
        a('fc702822', 'Clear posts and view latest posts as they appear.'),
        a('a2c59056', 'Before you clear column...'),
        a('d31bdbbe', 'Switch to latest posts'),
        a('dec3722c', 'latest posts'),
        a('g33b8c04', 'Make a copy'),
        a('de2c3008', 'Make a duplicate of the column.'),
        a('a7c01ce0', 'Change name or delete Folder'),
        a('e52e4c82', 'Change location and personalisation options.'),
        a('ad86db50', 'Make a Deck'),
        a('hb70ef30', 'Create a Deck from this search'),
        a('j8a945cc', 'Top posts'),
        a('f3a4a654', 'Verified posts'),
        a('c8da0c42', 'Photos and videos'),
        a('d2cf6f74', 'Premium partners'),
        a('c9b39e70', 'Move'),
        a('b9ea5f7c', 'Move column to another Deck.'),
        a('g8b6d450', 'Notification options'),
        a('dd703fbd', function (e) {
          return 'Delete column - ' + e.title
        }),
        a('d9d11fc6', 'Delete public Column?'),
        a('h17ada6c', 'Deleting a public Column will cause any followers to irreversibly lose access to the Column.'),
        a('hb388fe8', 'Delete Column'),
        a('j9541e18', 'Search posts'),
        a('c1343ad6', 'Convert this to a search column.'),
        a('e7a12d72', 'Converted to search column'),
        a('f29424f0', 'Change back'),
        a('h5ff85a2', 'Share column'),
        a('d32058ba', 'Make column public to enable share.'),
        a('c926a6ca', 'Changes you make will appear to anyone following the Column.'),
        a('dec2a8fe', 'Before you switch to top posts...'),
        a('gbe58034', 'If you switch to top posts any posts you have cleared will be revealed into the column.'),
        a('c72c9982', 'Switch and show all posts'),
        a('be99039a', 'Post order'),
        a('g0175ca2', 'Column Picker'),
        a('a800727c', 'Return to Column Picker'),
        a('f318bc40', 'Create new Folder'),
        a('e300a9f0', 'Create Bookmark Folder'),
        a('j341c67c', 'Folders must have a name.'),
        a('d00586a6', 'This column can’t be loaded. Try make a new column.'),
        a('d0d8277e', 'The Column owner has deleted or made the Column private.'),
        a('j08fd6fe', 'Your Communities'),
        a('b569a1fa', 'Return to Communities'),
        a('i176bfd2', 'Discover lists'),
        a('a57c3292', 'Discover new lists'),
        a('f59f87dc', 'Find other people’s lists'),
        a('a5d70676', 'Lists that you’re on'),
        a('e377790a', 'Return to Lists'),
        a('e952b8c3', function (e) {
          return '@' + e.userScreenName + '’s lists'
        }),
        a('bc24f834', 'Return to Find other people’s lists'),
        a('ee11d084', 'Search Profiles'),
        a('c300f3bc', 'Add some columns'),
        a('bd744e9a', 'Populate with a search'),
        a('i10d4124', 'Start from scratch'),
        a('jbff8606', 'Submit query'),
        a('dbd8a566', 'Some draft posts could not be deleted.'),
        a('c82be5a8', 'Your selected draft posts were deleted.'),
        a('ad84af68', 'Loading draft posts'),
        a('ef97fb3a', 'You don’t have any draft posts'),
        a('f26ece12', 'When you do, you’ll find them here.'),
        a('a4911812', 'Deleting draft posts'),
        a('b49be1ca', 'Discard Draft Posts'),
        a('ca91dc76', 'This can’t be undone and you’ll lose your draft posts.'),
        a('b38b254a', 'Some scheduled posts could not be deleted.'),
        a('he2e3cc4', 'Your selected scheduled posts were deleted.'),
        a('jf9faee4', 'Loading scheduled posts'),
        a('aa1cfd48', 'You don’t have any scheduled posts'),
        a('b2a70dbe', 'Deleting scheduled posts'),
        a('a07bb1b0', 'Discard scheduled posts'),
        a('id78e802', 'This can’t be undone and you’ll lose your scheduled posts.'),
        a('d9a75e16', 'Choose one'),
        a('aa030cd4', 'See recommended posts first.'),
        a('c0d2d4aa', 'Home Timeline'),
        a('ecbbbb90', 'View your own or other people’s lists.'),
        a('c351229c', 'View the Communities that you’re a part of.'),
        a('a2d1df82', 'Find what you’re looking for.'),
        a('d5387d8a', 'Stay up to date with your messages.'),
        a('e738198c', 'Check what’s trending on X.'),
        a('ifb8c91e', 'Find a profile and see what they’ve been up to.'),
        a('aa0525d0', 'Profiles'),
        a('cb7844a6', 'Keep up with your notifications and mentions.'),
        a('e64da55e', 'View your scheduled posts.'),
        a('h9659832', 'View your draft posts.'),
        a('f1b6535e', 'Draft posts'),
        a('a24add8a', 'See bookmarked posts.'),
        a('ic61c5fc', 'Scroll to top'),
        a('gb19f215', function (e) {
          return 'Column - ' + e.title
        }),
        a('g7751b34', 'Close stack'),
        a('b94fa48c', 'Clear stack'),
        a('dd3dc3cc', 'Go back in stack'),
        a('bc7acfd0', 'Shared column'),
        a('a6587d95', function (e) {
          return 'Reorder column - ' + e.title
        }),
        a('fb071dea', 'Move column'),
        a('c77a6327', function (e) {
          return 'Open column options - ' + e.title
        }),
        a('h53c41f0', 'Column options'),
        a('f7bbbb6d', function (e) {
          return 'Close column options - ' + e.title
        }),
        a('eee9f83e', 'Close column options'),
        a('a443bbc0', 'Close Search'),
        a('d8dc3583', function (e) {
          return 'Set Column Post Order - ' + e.title
        }),
        a('d0b01a9e', 'Post Order'),
        a('h1aa47e2', 'Top Posts'),
        a('ceda719e', 'Latest Posts'),
        a('c8b12c8f', function (e) {
          return 'Set Column Content - ' + e.title
        }),
        a('fe048090', 'Show overview'),
        a('e57560b4', 'Hide overview'),
        a('fb087db0', 'Create separate column'),
        a('aa128cd8', 'Add as new column'),
        a('b163ccb8', 'Show top posts'),
        a('aac37348', 'Column added. Showing top posts first'),
        a('f751a228', 'Column added. Showing latest posts first'),
        a('aa4f00c6', 'Share Deck'),
        a('fdf97052', 'Go to Deck options'),
        a('ed427868', 'Make Deck public?'),
        a('gecc71a2', 'To share a Deck, first make it public.'),
        a('f0653866', 'Sharing deck'),
        a('b158400a', 'Skip this step'),
        a('h15afbce', 'Let’s get you setup'),
        a(
          'ibe6be32',
          'Customize your X Pro experience: choose the column width, color, text and media size that is right for you.',
        ),
        a('e28eb008', 'Open display settings'),
        a('dc8b86e0', 'Now let’s add your columns'),
        a('ee28603e', 'Import your columns'),
        a(
          'dad15d22',
          'Save time by importing your existing Search, List and Profile columns. You won’t be able to copy these over later.',
        ),
        a('j85b4522', 'Or start from scratch'),
        a('hfd5ca12', 'Hmm... we couldn’t import your columns'),
        a('b855852a', 'Only Search, List and Profile columns can be imported. Add a home column instead.'),
        a('dc6c806e', 'Your columns couldn’t be imported'),
        a('a0dfe2f6', 'X Pro is a convenient way to view multiple timeline columns in one easy interface.'),
        a('i8912d28', 'Lets add some columns...'),
        a('ce0c0f34', 'Now let’s have a look around'),
        a('h36d2aa2', 'Learn some handy tips to get you started.'),
        a('fbaf9442', 'Add a starter Deck'),
        a('b354ea52', 'Adding starter Deck...'),
        a('if195eb8', 'Adding columns...'),
        a('ea07517c', 'Column deleted.'),
        a('habced9e', 'to restore column.'),
        a('g4fcb4f8', 'Column restored.'),
        a('d4429cba', 'Hmm...this Deck doesn’t exist. Try selecting a different one.'),
        a('g2c6e34a', 'Manage content size, color and background.'),
        a('bf2890a6', 'Visual scale'),
        a('h098a550', 'Default column width'),
        a('ab248726', 'Default media preview'),
        a('jdaf161c', 'Messages Tab'),
        a('ge0fcfd0', 'Hover Cards'),
        a('e1cab6e8', 'Apply changes to existing columns?'),
        a(
          'ce2e487c',
          'If you change all columns, every column across all your decks will be updated. If you choose No, only columns you create from now will get the new settings.',
        ),
        a('fdbd90a6', 'Yes, change all columns'),
        a('h8affe68', 'No, only new columns'),
        a('f06885b6', 'Column media size options'),
        a('e4bab2d0', 'Column width options'),
        a('f0e71094', 'Show Messages Tab'),
        a('aa25a5a6', 'Collapsible Messages Tab available at the bottom of your screen'),
        a('g3da3c90', 'Show Hover Cards'),
        a('b08a8656', 'Show Hover Cards when hovering over interactive items'),
        a('g9df1984', 'Add a Deck'),
        a('df77af70', 'Choose an emoji for your Deck'),
        a('ee7765ba', 'Pick Emoji'),
        a('e0127c83', function (e) {
          return 'Change Emoji ' + e.emoji
        }),
        a(
          'hb8b6254',
          'Anyone can access your public Deck from your profile. You can also share links to it. If you change your mind, you can always make it private again. Learn more',
        ),
        a('gfbaf4e8', 'This Deck can’t be made public now'),
        a(
          'ae04848a',
          'This Deck contains Columns that are related to your X account. To make this Deck public, you’ll need to remove them. Learn more',
        ),
        a('d606207a', 'Delete Deck'),
        a('h95cb00e', 'This Deck will be permanently deleted. This can’t be undone.'),
        a(
          'f50c9834',
          'This Deck will be permanently deleted. If you delete it you will not be able to retrieve it later.',
        ),
        a('cb861826', 'Reorder Deck'),
        a('i5896b2b', function (e) {
          return 'Edit Deck "' + e.title + '"'
        }),
        a('ef602cab', function (e) {
          return 'Delete Deck "' + e.title + '"'
        }),
        a('b44b9d83', function (e) {
          return 'Unpin Deck "' + e.title + '"'
        }),
        a('je4a847f', function (e) {
          return 'Pin Deck "' + e.title + '"'
        }),
        a('fe5df266', 'Make Column private?'),
        a('i3206148', 'Making a public Column private will cause any followers to lose access to the Column.'),
        a('c65d210c', 'Make Column private'),
        a('ad41be88', 'Move column to Deck'),
        a('j4d54f1e', 'A powerful, real-time tool for people who live on X.'),
        a(
          'je0526a0',
          'Monitor multiple timelines on a single screen. Track and organize content, and engage with your communities in real-time.',
        ),
        a('bacd7195', function (e) {
          return e.fullName + ' (@' + e.screenName + ') on X'
        }),
        a('ee838ea0', 'Following this Topic will help personalize Home timeline and experience across X'),
        a('h85446ce', 'This browser is no longer supported.'),
        a(
          'g9c2dec8',
          'Please switch to a supported browser to continue using twitter.com. You can see a list of supported browsers in our Help Center.',
        ),
        a('a138aeb2', 'JavaScript is not available.'),
        a(
          'ddf1d67c',
          'We’ve detected that JavaScript is disabled in this browser. Please enable JavaScript or switch to a supported browser to continue using twitter.com. You can see a list of supported browsers in our Help Center.',
        ),
        a(
          'f1a9e3a2',
          'Get breaking news, politics, trending music, world events, sports scores, and the latest global news stories as they unfold - all with less data.',
        ),
        a('bb402b62', 'X Pro is a customizable dashboard for staying up to date with what’s happening now.'),
        a('ed617674', '360'),
        a('e23b20a0', 'Cancel'),
        a('a620fcf0', 'Loading image'),
        a('e9e2064c', 'Something went wrong, but don’t fret — it’s not your fault.'),
        a('d7060c80', 'Refresh'),
        a('a0493514', 'Retry'),
        a('ff3dd27c', 'Default'),
        a('b554fcf4', 'Light'),
        a('j590b148', 'Medium light'),
        a('e7d4ee86', 'Medium'),
        a('ia423ebc', 'Medium dark'),
        a('a2cf0942', 'Dark'),
        a('j824dc06', 'Search emojis'),
        a('fffb3384', 'No Emojis found'),
        a('j3d20752', 'Try searching for something else instead.'),
        a('d67ad796', 'Choose your default skin tone'),
        a('e6388bfa', 'Clear all'),
        a('j7c67eca', 'Recent'),
        a('da539d38', 'Search results'),
        a('d95eb228', 'Back'),
        a('af8fa2ae', 'Close'),
        a('ef8b2f54', 'Read the chart'),
        a('d567ceda', 'vertical'),
        a('f7b30768', 'stacked'),
        a('hcd54328', 'grouped'),
        a('affbaf62', 'More information'),
        a('c388d026', 'OK'),
        a('ha20397c', 'Accessibility features'),
        a('baf7a43c', 'Accessibility'),
        a('e8f674ab', function (e) {
          return (
            'This is a ' +
            e.chartType +
            ' bar chart. The title of the chart is ' +
            e.chartTitle +
            '. There are in total ' +
            e.noOfCategories +
            ' categories. The minimum value is ' +
            e.minValue +
            ' and the maximum value is ' +
            e.maxValue +
            '. Explore the chart using navigation controls.'
          )
        }),
        a('d969327c', 'Play audio version'),
        a(
          'd8cbbcd4',
          'Play audio chart. Press to play audio version of the chart or press key "A" on each data point for their audio version',
        ),
        a('dec1d7ef', function (e) {
          return e.label + ', ' + e.group + ', ' + e.value
        }),
        a('f765bead', function (e) {
          return 'unlabelled data, ' + e.group + ', ' + e.value
        }),
        a('idea1817', function (e) {
          return e.label + ', ' + e.value
        }),
        a('fe94be6b', function (e) {
          return 'unlabelled data, ' + e.value
        }),
        a('b15c0a18', 'Discard edits?'),
        a('aebf81c8', 'Any changes you made won’t be saved.'),
        a('aa744c1e', 'Continue editing'),
        a('fe04d89a', 'Discard'),
        a('bb5d8cd2', 'Yes'),
        a('a7cd5cf4', 'Video'),
        a('b6eb8f6a', 'Broadcast'),
        a('dcc2b9b3', function (e) {
          return 'Play ' + e.locVideoType
        }),
        a('hf4ffd4d', function (e) {
          return 'Play live ' + e.locVideoType
        }),
        a('f6e90cd7', function (e) {
          return e.hoursWord + ' ' + e.minutesWord + ' ' + e.secondsWord + ' long'
        }),
        a('e7d191ed', function (e) {
          return 'Starting at ' + e.hoursWord + ' ' + e.minutesWord + ' ' + e.secondsWord
        }),
        a('h1888a33', function (e) {
          return e.viewerCount + ' viewer' + n(e.viewerCount, '', 's')
        }),
        a('b4f19b97', function (e) {
          return e.listItem1 + ' and ' + e.listItem2
        }),
        a('i0135403', function (e) {
          return e.listItem1 + ', ' + e.listItem2
        }),
        a('f1574a4b', function (e) {
          return e.listItem1 + ', and ' + e.listItem2
        }),
        a('ec72e2f8', 'Follow'),
        a('j190bf1a', 'LIVE'),
        a('e3fcbdba', 'Dismiss'),
        a('jc0b3a8c', 'Image description'),
        a('ia1d2e58', 'Liked By Author'),
        a('h81f3036', 'Article'),
        a('bed2945c', 'read image description'),
        a('f17dfdb6', 'Play'),
        a('j836de8a', 'Protected account'),
        a('f4b8dc08', 'Subscribed account'),
        a('f936caa6', 'Translator account'),
        a('ac72ee4e', 'Verified account'),
        a('f49e0aac', 'Provides details about verified accounts.'),
        a('f59bdb94', 'Provides details about protected accounts.'),
        a('d7e50a66', 'Learn more'),
        a('fc065ee4', 'Learn more about Subscriptions'),
        a('e453f536', 'What’s Subscriptions'),
        a(
          'bd4cb7a0',
          'When you Subscribe to your favorite creators, you get bonus content — and they earn a little money.',
        ),
        a('g7099a02', 'Tell me more'),
        a('c2637ef6', 'Got it'),
        a('efb17190', 'Follows you'),
        a('g57b5f6c', 'Your Subscriber'),
        a('a77a27c0', 'Subscribed'),
        a('bd08d1b2', 'Details not available'),
        a('c6000450', 'Reminder set'),
        a('db44ff5c', 'Set reminder'),
        a('j8b01b27', function (e) {
          return 'Space ' + e.title + ' hosted by ' + e.host + ' has been canceled'
        }),
        a('fda9f48c', 'Space has been canceled'),
        a('jf7853f7', function (e) {
          return 'Space ' + e.title + ' hosted by ' + e.host + ' has ended'
        }),
        a('i1a29920', 'Space has ended'),
        a('db467ffe', 'Join a Space'),
        a('i8dc3993', function (e) {
          return 'Hosted by ' + e.host
        }),
        a('eb0b05b9', function (e) {
          return 'with ' + e.count + ' others'
        }),
        a('d19b9f77', function (e) {
          return e.action + ' for ' + e.title + ' hosted by ' + e.host + ', ' + e.scheduledStart
        }),
        a('ea4258b7', function (e) {
          return e.action + ' for a space, ' + e.scheduledStart
        }),
        a('g519ec2a', 'Play recording'),
        a('dcbcaa23', function (e) {
          return 'Play recording of ' + e.title
        }),
        a('d0e7b11b', function (e) {
          return e.date + ' at ' + e.time
        }),
        a('b4349cbc', function (e) {
          return '' + e.relativeDay
        }),
        a('fbc2003c', 'Ended'),
        a('h5051dd8', 'Canceled'),
        a('bb5f91a3', function (e) {
          return e.count + ' in this Space'
        }),
        a('c83eea99', function (e) {
          return e.participant + ' + ' + e.count + ' listening'
        }),
        a('cdff6cd3', function (e) {
          return e.speaker + ' is speaking + ' + e.count + ' listening'
        }),
        a('df006f4f', function (e) {
          return e.count + ' interested'
        }),
        a('c889af33', function (e) {
          return e.count + ' joined'
        }),
        a('d6f2056f', function (e) {
          return e.count + ' tuned in'
        }),
        a('jbc5f47a', 'Spaces dock'),
        a('gfe2830f', function (e) {
          return e.count + ' other' + n(e.count, '', 's')
        }),
        a('dbeae6cf', function (e) {
          return e.count + ' other listener' + n(e.count, '', 's')
        }),
        a('d2543d97', function (e) {
          return '+' + e.count
        }),
        a('dc718e53', function (e) {
          return '+' + e.count + ' other' + n(e.count, '', 's')
        }),
        a('ebe41367', function (e) {
          return 'Time ' + e.time
        }),
        a('efce3d9b', function (e) {
          return e.hours + ' ' + e.minutes + ' ' + e.seconds
        }),
        a('d925a4f9', function (e) {
          return e.formattedCount + ' minute' + n(e.count, '', 's') + ' left'
        }),
        a('ib15cddb', function (e) {
          return e.formattedCount + ' hour' + n(e.count, '', 's') + ' left'
        }),
        a('db9ed19f', function (e) {
          return e.formattedCount + ' day' + n(e.count, '', 's') + ' left'
        }),
        a('e1ebcecb', function (e) {
          return (
            e.formattedDays +
            ' day' +
            n(e.days, '', 's') +
            ' ' +
            e.formattedHours +
            ' hour' +
            n(e.hours, '', 's') +
            ' left'
          )
        }),
        a('cc1da1fd', function (e) {
          return (
            e.formattedHours +
            ' hour' +
            n(e.hours, '', 's') +
            ' ' +
            e.formattedMins +
            ' minute' +
            n(e.mins, '', 's') +
            ' left'
          )
        }),
        a('f89a5d60', 'Host'),
        a('iae0360c', 'Subscribed only'),
        a('df06241c', 'Community'),
        a('b03e162a', 'Listen live'),
        a('b3d828ee', 'Joined'),
        a('fb236728', 'Pause'),
        a('cc1f75ac', 'Spaces'),
        a('b8b6344a', 'Unmute'),
        a('ec8ab8b4', 'Mute'),
        a('gaeb997e', 'More'),
        a('f8b21226', 'Join'),
        a('b05a39b2', 'View'),
        a('ca677074', 'Start listening'),
        a('j1ee4dae', 'Space'),
        a('cff0c060', 'Space ended'),
        a('c41ea42e', 'This Space was canceled'),
        a('e03cff1d', function (e) {
          return 'Join a space ' + e.title + ' hosted by ' + e.host + ', with ' + e.count + ' others'
        }),
        a('b27cf499', function (e) {
          return 'Join a space hosted by ' + e.host + ', with ' + e.count + ' others'
        }),
        a('ace2ffe9', function (e) {
          return 'Join a space with ' + e.count + ' others'
        }),
        a('f5b51d6a', 'Now playing'),
        a('j3de54a8', 'NOTE'),
        a('a6a6ced4', 'Read Note'),
        a('dbc0c2f4', 'Bookmark'),
        a('ccd32094', 'Now'),
        a('abfcce0d', function (e) {
          return e.amountOfTime + ' ago'
        }),
        a('d6885d3e', 'View Community'),
        a('eba2660a', 'Blue'),
        a('hc196b78', 'Plum'),
        a('c8bc49d2', 'Purple'),
        a('efff09ee', 'Green'),
        a('fcb424ee', 'Yellow'),
        a('ie2215aa', 'Magenta'),
        a('f106ce44', 'Orange'),
        a('acddd4d4', 'Red'),
        a('cef9b062', 'Teal'),
        a('d9daefca', 'Dark Gray'),
        a('d5a48014', 'Heading'),
        a('b92b6156', 'Subheading'),
        a('ec5ed598', 'Body'),
        a('c69eb656', 'Full-Time'),
        a('g46ae43c', 'Full-Time Contract'),
        a('jf7d4cc6', 'Part-Time'),
        a('b2214572', 'Contract-to-Hire'),
        a('f8337bd6', 'per year'),
        a('i935bf88', 'per hour'),
        a('d39bc8b5', function (e) {
          return 'Starting at $' + e.min + ' ' + e.interval
        }),
        a('a4499237', function (e) {
          return 'Up to $' + e.max + ' ' + e.interval
        }),
        a('ded923b5', function (e) {
          return '$' + e.min + ' - ' + e.max + ' ' + e.interval
        }),
        a('c5954d30', 'List'),
        a('fe64170c', 'When you make a selection it cannot be changed'),
        a('g10ace38', 'Poll options'),
        a('a3edf99a', 'Final results'),
        a('c2b81e9d', function (e) {
          return e.formattedCount + ' vote' + n(e.count, '', 's')
        }),
        a('e86732e4', 'Selected'),
        a('a35a5b10', 'Followers you know'),
        a('fc8cd112', 'Not followed by anyone you’re following'),
        a('b74bf8b8', 'Image'),
        a('df8cd2af', function (e) {
          return 'Slide ' + e.currentSlide + ' of ' + e.itemCount + ' - Carousel. ' + e.type + '. ' + e.altText
        }),
        a('d70740da', 'Next slide'),
        a('c4d53ba2', 'Previous slide'),
        a('h6405c17', function (e) {
          return 'Slide ' + e.currentSlide + ' of ' + e.itemCount + ' - Carousel'
        }),
        a('gea7aa3c', 'Next'),
        a('b6462b32', 'Previous'),
        a('hdf426f5', function (e) {
          return 'Topic · ' + e.description
        }),
        a('a3efd2c4', 'Topic'),
        a('b91c8e53', function (e) {
          return 'Topic card for ' + e.title + '.'
        }),
        a('b3826295', function (e) {
          return 'Topic card for ' + e.title + ', ' + e.description + '.'
        }),
        a('c9bb65db', function (e) {
          return 'Collection of ' + e.slidesLength + ' images. ' + e.heroVanityContent + '. ' + e.heroTitleContent
        }),
        a('a6ada13e', 'Shop now'),
        a('e1bddf52', 'Drag to rotate'),
        a('fc45ccc6', 'Embedded video'),
        a('a9edea48', 'Reload'),
        a('d26d8730', 'Copy video address'),
        a('f1b6bcec', 'Copy Gif Address'),
        a('j25d7cca', 'Hide captions'),
        a('a858b25c', 'Show captions'),
        a('faf9f484', 'Ad'),
        a('ae2ea9e7', function (e) {
          return 'Ad by ' + e.advertiserName
        }),
        a('hea01798', 'Seek slider'),
        a('f8a09386', 'View on Periscope'),
        a('gf2b6eee', 'Picture-in-Picture'),
        a('b3160a69', function (e) {
          return e.volumePercent + ' percent'
        }),
        a('e9bd453e', 'Replay'),
        a('c9a642fa', 'Volume slider'),
        a('c27e60b0', 'Full screen'),
        a('d2969f10', 'Exit full screen'),
        a('f06f2e53', function (e) {
          return e.currentTime + ' of ' + e.durationTime
        }),
        a('eeb64451', function (e) {
          return 'Watch ' + e.advertiserName
        }),
        a('f3c268a5', function (e) {
          return 'Shop ' + e.advertiserName
        }),
        a('g60001bb', function (e) {
          return 'See ' + e.advertiserName
        }),
        a('dff1ddd9', function (e) {
          return 'Go to ' + e.advertiserName
        }),
        a('b0b22805', function (e) {
          return 'Visit ' + e.advertiserName
        }),
        a('c67e71aa', 'Watch now'),
        a('j0f12222', 'See more'),
        a('f569f7c8', 'Go to website'),
        a('j0c6772a', 'Visit website'),
        a('f73003aa', 'Video will play after ad'),
        a('b3112b8a', 'Skip'),
        a('h6333ad0', 'Skip Ad'),
        a('c59da417', function (e) {
          return 'Skip Ad in ' + e.seconds
        }),
        a('c3c147cf', function (e) {
          return 'Skip ' + e.seconds
        }),
        a('h9b3104e', 'Video Settings'),
        a('ccc97152', 'Playback speed'),
        a('a7bf9962', 'Download video'),
        a('e8b5757c', '0.25x'),
        a('e7e954de', '0.5x'),
        a('g07ffe66', '0.75x'),
        a('d8bede9e', '1x'),
        a('j41845c8', '1.25x'),
        a('e9eeed9e', '1.5x'),
        a('fe45dc84', '1.75x'),
        a('e791190a', '2x'),
        a('a681babd', function (e) {
          return 'Watch now at ' + e.trimmedHostname
        }),
        a('db3cd325', function (e) {
          return 'Visit ' + e.trimmedHostname
        }),
        a('f1ad0df1', function (e) {
          return 'Ad · ' + e.timeRemaining
        }),
        a('ef16ab2b', function (e) {
          return 'Ad by ' + e.advertiserName + ' · ' + e.timeRemaining
        }),
        a('a15adf2c', 'this form'),
        a('c1658fc6', 'The media could not be played.'),
        a('h519ae04', 'The media has been disabled due to a copyright claim.'),
        a('ce871584', 'This broadcast has ended.'),
        a('c101eb96', 'This broadcast is not available.'),
        a('gb24a514', 'This media has been disabled in response to a report by the copyright owner.'),
        a('hcaf3e63', function (e) {
          return 'This media has been disabled due to a copyright claim by ' + e.holder + '.'
        }),
        a('if05c038', 'This broadcast is not available in your location.'),
        a('d420171b', function (e) {
          return 'Video not available due to a copyright claimed by ' + e.holder
        }),
        a(
          'b1eb72fa',
          'Sorry, this video is restricted in certain areas, please wait a few seconds as we acquire your location. Make sure to enable location settings in your browser.',
        ),
        a('c057680c', 'We cannot play the video in this browser. Please try a different web browser.'),
        a('i5dfae6e', 'This video is not available in your location.'),
        a('c2388276', 'This video has been deleted.'),
        a('d2c96140', 'Guest audio indicator'),
        a('f6dc9146', 'REPLAY'),
        a('d30c74fe', 'Volume'),
        a('f2d4e6f2', 'Watch again'),
        a(
          'f0e1fb48',
          'A preview could not be made for this video format, in this browser. It may still be possible to upload the video',
        ),
        a('c2fc878d', function (e) {
          return 'You have exceeded the character limit by ' + e.count
        }),
        a('db11b27f', function (e) {
          return e.count + ' character' + n(e.count, '', 's') + ' remaining'
        }),
        a('bb7b821a', 'You can reply'),
        a('fc41217b', function (e) {
          return 'Accounts following or mentioned by @' + e.screenName + ' can reply'
        }),
        a('e5dc76d0', 'You can reply to this conversation'),
        a('ab105904', 'Who can reply?'),
        a('fd1cda7a', 'You cannot reply to this conversation'),
        a('f064f477', function (e) {
          return 'Accounts @' + e.screenName + ' follows or mentioned can reply'
        }),
        a('ea9ac5c9', function (e) {
          return 'Accounts @' + e.screenName + ' mentioned can reply'
        }),
        a('d2ae1499', function (e) {
          return 'Accounts subscribed to or mentioned by @' + e.screenName + ' can reply'
        }),
        a('a4e254ff', function (e) {
          return 'Verified accounts or accounts mentioned by @' + e.screenName + ' can reply'
        }),
        a('daba4484', 'Only the author and moderators can see this post'),
        a('f956070a', 'It was hidden by the mods for breaking Community rules.'),
        a('cc17f408', 'When members are removed, their post are hidden from the rest of the Community.'),
        a('j620ce06', 'Who can see this post?'),
        a('bd414b44', 'Exclusive to your Subscribers'),
        a('dd0da5d9', function (e) {
          return '@' + e.screenName + ' and their Subscribers can see your post'
        }),
        a('g1c6a77e', 'You’re seeing Subscriptions content'),
        a('d3b143d7', function (e) {
          return 'You can see this and reply because you’re Subscribed to @' + e.screenName
        }),
        a('f6337117', function (e) {
          return 'You can see this post because you’re Subscribed to @' + e.screenName
        }),
        a('b140e3b2', 'Some conversations can get heavy'),
        a('icbb05dc', 'Don’t forget the human behind the screen.'),
        a('g4d12384', 'Heads up'),
        a('fe5ab73c', 'Conversations like this can be intense. Don’t forget the human behind the screen.'),
        a('g766a06d', function (e) {
          return 'Only people in @' + e.screenName + '’s Circle can see this post'
        }),
        a('a0953370', 'Subscription'),
        a('d9687d23', function (e) {
          return 'Down by ' + e.trendValueNegativePercent
        }),
        a('ac73eb5a', 'No change'),
        a('c5a9f921', function (e) {
          return 'Up by ' + e.trendValuePositivePercent
        }),
        a('jf83d092', 'Day'),
        a('af4abf20', 'Month'),
        a('b871f280', 'Year'),
        a('hac89ab0', 'January'),
        a('ef30b30a', 'February'),
        a('b56920fa', 'March'),
        a('b1a0f1ec', 'April'),
        a('daf779c8', 'May'),
        a('c6ad074e', 'June'),
        a('f1db106c', 'July'),
        a('i4e80b7a', 'August'),
        a('efa6cc1e', 'September'),
        a('f40a0cbe', 'October'),
        a('ac74a31c', 'November'),
        a('i6c1e4b2', 'December'),
        a('de540c32', 'Reveal password'),
        a('b4abfdb4', 'Hide password'),
        a('f06ae5d3', function (e) {
          return (
            e.standardTweetCount +
            ' character' +
            n(e.standardTweetCount, '', 's') +
            ' remaining for a standard post, ' +
            e.totalCount +
            ' character' +
            n(e.totalCount, '', 's') +
            ' remaining total'
          )
        }),
        a('fee0a8bc', 'Save'),
        a('ae7f7656', 'Clear'),
        a('gd769996', 'Something went wrong. Try reloading.'),
        a('i5450bec', 'Media'),
        a('f7432494', 'Add photo'),
        a('c3befdbe', 'Following'),
        a('d3029dbc', 'Unfollow'),
        a('aeb6f0a0', 'Subscribe'),
        a('b4397192', 'Manage')
      a('jd505700', 'Autoblocked'),
        a('e024ee92', 'Remove autoblock'),
        a('hfc90ee9', function (e) {
          return 'Block @' + e.screenName
        }),
        a('e5630cdd', function (e) {
          return 'Block @' + e.screenName + '?'
        }),
        a('a9d050cc', 'Block'),
        a('f6cb4235', function (e) {
          return (
            'They will not be able to follow you or view your posts, and you will not see posts or notifications from @' +
            e.screenName +
            '.'
          )
        }),
        a('a3d6d66f', function (e) {
          return 'Remove @' + e.screenName + ' from Autoblocked accounts list?'
        }),
        a('h517e8d8', 'Remove'),
        a('ca6fca00', 'They will be able to see your posts, follow you, and send you Direct Messages.'),
        a('i8cfb6e6', 'Blocked'),
        a('ea100d6a', 'Unblock'),
        a('fe40537f', function (e) {
          return 'Unblock @' + e.screenName + '?'
        }),
        a('ab7c3460', 'They will be able to follow you and view your posts.'),
        a('cda66545', function (e) {
          return 'Click to ' + e.followType + ' ' + e.screenName
        }),
        a('ee05e96b', function (e) {
          return 'Click to ' + e.followType + ' to ' + e.screenName
        }),
        a('a8d77a25', function (e) {
          return 'Click to leave ' + e.screenName
        }),
        a('d0f4f3d9', function (e) {
          return e.followType + ' ' + e.screenName
        }),
        a('f238ba1d', function (e) {
          return e.followType + ' to ' + e.screenName
        }),
        a('j6161cab', function (e) {
          return 'Unfollow @' + e.screenName + '?'
        }),
        a('i4bb9ef7', function (e) {
          return 'Unfollow ' + e.title + '?'
        }),
        a(
          'ge753264',
          'Their posts will no longer show up in your For You timeline. You can still view their profile, unless their posts are protected.',
        ),
        a(
          'b837c0e8',
          'Even if you unfollow this Topic, you could still see posts about it depending on which accounts you’re following.',
        ),
        a('ddac1f1d', function (e) {
          return 'Are you sure you want to leave ' + e.communityName + '?'
        }),
        a(
          'j8e33c40',
          'You’ll lose access to the Community and will no longer be able to participate, but your previous posts will still be visible.',
        ),
        a('f305840e', 'Pending'),
        a('i036327c', 'Discard follow request?'),
        a('j95e3097', function (e) {
          return 'This will cancel your pending request, and @' + e.screenName + ' will no longer see it.'
        }),
        a('e9f1af3a', 'Find out more'),
        a('f1881d86', 'This post can’t be replied to, shared or liked.'),
        a('j3d37222', 'X is legally required to provide this notice.'),
        a('e461d0ee', 'Get the latest'),
        a('d1386940', 'Stay informed'),
        a('ecda5f9e', 'Misleading'),
        a('a423473c', 'Legally Required Notice'),
        a('b3296688', 'Visibility Limited'),
        a('d85bc1b8', 'Zoom in or out on your image.'),
        a('f596ace8', 'Aspect ratio: original'),
        a('df031fca', 'Aspect ratio: wide'),
        a('b40332c6', 'Aspect ratio: square'),
        a('e547b368', 'Original'),
        a('f7571204', 'Wide'),
        a('e6e16812', 'Square'),
        a('hdd29d51', function (e) {
          return '' + e.sponsorshipOrganization
        }),
        a('b97f7079', function (e) {
          return '' + e.sponsorshipOrganization
        }),
        a('b02627a9', function (e) {
          return '' + e.sponsorshipOrganization
        }),
        a('f1a1b791', function (e) {
          return 'Promoted by ' + e.fullName
        }),
        a('if2bf8b4', 'Promoted'),
        a('f3624b5c', 'Promoted (political)'),
        a('b4b3b113', function (e) {
          return 'Promoted (political) by ' + e.fullName
        }),
        a('be222050', 'Promoted (issue)'),
        a('hcbbe447', function (e) {
          return 'Promoted (issue) by ' + e.fullName
        }),
        a('ae408b76', 'You reposted'),
        a('j355f008', 'Pinned post'),
        a('habf9678', 'Pinned by Author'),
        a('db0798ed', function (e) {
          return e.topicName + ' Topic'
        }),
        a('dc716ec9', function (e) {
          return 'Recommended Topic: ' + e.topicName
        }),
        a('a3dfd0cb', function (e) {
          return 'post' + e.noun
        }),
        a('d7580651', function (e) {
          return 'Post' + e.noun
        }),
        a('c68b6367', function (e) {
          return 'Article' + e.noun
        }),
        a('jcf3e7a2', 'Frame progress for Lottie Animation'),
        a('a0af935c', 'Liked'),
        a('b8c465e2', 'Reposted'),
        a('c7a989ce', 'Bookmarked'),
        a('b03835c7', function (e) {
          return e.replyCount + ' repl' + n(e.replyCount, 'y', 'ies')
        }),
        a('g4a195e7', function (e) {
          return e.retweetCount + ' repost' + n(e.retweetCount, '', 's')
        }),
        a('e089b42d', function (e) {
          return e.likeCount + ' like' + n(e.likeCount, '', 's')
        }),
        a('e0a8fe39', function (e) {
          return e.bookmarkCount + ' bookmark' + n(e.bookmarkCount, '', 's')
        }),
        a('c58b2ab7', function (e) {
          return e.viewCount + ' view' + n(e.viewCount, '', 's')
        }),
        a('f2849136', 'Analytics'),
        a('f206e970', 'View post analytics'),
        a('c7073f5b', function (e) {
          return e.count + ' view' + n(e.count, '', 's') + '. View post analytics'
        }),
        a('hf417cf0', 'Remove from Bookmarks'),
        a('febd30ed', function (e) {
          return e.count + ' Bookmark' + n(e.count, '', 's') + '. Bookmark'
        }),
        a('a8dc9587', function (e) {
          return e.count + ' Bookmark' + n(e.count, '', 's') + '. Bookmarked'
        }),
        a('d636ebc6', 'Like'),
        a('eb3a8b0c', 'Unlike'),
        a('j472ecfc', 'Like this post'),
        a('dac92b0d', function (e) {
          return e.count + ' Like' + n(e.count, '', 's') + '. Like'
        }),
        a('aa650427', function (e) {
          return e.count + ' Like' + n(e.count, '', 's') + '. Liked'
        }),
        a('hdf7226a', 'Reply'),
        a('c9940955', function (e) {
          return e.count + ' Repl' + n(e.count, 'y', 'ies') + '. Reply'
        }),
        a('f2919fb8', 'Repost'),
        a('fd1e5446', 'Undo repost'),
        a('dfad425d', function (e) {
          return e.count + ' repost' + n(e.count, '', 's') + '. Repost'
        }),
        a('a386dc55', function (e) {
          return e.count + ' repost' + n(e.count, '', 's') + '. Reposted'
        }),
        a('bb5c5864', 'Quote'),
        a('f65198c2', 'View Quotes'),
        a('dc63da16', 'Share'),
        a('cee0585c', 'Share post'),
        a('dc33d78a', 'Article cover image'),
        a('e1b95ab0', 'Last edited'),
        a('a1bbc1a4', 'This is the latest version of this post.'),
        a('i308d42c', 'There’s a new version of this post'),
        a('h092d520', 'There’s a new version of this post.'),
        a('ceb6841c', 'When members are removed, their posts are hidden from the rest of the Community.'),
        a('cb731cae', 'Edit Circle'),
        a('c33d3a84', 'What happens in the Circle stays in the Circle'),
        a('c4f10e71', 'Learn more'),
        a('b09adb0c', 'See conversation'),
        a('f4393d0f', function (e) {
          return 'Attributed to ' + e.name
        }),
        a('f8e8e32e', 'You'),
        a('df6703d3', 'You'),
        a('c20f7e9f', function (e) {
          return n(
            e.otherUsersCount,
            s.createElement(s.Fragment, null, '', e.secondName),
            e.otherUsersCount + ' others',
          )
        }),
        a('he26f627', function (e) {
          return n(
            e.otherUsersCount,
            s.createElement(s.Fragment, null, '', e.secondName),
            e.otherUsersCount + ' others',
          )
        }),
        a('j2eea17a', 'The following media includes potentially sensitive content.'),
        a('e4f1e6e4', function (e) {
          return '' + e.formattedCount
        }),
        a('daf8a75f', function (e) {
          return 'Following'
        }),
        a('ef1f4fc6', function (e) {
          return '' + e.formattedCount
        }),
        a('ad9b5988', function (e) {
          return 'Follower' + n(e.count, '', 's')
        }),
        a('a9980948', function (e) {
          return '' + e.formattedCount
        }),
        a('ce44a35c', function (e) {
          return 'Subscriber' + n(e.count, '', 's')
        }),
        a('id949f68', function (e) {
          return '' + e.formattedCount
        }),
        a('hb608cfc', function (e) {
          return 'Subscription' + n(e.count, '', 's')
        }),
        a('ef633578', 'Account suspended'),
        a('caddb529', 'and'),
        a('ff31714c', function (e) {
          return 'and ' + n(e.othersCount, '1 other', e.othersCount + ' others')
        }),
        a('e06c99b7', 'and'),
        a('i4e2f96c', function (e) {
          return 'and ' + n(e.othersCount, '1 other', e.othersCount + ' others')
        }),
        a('ga629a8c', 'View people in conversation'),
        a('a8b58cf4', 'Show this thread'),
        a('i5f742fe', 'Show this poll'),
        a('hf3f8e3a', 'Show more'),
        a(
          'd6f781e4',
          'When you Subscribe to your favorite X creators, you get bonus content — and they earn a little money.',
        ),
        a('a46e92c2', 'Mod'),
        a('f9633e62', 'Admin'),
        a('h13ffc88', 'Voice'),
        a('c8c4600e', 'Voice post'),
        a('de8c5eb2', 'Play audio'),
        a('ec286028', 'Pause audio'),
        a('ad77feb6', 'Captions unavailable'),
        a('a6a3d496', 'Insert link'),
        a('acce6978', 'Edit link'),
        a('f5e8f526', 'Edit'),
        a('a30ae58e', 'Text to display'),
        a('da38c958', 'URL'),
        a('d5d57678', 'Insert'),
        a('ec822028', 'Please fill out this field'),
        a('ebc5d2cc', 'Something’s incorrect with this URL. Please check the spelling and formatting of this link.'),
        a('h30a19bb', function (e) {
          return (
            'This is a pie chart. The title of the chart is ' +
            e.chartTitle +
            '. There are in total ' +
            e.noOfCategories +
            ' categories. The minimum value is ' +
            e.minValue +
            ' and the maximum value is ' +
            e.maxValue +
            '. Explore the chart using navigation controls.'
          )
        }),
        a('h39fbf33', function (e) {
          return 'An horizontal bar chart with data values spanning from ' + e.minValue + ' to ' + e.maxValue
        }),
        a('gdd51574', 'Pull to refresh'),
        a('ad01805e', 'See similar posts'),
        a('e557ad8e', 'Active'),
        a('e3a58c28', 'Expand'),
        a('db355331', function (e) {
          return e.team + ' won'
        }),
        a('a8428d5e', 'Upcoming'),
        a('a7aad8ba', 'Live'),
        a('e431f1aa', 'Final'),
        a('a7391708', 'Postponed'),
        a('d2dbfa92', 'Cancelled'),
        a('cd734f66', 'Today'),
        a('c8891d06', 'Tomorrow'),
        a('d2414d31', function (e) {
          return e.count + ' unread items'
        }),
        a('fb9f6f39', function (e) {
          return e.count + '+'
        }),
        a('eb124f96', 'AM/PM'),
        a('i7a6f114', 'Hour'),
        a('ccc99ff2', 'Minute'),
        a('g5662c95', function (e) {
          return 'Level ' + e.conversationTreeDepth + ':'
        }),
        a('b3688156', 'This user is currently in an active Space, click to join'),
        a('c0eb8825', function (e) {
          return '@' + e.screenName + ' is currently in an active Space, click to join'
        }),
        a('d068dc6d', function (e) {
          return '@' + e.screenName + ' is currently in an active Live Broadcast, click to watch'
        }),
        a('d9fd5570', 'Hidden replies'),
        a('c566d3a6', 'Hide'),
        a('a897c4d6', 'Opens edit history'),
        a('e07a85a2', 'Post unavailable'),
        a('ffeb2fc6', 'Up next'),
        a('af2a65d9', function (e) {
          return e.timestamp + ' selected'
        }),
        a('j3d49e93', function (e) {
          return e.timestamp + 'm'
        }),
        a('a394f905', function (e) {
          return e.seconds + ' seconds'
        }),
        a('f42c0c80', 'End of chosen section, use arrow keys to adjust selection'),
        a('i667afe8', 'Start of chosen section, use arrow keys to adjust selection'),
        a('gfaaead8', 'Untitled'),
        a('cfd13f46', 'Voice Dock')
      var s = o(202784),
        c = [],
        u = {}
      function d(e) {
        return e
      }
      var l = (function (e) {
        var t, o, a, l, f
        function b() {
          return e.apply(this, arguments) || this
        }
        return (
          (o = e),
          ((t = b).prototype = Object.create(o.prototype)),
          (t.prototype.constructor = t),
          r(t, o),
          (b.prototype.render = function () {
            return s.createElement.apply(s, this[this.props.$i18n].reduce(this.templateReducer, [s.Fragment, null]))
          }),
          (a = b),
          (l = [
            {
              key: 'bb85c49d',
              get: function get() {
                return ['X always keeps a copy of a Space for review. ', '.']
              },
            },
            {
              key: 'ba511cb5',
              get: function get() {
                return ['Spaces on web are listen-only. For the full experience, download the X app for ', ' or ', '.']
              },
            },
            {
              key: 'j552b5e9',
              get: function get() {
                return ['Anyone can listen, including people not logged in to X. ']
              },
            },
            {
              key: 'ib602fd9',
              get: function get() {
                return ['You can control how your followers see the Spaces you’re listening to. ']
              },
            },
            {
              key: 'ad0d9fc7',
              get: function get() {
                return ['X will keep a recording of Spaces for at least 30 days to review reports. ']
              },
            },
            {
              key: 'h43303d7',
              get: function get() {
                return [
                  'Only the top 1k guests can be shown. There might be people listening who aren’t logged in to X. ',
                  '.',
                ]
              },
            },
            {
              key: 'f0e84609',
              get: function get() {
                return ['', ' ago']
              },
            },
            {
              key: 'j23c6259',
              get: function get() {
                return [
                  'Provide links to at least three articles about you in qualifying news publications that have been published within the last six months. ',
                ]
              },
            },
            {
              key: 'gf887169',
              get: function get() {
                return ['You’ll need to meet specific requirements depending on the type of X account you have. ']
              },
            },
            {
              key: 'd454b49f',
              get: function get() {
                return ['Pick the option that best describes your account. ']
              },
            },
            {
              key: 'hd977dd9',
              get: function get() {
                return [
                  'Pick a method to show that your account qualifies for verification as an activist or organizer.',
                ]
              },
            },
            {
              key: 'e3432573',
              get: function get() {
                return [
                  'You have not met the minimum follower or mention threshold for your region that is required to be verified as an activist. ',
                ]
              },
            },
            {
              key: 'efd8f6e7',
              get: function get() {
                return ['Provide a link to a Google Trends profile with evidence of recent search activity about you. ']
              },
            },
            {
              key: 'fe54dcfd',
              get: function get() {
                return [
                  'Provide a link to a Wikipedia page about you. It must contain at least three external references. ',
                ]
              },
            },
            {
              key: 'ie26d72d',
              get: function get() {
                return [
                  'Provide a link that references you in a leadership position for a Verified advocacy organization. The reference must come from the official site of a Verified organization. ',
                ]
              },
            },
            {
              key: 'af3fe861',
              get: function get() {
                return [
                  'Pick a method to show that your account qualifies for verification as an influential individual. ',
                ]
              },
            },
            {
              key: 'a08d6af3',
              get: function get() {
                return [
                  'You have not met the minimum follower or mention threshold for your region that is required to be verified as a content creator or influential individual. ',
                ]
              },
            },
            {
              key: 'f774e39d',
              get: function get() {
                return [
                  'Pick a method to show that your account qualifies for verification as a prominent company, brand, or organization. ',
                ]
              },
            },
            {
              key: 'd8510869',
              get: function get() {
                return [
                  'Provide a link to a Google Trends profile with evidence of recent search activity about your company, brand, or organization. ',
                ]
              },
            },
            {
              key: 'h75e3641',
              get: function get() {
                return [
                  'Provide a link to a Wikipedia page about your company, brand, or organization that contains at least three external references. ',
                ]
              },
            },
            {
              key: 'de6d69a1',
              get: function get() {
                return [
                  'Provide a link showing evidence of that your company, brand, or organization is listed on a public stock exchange. ',
                ]
              },
            },
            {
              key: 'be0e8fdb',
              get: function get() {
                return [
                  'Provide links to at least three articles about your company in verified news publications in the last six months. ',
                ]
              },
            },
            {
              key: 'baed7213',
              get: function get() {
                return [
                  'You must hold a senior leadership position at a verified organization to be eligible for verification in this category. Add your organization’s account to confirm eligibility. ',
                ]
              },
            },
            {
              key: 'c5d688cf',
              get: function get() {
                return [
                  'Pick a method to show that your account qualifies for verification as a senior leader of a prominent organization. ',
                ]
              },
            },
            {
              key: 'fce3e22d',
              get: function get() {
                return [
                  'Provide links to least three articles published by verified news organizations within the last six months that reference you as a senior leader or executive at your organization. ',
                ]
              },
            },
            {
              key: 'f1b276f1',
              get: function get() {
                return [
                  'Provide a link that references you as a senior leader at your organization. The reference must come from the official site of a verified company, brand, or organization. ',
                ]
              },
            },
            {
              key: 'e2465097',
              get: function get() {
                return [
                  'Provide a link to a Google Trends profile with evidence of recent search activity about your production. ',
                ]
              },
            },
            {
              key: 'g83bcecd',
              get: function get() {
                return [
                  'Provide links to at least three articles about your production in qualifying news publications in the last six months. ',
                ]
              },
            },
            {
              key: 'f3016c6f',
              get: function get() {
                return [
                  'Pick a method to show that your account qualifies for Verification as the official account of a major production. ',
                ]
              },
            },
            {
              key: 'h74144bd',
              get: function get() {
                return [
                  'Provide a link showing evidence that your production organization is listed on a public stock exchange. ',
                ]
              },
            },
            {
              key: 'jef5dfc5',
              get: function get() {
                return [
                  'Provide a link to a Wikipedia page about your production that contains at least three external references. ',
                ]
              },
            },
            {
              key: 'gf5a4309',
              get: function get() {
                return [
                  'Pick a method to show that your account qualifies for verification as a prominent entertainment company. ',
                ]
              },
            },
            {
              key: 'g2e175b1',
              get: function get() {
                return [
                  'Provide a link to a Google Trends profile with evidence of recent search activity about your entertainment company. ',
                ]
              },
            },
            {
              key: 'efc369c3',
              get: function get() {
                return [
                  'Provide links to at least three articles about your company in qualifying news publications in the last six months. ',
                ]
              },
            },
            {
              key: 'ff03f07d',
              get: function get() {
                return [
                  'Provide a link showing evidence that your entertainment company is listed on a public stock exchange. ',
                ]
              },
            },
            {
              key: 'a3e9dde3',
              get: function get() {
                return [
                  'Provide a link to a Wikipedia page about your entertainment company that contains at least three external references. ',
                ]
              },
            },
            {
              key: 'c2b8fb3d',
              get: function get() {
                return [
                  'Pick a method to show that your account qualifies for verification as an influential digital content creator. ',
                ]
              },
            },
            {
              key: 'fd33ce05',
              get: function get() {
                return [
                  'Provide a link to your content creator profile. Your creator profile can be on any digital platform but it must reference your X handle. ',
                ]
              },
            },
            {
              key: 'bb47d2b9',
              get: function get() {
                return [
                  'Provide a link to a Wikipedia page about you that contains at least three external references. ',
                ]
              },
            },
            {
              key: 'db930fb3',
              get: function get() {
                return [
                  'Pick a method to show that your account qualifies for verification as an individual in entertainment. ',
                ]
              },
            },
            {
              key: 'dc263ec1',
              get: function get() {
                return ['Provide a link to your IMDB profile that includes at least 50 production credits. ']
              },
            },
            {
              key: 'd18a48d5',
              get: function get() {
                return [
                  'Provide a link that references you as an individual in entertainment and your X account. The reference must come from the official website of a Verified entity. ',
                ]
              },
            },
            {
              key: 'i3b4217b',
              get: function get() {
                return ['Pick the category which best describes your government account. ']
              },
            },
            {
              key: 'ja62479f',
              get: function get() {
                return [
                  'Provide links to least five articles published by verified news organizations within the last six months that reference you as a qualifying candidate for office. ',
                ]
              },
            },
            {
              key: 'f28bbbb1',
              get: function get() {
                return [
                  'Provide links to least five articles published by verified news organizations within the last six months that reference you as a qualifying government office. ',
                ]
              },
            },
            {
              key: 'b229f4b9',
              get: function get() {
                return [
                  'Provide links to least five articles published by verified news organizations within the last six months that reference you as a qualifying government official. ',
                ]
              },
            },
            {
              key: 'e85178bd',
              get: function get() {
                return [
                  'Provide a link to your official campaign website referencing you as a candidate for government office at the state- or national-level and your X account. ',
                ]
              },
            },
            {
              key: 'i499f8f7',
              get: function get() {
                return [
                  'Provide a link to an official government website that references your government office or public service and your X account. ',
                ]
              },
            },
            {
              key: 'a394654f',
              get: function get() {
                return [
                  'Provide a link that references you as a qualifying government official or affiliate. The reference must come from the official site of a verified government organization. ',
                ]
              },
            },
            {
              key: 'dcb0da53',
              get: function get() {
                return [
                  'Journalists must be employed by a verified news organization or publication to be verified. Provide a link to your employer’s account. ',
                ]
              },
            },
            {
              key: 'd82a96af',
              get: function get() {
                return ['Pick a method to show that your account qualifies for verification as a notable journalist. ']
              },
            },
            {
              key: 'd47b4101',
              get: function get() {
                return [
                  'Provide a link that references you as a journalist for your employer. The reference must come from the official site of a verified news organization. ',
                ]
              },
            },
            {
              key: 'a3540593',
              get: function get() {
                return [
                  'Provide at least three bylines and/or credits in qualifying publications published within the last six months. ',
                ]
              },
            },
            {
              key: 'edb782e7',
              get: function get() {
                return [
                  'Pick a method to show that your account qualifies for verification as a prominent news organization. ',
                ]
              },
            },
            {
              key: 'cc16af2d',
              get: function get() {
                return [
                  'Provide a link to a Google Trends profile with evidence of recent search activity about your news organization. ',
                ]
              },
            },
            {
              key: 'b42b7001',
              get: function get() {
                return [
                  'Provide a link to a Wikipedia page about your news organization that contains at least three external references. ',
                ]
              },
            },
            {
              key: 'fd2c6f63',
              get: function get() {
                return [
                  'Provide a link showing evidence that your news organization is listed on a public stock exchange. ',
                ]
              },
            },
            {
              key: 'ec7027cd',
              get: function get() {
                return [
                  'Provide links to at least three articles about your news organization in verified news publications in the last six months. ',
                ]
              },
            },
            {
              key: 'a0a9f835',
              get: function get() {
                return [
                  'Individuals in professional sports must compete in verified sports leagues and events to be verified. Provide a link to the verified team, league, event, or organization relevant to your account.',
                ]
              },
            },
            {
              key: 'iba551d5',
              get: function get() {
                return [
                  'You have not met the minimum follower threshold for your region that is required to be verified as an individual in gaming. ',
                ]
              },
            },
            {
              key: 'h515e869',
              get: function get() {
                return [
                  'Individuals in gaming must compete in verified esports leagues and events to be verified. Provide a link to the verified team, league, event, or organization relevant to your account.',
                ]
              },
            },
            {
              key: 'd2cd7f89',
              get: function get() {
                return [
                  'Pick a method to show that your account qualifies for verification as a prominent sports league, team, or global competition. ',
                ]
              },
            },
            {
              key: 'c68614a3',
              get: function get() {
                return [
                  'Provide a link to a Google Trends profile with evidence of recent search activity about your professional sports organization. ',
                ]
              },
            },
            {
              key: 'b4ea622f',
              get: function get() {
                return [
                  'Provide a link to a Wikipedia page about your professional sports organization that contains at least three external references. ',
                ]
              },
            },
            {
              key: 'acab99f7',
              get: function get() {
                return [
                  'Provide a link showing evidence of that your professional sports organization is listed on a public stock exchange. ',
                ]
              },
            },
            {
              key: 'df0b2577',
              get: function get() {
                return [
                  'Provide a link to the official website of a global competition or professional sports organization that references you as a league, team, or competition. ',
                ]
              },
            },
            {
              key: 'jfda4c29',
              get: function get() {
                return [
                  'Provide links to at least three articles about your organization in verified news publications in the last six months. ',
                ]
              },
            },
            {
              key: 'g3299df1',
              get: function get() {
                return [
                  'Pick a method to show that your account qualifies for verification as a professional athlete. ',
                ]
              },
            },
            {
              key: 'id6bbc01',
              get: function get() {
                return [
                  'Pick a method to show that your account qualifies for verification as an individual in gaming. ',
                ]
              },
            },
            {
              key: 'fbe119c5',
              get: function get() {
                return [
                  'Provide a link to the official website of a global competition or professional sports organization that references you as a professional athlete, manager, or coach. ',
                ]
              },
            },
            {
              key: 'da0e7f33',
              get: function get() {
                return [
                  'Provide a link to the official website of a verified esports league or event that references you as a rostered team member, coach, or manager. ',
                ]
              },
            },
            {
              key: 'ca20e39f',
              get: function get() {
                return [
                  'Unfortunately, we’re currently not able to process any new verification requests. Check back later and give it another try. ',
                ]
              },
            },
            {
              key: 'jf9308af',
              get: function get() {
                return [
                  'In order to verify your identity via email, you must have a previously verified address. To do this, navigate to ',
                  '.',
                ]
              },
            },
            {
              key: 'e9976a41',
              get: function get() {
                return [
                  'In order to verify your identity via email, you need a verified email address that meets our eligibility requirements. To do this, navigate to ',
                  '.',
                ]
              },
            },
            {
              key: 'e5b4cc43',
              get: function get() {
                return [
                  'Verification is for notable people or groups within a specific category. If that sounds like you, start a verification request. ',
                ]
              },
            },
            {
              key: 'bfb355fb',
              get: function get() {
                return [
                  'Make sure your face and the text on your ID are clearly visible and legible. If not, you might have to resubmit. X will not receive or store a copy of your ID. ',
                ]
              },
            },
            {
              key: 'd65a41c3',
              get: function get() {
                return [
                  'For information about how you can access or correct any data submitted, please visit our ',
                  '.',
                ]
              },
            },
            {
              key: 'a1c39f5b',
              get: function get() {
                return [
                  'You’ll be contacted as soon as a decision has been made. This could take up to ' +
                    this.props.days +
                    ' day' +
                    n(this.props.days, '', 's') +
                    '.',
                ]
              },
            },
            {
              key: 'ja826537',
              get: function get() {
                return ['Help us improve with a brief ', '.']
              },
            },
            {
              key: 'b7be91bf',
              get: function get() {
                return [
                  'Your last request was denied on ' +
                    this.props.date +
                    '. You’ll need to wait 30 days from that date to submit a new request.',
                ]
              },
            },
            {
              key: 'jcb00a95',
              get: function get() {
                return [
                  'Your last request was made on ' +
                    this.props.date +
                    '. You’ll need to wait 30 days from that date to submit a new request.',
                ]
              },
            },
            {
              key: 'j92ea4b9',
              get: function get() {
                return [
                  'Your last request was made on ' +
                    this.props.date +
                    '. You’ll be contacted as soon as a decision has been made.',
                ]
              },
            },
            {
              key: 'jbcd22b1',
              get: function get() {
                return ['Have fun and remember to follow the ', '.']
              },
            },
            {
              key: 'hcecd237',
              get: function get() {
                return [
                  'These are the apps which you connected to your account. You can see the information these apps have access to and revoke access. ',
                ]
              },
            },
            {
              key: 'i34eeb37',
              get: function get() {
                return [this.props.infoText + ' ']
              },
            },
            {
              key: 'aa1b5fdd',
              get: function get() {
                return ['People you follow will always be able to message you. ']
              },
            },
            {
              key: 'd79b6b7b',
              get: function get() {
                return [
                  'Connect a managing account so your automated account receives an automated account label. All automated accounts must be connected to a managing account. ',
                ]
              },
            },
            {
              key: 'c1976bcf',
              get: function get() {
                return ['', ' ']
              },
            },
            {
              key: 'e1a49407',
              get: function get() {
                return ['Once you join X, you can respond to ', '’s post.']
              },
            },
            {
              key: 'be54ed41',
              get: function get() {
                return ['When you join X, you can share ', '’s post with your followers.']
              },
            },
            {
              key: 'jb19eb17',
              get: function get() {
                return ['Join X now to let ', ' know you like their post.']
              },
            },
            {
              key: 'bbfee611',
              get: function get() {
                return ['Follow ', ' to see what they share on X.']
              },
            },
            {
              key: 'af104f2b',
              get: function get() {
                return ['Join X now so you can share ', '’s post privately.']
              },
            },
            {
              key: 'ccc1f303',
              get: function get() {
                return ['Follow ', ' for curated posts']
              },
            },
            {
              key: 'ce02fabf',
              get: function get() {
                return ['Join X now to see a stream of posts from people curated by ', '.']
              },
            },
            {
              key: 'a85608a7',
              get: function get() {
                return [
                  'Join X now to discover new and interesting conversations about the things that matter most to you, like ',
                  '.',
                ]
              },
            },
            {
              key: 'be5322c7',
              get: function get() {
                return ['', ' ']
              },
            },
            {
              key: 'c5f6ee1d',
              get: function get() {
                return ['', ' ']
              },
            },
            {
              key: 'e4af7661',
              get: function get() {
                return [
                  'X and its partners use cookies to provide you with a better, safer and faster service and to support our business. Some cookies are necessary to use our services, improve our services, and make sure they work properly. If you click "Accept all cookies," you also allow X and its partners to use cookies to provide you with ads and communications tailored to your interests. If you click “Refuse non-essential cookies,” we won’t use cookies to gather additional data for tailored ads and communications. To learn more, including how to change your choice, visit the cookie page of our ',
                  '.',
                ]
              },
            },
            {
              key: 'a268632b',
              get: function get() {
                return [
                  'X and its partners use cookies to provide you with a better, safer and faster service and to support our business. Some cookies are necessary to use our services, improve our services, and make sure they work properly. ',
                ]
              },
            },
            {
              key: 'db79453f',
              get: function get() {
                return [
                  'We try to keep X a place for healthy conversation, so we’ve disabled most of the ways to engage with this post. If you want to talk about it, you can still Quote it. ',
                ]
              },
            },
            {
              key: 'i2a606d1',
              get: function get() {
                return [
                  'We try to keep X a place for healthy conversation, so we’ve disabled most of the ways to engage with this post. ',
                ]
              },
            },
            {
              key: 'fe93026b',
              get: function get() {
                return ['Only @' + this.props.username + ' and their Circle can see these posts.']
              },
            },
            {
              key: 'ef5d531f',
              get: function get() {
                return ['', ' ']
              },
            },
            {
              key: 'e4eeeeff',
              get: function get() {
                return ['', ' ']
              },
            },
            {
              key: 'c9174f1f',
              get: function get() {
                return ['', ' ']
              },
            },
            {
              key: 'd794bc6d',
              get: function get() {
                return ['', ' ']
              },
            },
            {
              key: 'hb92c979',
              get: function get() {
                return ['', '/' + this.props.maxLimit + ' characters']
              },
            },
            {
              key: 'c4d3d079',
              get: function get() {
                return ['By signing up, you agree to the ', ' and ', ', including ']
              },
            },
            {
              key: 'b38e130b',
              get: function get() {
                return ['', ' ']
              },
            },
            {
              key: 'j33cc663',
              get: function get() {
                return ['These are set and enforced by Community admins and are in addition to ', '.']
              },
            },
            {
              key: 'gb7eca21',
              get: function get() {
                return [
                  'Communities are public, so protected accounts can’t join right now. You can read the posts, but to participate, ',
                  '.',
                ]
              },
            },
            {
              key: 'jb124a07',
              get: function get() {
                return ['A moderator removed you for violating this Community rule: ']
              },
            },
            {
              key: 'd6d818a1',
              get: function get() {
                return [this.props.viewerCount + ' views']
              },
            },
            {
              key: 'd2924acb',
              get: function get() {
                return ['', ' ']
              },
            },
            {
              key: 'a5d9d071',
              get: function get() {
                return ['GIF via ']
              },
            },
            {
              key: 'i9606e33',
              get: function get() {
                return ['Video via ']
              },
            },
            {
              key: 'i1a64d47',
              get: function get() {
                return ['Photo via ']
              },
            },
            {
              key: 'h0d6f2c5',
              get: function get() {
                return ['', '']
              },
            },
            {
              key: 'a492659f',
              get: function get() {
                return ['', '']
              },
            },
            {
              key: 'h36fe5c9',
              get: function get() {
                return ['Search instead for "', '"']
              },
            },
            {
              key: 'hce48b8b',
              get: function get() {
                return ['Did you mean "', '"?']
              },
            },
            {
              key: 'f8ea2809',
              get: function get() {
                return [this.props.selection + ' can reply now']
              },
            },
            {
              key: 'd247a0b9',
              get: function get() {
                return [
                  'Edit functionality is limited to original posts and doesn’t include things like replies or threads. ',
                  ' about what you can edit.',
                ]
              },
            },
            {
              key: 'g8ffaf17',
              get: function get() {
                return ['', ' ']
              },
            },
            {
              key: 'h3326073',
              get: function get() {
                return ['Want to edit your Circle? Go for it. People won`t be notified if you remove them. ', '.']
              },
            },
            {
              key: 'e2e6ea0d',
              get: function get() {
                return ['via ']
              },
            },
            {
              key: 'j0b75ce7',
              get: function get() {
                return ['', ' the new article composer for new formatting options.']
              },
            },
            {
              key: 'dd964cf3',
              get: function get() {
                return [
                  'Communities are public, so protected accounts can’t join the conversation. You can read and like the posts, but to do more, you’ll need to ',
                  '.',
                ]
              },
            },
            {
              key: 'e34022a7',
              get: function get() {
                return ['Replying to ']
              },
            },
            {
              key: 'bfd9c99b',
              get: function get() {
                return ['Replying to ']
              },
            },
            {
              key: 'g7a1000f',
              get: function get() {
                return ['Replying to ']
              },
            },
            {
              key: 'i558c201',
              get: function get() {
                return ['Replying to ']
              },
            },
            {
              key: 'j935bcdf',
              get: function get() {
                return ['Replying to ', ' in ' + this.props.communityName]
              },
            },
            {
              key: 'i7bd9c8f',
              get: function get() {
                return ['Replying to ', ' in ' + this.props.communityName]
              },
            },
            {
              key: 'cfa0049d',
              get: function get() {
                return ['Replying to ', ' in ' + this.props.communityName]
              },
            },
            {
              key: 'jfc8e4b5',
              get: function get() {
                return ['Replying to ', ' in ' + this.props.communityName]
              },
            },
            {
              key: 'fe06c9f5',
              get: function get() {
                return ['Replying to ', '. Your reply will be also visible to their ', '.']
              },
            },
            {
              key: 'f7e12e15',
              get: function get() {
                return ['Replying to ', '. Your reply will be also visible to their ', '.']
              },
            },
            {
              key: 'eade6035',
              get: function get() {
                return ['Replying to ', '. Your reply will be also visible to their ', '.']
              },
            },
            {
              key: 'da018b37',
              get: function get() {
                return ['Replying to ', '. Your reply will be also visible to their ', '.']
              },
            },
            {
              key: 'e119d033',
              get: function get() {
                return [
                  'Replying to ',
                  '. ' +
                    this.props.trustedFriendsTweetOwner +
                    '’s Circle who follow you will also be able to see your reply.',
                ]
              },
            },
            {
              key: 'd0c02e7b',
              get: function get() {
                return [
                  'Replying to ',
                  '. ' + this.props.trustedFriendsTweetOwner + '’s Circle will also be able to see your reply.',
                ]
              },
            },
            {
              key: 'bce67b49',
              get: function get() {
                return ['Replying to ', '. ', ' Circle who follow you will also be able to see your reply.']
              },
            },
            {
              key: 'e460ccf1',
              get: function get() {
                return ['Replying to ', '. ', ' Circle will also be able to see your reply.']
              },
            },
            {
              key: 'i421898b',
              get: function get() {
                return ['Replying to ', '. ', ' Circle who follow you will also be able to see your reply.']
              },
            },
            {
              key: 'c70a17eb',
              get: function get() {
                return ['Replying to ', '. ', ' Circle will also be able to see your reply.']
              },
            },
            {
              key: 'b0d6bca7',
              get: function get() {
                return ['Replying to ', '. ', ' Circle who follow you will also be able to see your reply.']
              },
            },
            {
              key: 'aacf46d1',
              get: function get() {
                return ['Replying to ', '. ', ' Circle will also be able to see your reply.']
              },
            },
            {
              key: 'ff2f533f',
              get: function get() {
                return ['By clicking Promote post you’re agreeing to the ']
              },
            },
            {
              key: 'bd7349bb',
              get: function get() {
                return ['Last saved ']
              },
            },
            {
              key: 'hb16b207',
              get: function get() {
                return ['', ' will be unpublished, moved to your drafts, and won’t be publicly visible.']
              },
            },
            {
              key: 'dd5806bb',
              get: function get() {
                return ['The following media includes potentially sensitive content. ']
              },
            },
            {
              key: 'jd312ce9',
              get: function get() {
                return [
                  'Subscribe to Verified Organizations and get $1k of ads credits to run on any account in your organization. ',
                ]
              },
            },
            {
              key: 'd80a7547',
              get: function get() {
                return ['', ' is hosting']
              },
            },
            {
              key: 'j7293d6b',
              get: function get() {
                return ['', ' is co-hosting']
              },
            },
            {
              key: 'df79977f',
              get: function get() {
                return ['', ' is speaking']
              },
            },
            {
              key: 'ad960f39',
              get: function get() {
                return ['', ' is listening']
              },
            },
            {
              key: 'a20c0721',
              get: function get() {
                return ['Last edited: ']
              },
            },
            {
              key: 'a9ce2dd5',
              get: function get() {
                return ['', ' for help and how-to’s.']
              },
            },
            {
              key: 'c5064c6f',
              get: function get() {
                return ['', ' ']
              },
            },
            {
              key: 'f3c4e2c5',
              get: function get() {
                return ['Your new email ' + this.props.unverifiedEmail + ' has not been confirmed. ']
              },
            },
            {
              key: 'f05afae5',
              get: function get() {
                return [
                  'Changing your password will log you out of all your active X sessions except the one you’re using at this time. The ',
                  ' with access to your account won’t be affected. ',
                ]
              },
            },
            {
              key: 'a4455c05',
              get: function get() {
                return [
                  'Write it down, or take a screenshot, and keep it some place safe. This code can only be used once. ',
                ]
              },
            },
            {
              key: 'cd68cf4b',
              get: function get() {
                return [
                  'This is the primary country associated with your account. Your country helps us to customize your X experience. ',
                ]
              },
            },
            {
              key: 'g66a254b',
              get: function get() {
                return [
                  'These are the contacts that you have imported from your mobile devices. This information is used to personalize your experience on X, such as suggesting accounts to follow. You can remove any contacts you’ve previously uploaded and turn off syncing with X on all devices. Please be aware that this takes a little time. ',
                ]
              },
            },
            {
              key: 'ffa48331',
              get: function get() {
                return ['If enabled, you will be able to attach location information to your posts. ']
              },
            },
            {
              key: 'ab3bf5a7',
              get: function get() {
                return [
                  'When you block someone, that person won’t be able to follow or message you, and you won’t see notifications from them. ',
                ]
              },
            },
            {
              key: 'g124fce9',
              get: function get() {
                return ['Some account information may still be available in search engines, such as Google or Bing. ']
              },
            },
            {
              key: 'd9ef8fbb',
              get: function get() {
                return [
                  'If you just want to change your @username, you don’t need to deactivate your account — edit it in your ',
                  '.',
                ]
              },
            },
            {
              key: 'b7a3adc1',
              get: function get() {
                return [
                  'To use your current @username or email address with a different X account, ',
                  ' before you deactivate this account.',
                ]
              },
            },
            {
              key: 'f3613d0b',
              get: function get() {
                return [
                  'If you want to download ',
                  ', you’ll need to complete both the request and download process before deactivating your account. Links to download your data cannot be sent to deactivated accounts.',
                ]
              },
            },
            {
              key: 'e9dec56f',
              get: function get() {
                return ['You are confirming that ', ', is accurate. If it’s not, your account may be affected.']
              },
            },
            {
              key: 'cfd2909d',
              get: function get() {
                return ['X uses your age to customize your experience, including ads, as explained in our ', '.']
              },
            },
            {
              key: 'jea9c1cb',
              get: function get() {
                return ['You can control who sees your birthday on X. ']
              },
            },
            {
              key: 'eb96a831',
              get: function get() {
                return ['These filters won’t affect notifications from people you follow. ']
              },
            },
            {
              key: 'aba5a349',
              get: function get() {
                return ['You can mute one word, phrase, @username, or hashtag at a time. ']
              },
            },
            {
              key: 'f03ea36d',
              get: function get() {
                return [
                  'When you mute words, you won’t get any new notifications for posts that include them or see posts with those words in your Home timeline. ',
                ]
              },
            },
            {
              key: 'b0b13519',
              get: function get() {
                return ['Here’s everyone you muted. You can add or remove them from this list. ']
              },
            },
            {
              key: 'e212a9ab',
              get: function get() {
                return ['Manage your preferences for seeing sensitive media on X. Learn more about our ', '.']
              },
            },
            {
              key: 'cbc4f32d',
              get: function get() {
                return [
                  'This includes other media that’s been marked as sensitive, such as media from accounts that have marked their ',
                  ' as sensitive.',
                ]
              },
            },
            {
              key: 'c3e62899',
              get: function get() {
                return ['']
              },
            },
            {
              key: 'a8e78be7',
              get: function get() {
                return [
                  'Your account has been flagged and cannot participate in the Ad Revenue Sharing program. You may appeal by following the instructions ',
                  '. Your share of revenue will continue to accrue while your appeal is processed.',
                ]
              },
            },
            {
              key: 'ge990f4f',
              get: function get() {
                return ['']
              },
            },
            {
              key: 'e8e2dcd3',
              get: function get() {
                return ['']
              },
            },
            {
              key: 'g7970bc7',
              get: function get() {
                return ['Subscribe to', '' + this.props.name]
              },
            },
            {
              key: 'd724f427',
              get: function get() {
                return ['']
              },
            },
            {
              key: 'h3d97f03',
              get: function get() {
                return ['']
              },
            },
            {
              key: 'b8437d65',
              get: function get() {
                return ['Manage settings that help limit unwelcome interactions. ']
              },
            },
            {
              key: 'a9c053c7',
              get: function get() {
                return ['By applying, you agree to be bound by the ']
              },
            },
            {
              key: 'geee69df',
              get: function get() {
                return [
                  'Pick a monthly price that makes sense for you and your audience. Wondering what you can earn? ',
                ]
              },
            },
            {
              key: 'g313be81',
              get: function get() {
                return ['Double-check and confirm your Subscription price is ' + this.props.price + ', ']
              },
            },
            {
              key: 'fdf28443',
              get: function get() {
                return ['By selecting to accept and continue, you agree to be bound by the ']
              },
            },
            {
              key: 'f43d68d7',
              get: function get() {
                return [
                  'Double-check and confirm your Subscription price. ',
                  ' while Subscriptions is in testing period.',
                ]
              },
            },
            {
              key: 'h406634b',
              get: function get() {
                return [
                  'We’ve confirmed your Stripe account. Subscriptions on your account will go live shortly. We’ll send you a notification as soon as it’s live. You can also visit your profile to see if subscriptions are enabled.',
                ]
              },
            },
            {
              key: 'd4b0b963',
              get: function get() {
                return ['By tapping below, you agree to the ', '.']
              },
            },
            {
              key: 'i3967b2f',
              get: function get() {
                return ['By selecting "Join & set up payouts" you agree to the ']
              },
            },
            {
              key: 'f1a3d63d',
              get: function get() {
                return ['Add your date of birth to your ', '.']
              },
            },
            {
              key: 'ce6f73c7',
              get: function get() {
                return ['Control how X customizes your experience in ']
              },
            },
            {
              key: 'j31f2f97',
              get: function get() {
                return ['Yes, all automated accounts need to be labeled. This is required under our ', '.']
              },
            },
            {
              key: 'ed8f77d3',
              get: function get() {
                return ['Learn more on the ', ' page.']
              },
            },
            {
              key: 'if2bb997',
              get: function get() {
                return ['Sorry to see you go. #GoodBye']
              },
            },
            {
              key: 'i1e24825',
              get: function get() {
                return [
                  'If you haven’t provided a date of birth, we’ve provided an age range based on your X profile and activity. Age information is used to personalize your experience. ',
                ]
              },
            },
            {
              key: 'a97ef88f',
              get: function get() {
                return [
                  'Tailored audiences are often built from email lists or browsing behaviors. They help advertisers reach prospective customers or people who have already expressed interest in their business. ',
                ]
              },
            },
            {
              key: 'f451c521',
              get: function get() {
                return ['You are currently a part of ', ' from ']
              },
            },
            {
              key: 'f27cc8af',
              get: function get() {
                return [
                  'To enable this, go to your ',
                  ' settings and turn on “Personalize based on your inferred identity”.',
                ]
              },
            },
            {
              key: 'h0085c59',
              get: function get() {
                return [
                  'To enable this, go to your ',
                  ' settings and turn on “Personalize based on your inferred identity”.',
                ]
              },
            },
            {
              key: 'b78e30fd',
              get: function get() {
                return [
                  'You can remove this information by disabling “Personalize based on your inferred identity” in your ',
                  ' settings.',
                ]
              },
            },
            {
              key: 'bb593021',
              get: function get() {
                return [
                  'You can remove this information by disabling “Personalize based on your inferred identity” in your ',
                  ' settings.',
                ]
              },
            },
            {
              key: 'h60f45ef',
              get: function get() {
                return [
                  'There are inferred hashes of email addresses that share common components with the email address you have provided to X. You can remove this information by disabling “Personalize based on your inferred identity” in your ',
                  ' settings.',
                ]
              },
            },
            {
              key: 'cbcb2413',
              get: function get() {
                return ['These are devices X uses to improve and measure your experience on this browser. ']
              },
            },
            {
              key: 'e21b623d',
              get: function get() {
                return ['These are browsers and devices associated with you. ']
              },
            },
            {
              key: 'i4d58f43',
              get: function get() {
                return [
                  'These are browsers, devices, and information X uses to personalize your experience. This includes devices and browsers you haven’t used to log in to X, as well as email addresses and phone numbers like those linked to your X account. ',
                ]
              },
            },
            {
              key: 'a1fdeb45',
              get: function get() {
                return ['Go to your ', ' to turn it on.']
              },
            },
            {
              key: 'hcb3ad67',
              get: function get() {
                return [
                  'If you see any suspicious activity from an app, go to ',
                  ' to revoke its access. In some cases the IP location may differ from your physical location. ',
                ]
              },
            },
            {
              key: 'adc26d49',
              get: function get() {
                return [
                  'X’s partners build audiences around shopping decisions, lifestyle, and other online and offline behaviors. ',
                ]
              },
            },
            {
              key: 'efc1de65',
              get: function get() {
                return ['Something went wrong and your X data couldn’t be sent. To request your data, please ', '.']
              },
            },
            {
              key: 'ie5066ff',
              get: function get() {
                return [this.props.seconds + 's']
              },
            },
            {
              key: 'idcd199b',
              get: function get() {
                return [this.props.minutes + 'm' + this.props.seconds + 's']
              },
            },
            {
              key: 'ee530bbf',
              get: function get() {
                return [this.props.hours + 'h' + this.props.minutes + 'm']
              },
            },
            {
              key: 'bff29c95',
              get: function get() {
                return ['', ' changed the group photo']
              },
            },
            {
              key: 'b16e4d45',
              get: function get() {
                return ['You changed the group name to ']
              },
            },
            {
              key: 'c5760699',
              get: function get() {
                return ['', ' changed the group name to ']
              },
            },
            {
              key: 'a72730a1',
              get: function get() {
                return ['The group name was changed to ']
              },
            },
            {
              key: 'a4bc88c3',
              get: function get() {
                return ['', ' added ']
              },
            },
            {
              key: 'bfdff0c3',
              get: function get() {
                return ['', ' added']
              },
            },
            {
              key: 'fc10875f',
              get: function get() {
                return ['', ' left']
              },
            },
            {
              key: 'fa95b019',
              get: function get() {
                return ['', ' added you']
              },
            },
            {
              key: 'e3534477',
              get: function get() {
                return ['There are ', ' in this group']
              },
            },
            {
              key: 'b6656851',
              get: function get() {
                return [
                  'There ' +
                    n(this.props.count, 'is', 'are') +
                    ' ' +
                    this.props.count +
                    ' other pe' +
                    n(this.props.count, 'rson', 'ople') +
                    ' in this group',
                ]
              },
            },
            {
              key: 'd6db6323',
              get: function get() {
                return ['This post might include sensitive content. ']
              },
            },
            {
              key: 'c8b914d5',
              get: function get() {
                return ['', ' ·']
              },
            },
            {
              key: 'c51866e3',
              get: function get() {
                return ['Messages are encrypted. ']
              },
            },
            {
              key: 'af0bb3eb',
              get: function get() {
                return ['You cannot send encrypted Direct Messages to this person. ']
              },
            },
            {
              key: 'b9f61623',
              get: function get() {
                return ['You can no longer send messages to this person. ']
              },
            },
            {
              key: 'h27b1291',
              get: function get() {
                return [
                  'This encrypted conversation is not accessible from your current device. To access it, please log in from your previous device. ',
                ]
              },
            },
            {
              key: 'bcabe3f5',
              get: function get() {
                return ['You cannot message this group because you are not verified. ']
              },
            },
            {
              key: 'jdef4bc7',
              get: function get() {
                return ['You cannot message this user because you are not verified. ']
              },
            },
            {
              key: 'i005f1fd',
              get: function get() {
                return ['You responded to ', '’s Fleet: ']
              },
            },
            {
              key: 'b35cee41',
              get: function get() {
                return ['Responded to your Fleet: ']
              },
            },
            {
              key: 'dc4b75a1',
              get: function get() {
                return ['', ' sent a GIF']
              },
            },
            {
              key: 'hcbbbb35',
              get: function get() {
                return ['', ' sent a link']
              },
            },
            {
              key: 'c1e1f849',
              get: function get() {
                return ['', ' sent a photo']
              },
            },
            {
              key: 'c7e2464f',
              get: function get() {
                return ['', ' sent a sticker']
              },
            },
            {
              key: 'eee2f121',
              get: function get() {
                return ['', ' sent a video']
              },
            },
            {
              key: 'be5a9617',
              get: function get() {
                return ['', ' sent a voice message']
              },
            },
            {
              key: 'e802e257',
              get: function get() {
                return ['', ' shared a post']
              },
            },
            {
              key: 'b3a2b11d',
              get: function get() {
                return ['', ':']
              },
            },
            {
              key: 'd1f8bdd9',
              get: function get() {
                return ['You reacted to @', '’s video with ']
              },
            },
            {
              key: 'd764af97',
              get: function get() {
                return ['', ' reacted to @', '’s video with ']
              },
            },
            {
              key: 'ab1cdfe3',
              get: function get() {
                return ['You reacted to a video with ']
              },
            },
            {
              key: 'f0cf1699',
              get: function get() {
                return ['', ' reacted to a video with ']
              },
            },
            {
              key: 'hec0fd4d',
              get: function get() {
                return ['You reacted to @', '’s photo with ']
              },
            },
            {
              key: 'j55320df',
              get: function get() {
                return ['', ' reacted to @', '’s photo with ']
              },
            },
            {
              key: 'jf27606b',
              get: function get() {
                return ['You reacted to a photo with ']
              },
            },
            {
              key: 'cd110359',
              get: function get() {
                return ['', ' reacted to a photo with ']
              },
            },
            {
              key: 'e70dcc35',
              get: function get() {
                return ['You reacted to @', '’s GIF with ']
              },
            },
            {
              key: 'g1bf440b',
              get: function get() {
                return ['', ' reacted to @', '’s GIF with ']
              },
            },
            {
              key: 'b2da1bf9',
              get: function get() {
                return ['You reacted to a GIF with ']
              },
            },
            {
              key: 'g84c0421',
              get: function get() {
                return ['', ' reacted to a GIF with ']
              },
            },
            {
              key: 'hc1bd66d',
              get: function get() {
                return ['You reacted to @', '’s post with ']
              },
            },
            {
              key: 'bd3edf13',
              get: function get() {
                return ['', ' reacted to @', '’s post with ']
              },
            },
            {
              key: 'df2dc76f',
              get: function get() {
                return ['You reacted to a post with ']
              },
            },
            {
              key: 'aba18aef',
              get: function get() {
                return ['', ' reacted to a post with ']
              },
            },
            {
              key: 'cd2e7c19',
              get: function get() {
                return ['You reacted to @', '’s link with ']
              },
            },
            {
              key: 'aee9e7fb',
              get: function get() {
                return ['', ' reacted to @', '’s link with ']
              },
            },
            {
              key: 'f9fb1cf7',
              get: function get() {
                return ['You reacted to a link with ']
              },
            },
            {
              key: 'f2bf910f',
              get: function get() {
                return ['', ' reacted to a link with ']
              },
            },
            {
              key: 'i6cec545',
              get: function get() {
                return ['You reacted to @', '’s message with ', ': ']
              },
            },
            {
              key: 'd6998bab',
              get: function get() {
                return ['', ' reacted to @', '’s message with ', ': ']
              },
            },
            {
              key: 'cec676f3',
              get: function get() {
                return ['You reacted with ', ': ']
              },
            },
            {
              key: 'a2706f9b',
              get: function get() {
                return ['', ' reacted with ', ': ']
              },
            },
            {
              key: 'ff973a65',
              get: function get() {
                return ['You reacted to @', '’s voice message with ']
              },
            },
            {
              key: 'ec2cede5',
              get: function get() {
                return ['', ' reacted to @', '’s voice message with ']
              },
            },
            {
              key: 'i1d08199',
              get: function get() {
                return ['You reacted to a voice message with ']
              },
            },
            {
              key: 'd424b45f',
              get: function get() {
                return ['', ' reacted to a voice message with ']
              },
            },
            {
              key: 'd6b15bbf',
              get: function get() {
                return ['You reacted with ']
              },
            },
            {
              key: 'ac0d4bc7',
              get: function get() {
                return ['', ' reacted with ']
              },
            },
            {
              key: 'fa4f5b49',
              get: function get() {
                return [
                  'X systems scan shared links and media for spam, abuse, and prohibited content. We also analyze usage patterns to detect suspicious behavior and improve your experience. We may manually review DMs to investigate reported violations and misuse of our service, or to comply with laws or governmental requests. See our ',
                  ' for more details.',
                ]
              },
            },
            {
              key: 'a66142ad',
              get: function get() {
                return [
                  'Message requests from people you don’t follow live here. To reply to their messages, you need to accept the request. ',
                ]
              },
            },
            {
              key: 'b028aec5',
              get: function get() {
                return [
                  'We need to know if the X account ',
                  ' is yours. If it isn’t, we’ll go ahead and remove ',
                  ' from it.',
                ]
              },
            },
            {
              key: 'c43645ad',
              get: function get() {
                return [
                  'If the X account ',
                  ' is yours, and you want to unsubscribe from future email notifications, go to ',
                ]
              },
            },
            {
              key: 'b8e3884f',
              get: function get() {
                return [
                  'We’ve removed your email address ',
                  ' from the X account ',
                  '. Now you won’t get notifications intended for the account.',
                ]
              },
            },
            {
              key: 'b72bbe27',
              get: function get() {
                return ['']
              },
            },
            {
              key: 'iddf579b',
              get: function get() {
                return [
                  'Someone might have inadvertently entered your email address when signing up for their X account. Or, they might be using it to engage in abuse. You can report the account to help identify and remove spam from X. ',
                ]
              },
            },
            {
              key: 'd9cb9d0b',
              get: function get() {
                return ['Try following ', ' to get the most out of Top Articles.']
              },
            },
            {
              key: 'dc3a6d2d',
              get: function get() {
                return ['Followed @' + this.props.screenName + '. ', '.']
              },
            },
            {
              key: 'j5668d8f',
              get: function get() {
                return ['While listening anonymously, you will not be visible or able to participate. ']
              },
            },
            {
              key: 'fafd5f6f',
              get: function get() {
                return [
                  'One of the perks of being a Subscriber is exclusive access to Spaces like this one. Only @' +
                    this.props.screenName +
                    '’s Subscribers can join this Space. ',
                  '.',
                ]
              },
            },
            {
              key: 'b1e1d521',
              get: function get() {
                return [
                  'Increase your Rating Impact to ' +
                    this.props.ratingImpactToEarnIn +
                    ', from your current score of ' +
                    this.props.currentImpact +
                    ', and your writing ability will be unlocked.',
                ]
              },
            },
            {
              key: 'bd9cf141',
              get: function get() {
                return ['As the post author, you can ']
              },
            },
            {
              key: 'bf62daf1',
              get: function get() {
                return ['Shown on X']
              },
            },
            {
              key: 'd9f77781',
              get: function get() {
                return [this.props.impressions + '+ views']
              },
            },
            {
              key: 'e837f62f',
              get: function get() {
                return [this.props.impactDisplayNumber + ' Rating Impact']
              },
            },
            {
              key: 'f2bad803',
              get: function get() {
                return [this.props.impactDisplayNumber + ' Writing Impact']
              },
            },
            {
              key: 'j4f06e2f',
              get: function get() {
                return [
                  'Note originally added to the image on ',
                  ', and could be shown on other posts that include this image',
                ]
              },
            },
            {
              key: 'g68aa88d',
              get: function get() {
                return [
                  'Note originally added to the video on ',
                  ', and could be shown on other posts that include this video',
                ]
              },
            },
            {
              key: 'c6eb7cbb',
              get: function get() {
                return [
                  'Note originally added to the media on ',
                  ', and could be shown on other posts that include this media',
                ]
              },
            },
            {
              key: 'f392c099',
              get: function get() {
                return [
                  'Note originally added to the video on ',
                  ', and is showing on ' + this.props.matches + ' posts that include this video',
                ]
              },
            },
            {
              key: 'hd9366e1',
              get: function get() {
                return [
                  'Note originally added to the video on ',
                  ', and could be shown on ' + this.props.matches + ' posts that include this video',
                ]
              },
            },
            {
              key: 'd0766495',
              get: function get() {
                return [
                  'Note originally added to the image on ',
                  ', and is showing on ' + this.props.matches + ' posts that include this image',
                ]
              },
            },
            {
              key: 'fcb207f1',
              get: function get() {
                return [
                  'Note originally added to the image on ',
                  ', and could be shown on ' + this.props.matches + ' posts that include this image',
                ]
              },
            },
            {
              key: 'c1f1fd8f',
              get: function get() {
                return [
                  'Note originally added to the media on ',
                  ', and is showing on ' + this.props.matches + ' posts that include this media',
                ]
              },
            },
            {
              key: 'e3d93b2f',
              get: function get() {
                return [
                  'Note originally added to the media on ',
                  ', and could be shown on ' + this.props.matches + ' posts that include this media',
                ]
              },
            },
            {
              key: 'i8fa1313',
              get: function get() {
                return [
                  'Ratings are anonymized and made publicly available for transparency. Find out how Community Notes makes data ',
                  '.',
                ]
              },
            },
            {
              key: 'had203a9',
              get: function get() {
                return ['You rated this note as ', '.']
              },
            },
            {
              key: 'h42a21df',
              get: function get() {
                return ['You rated this note as ', '.']
              },
            },
            {
              key: 'c3d1a1b1',
              get: function get() {
                return ['You rated this note as ', '.']
              },
            },
            {
              key: 'f43e2fdf',
              get: function get() {
                return ['Shown to a small experimental group on X · ' + this.props.impressionTruncated + '+ views']
              },
            },
            {
              key: 'j72bc9ab',
              get: function get() {
                return ['Shown to a small experimental group on X']
              },
            },
            {
              key: 'd60e4375',
              get: function get() {
                return ['Shown on X · ' + this.props.impressionTruncated + '+ views']
              },
            },
            {
              key: 'b936a16b',
              get: function get() {
                return ['Ideas or suggestions to improve Community Notes? ']
              },
            },
            {
              key: 'if0d6dd7',
              get: function get() {
                return ['Community Notes contributors use aliases · ']
              },
            },
            {
              key: 'f49cbf83',
              get: function get() {
                return ['This feature is new to Community Notes, feel free to ']
              },
            },
            {
              key: 'a94c6db7',
              get: function get() {
                return [
                  'Increase your Rating Impact to ' +
                    this.props.requiredRatingImpact +
                    ', from your current score of ' +
                    this.props.currentRatingImpact +
                    '.',
                ]
              },
            },
            {
              key: 'f52f0cbd',
              get: function get() {
                return [this.props.num + ' deleted notes']
              },
            },
            {
              key: 'ccdfbd75',
              get: function get() {
                return ['To unlock your ability to write, increase this score to ' + this.props.requiredRatingImpact]
              },
            },
            {
              key: 'a32c38ad',
              get: function get() {
                return [
                  'Want to start writing notes? Raise your Rating Impact to ' +
                    this.props.requiredRatingImpact +
                    ' or higher.',
                ]
              },
            },
            {
              key: 'd458f69d',
              get: function get() {
                return [
                  'Community Notes keeps deleted notes’ status to accurately assign reputation to the note author and raters. ',
                ]
              },
            },
            {
              key: 'i42495ad',
              get: function get() {
                return ['Context is written by people who use X, and appears when rated helpful by others. ']
              },
            },
            {
              key: 'c475a5d3',
              get: function get() {
                return [
                  'Your use of the datasets is governed by the X Developer Agreement and Policy. By clicking on the Download icon, you agree to the ',
                  '.',
                ]
              },
            },
            {
              key: 'g19fcc5b',
              get: function get() {
                return ['File no. ' + this.props.fileIndex + ' of ' + this.props.totalFiles]
              },
            },
            {
              key: 'c43d1679',
              get: function get() {
                return ['See more at ']
              },
            },
            {
              key: 'b3a3ce8d',
              get: function get() {
                return ['Active ', ' ago']
              },
            },
            {
              key: 'd46c6e8f',
              get: function get() {
                return ['Are you sure you want to make ', ' a moderator?']
              },
            },
            {
              key: 'c3a1f2bf',
              get: function get() {
                return ['Are you sure you want to remove ', ' as a moderator?']
              },
            },
            {
              key: 'c2696cdf',
              get: function get() {
                return ['Enter ', ' to proceed']
              },
            },
            {
              key: 'je0779b7',
              get: function get() {
                return ['Reported by ']
              },
            },
            {
              key: 'a0071f71',
              get: function get() {
                return ['You hid @', '’s post']
              },
            },
            {
              key: 'c4ec9d43',
              get: function get() {
                return ['You kept @', '’s post']
              },
            },
            {
              key: 'he99cc29',
              get: function get() {
                return ['']
              },
            },
            {
              key: 'a346641b',
              get: function get() {
                return ['Created ' + this.props.date + ' by ']
              },
            },
            {
              key: 'a9ec3729',
              get: function get() {
                return ['', ' ']
              },
            },
            {
              key: 'g0aa3be7',
              get: function get() {
                return [
                  'To use this feature, switch to an account that you own.\n\nAs a contributor, you can send Direct Messages, publish posts, and create Lists — as well as view them.\n\nWe’re always looking for ways to improve Delegate. Feel free to ',
                ]
              },
            },
            {
              key: 'g29b68f9',
              get: function get() {
                return [
                  'To use this feature, switch to an account that you own.\n\nAs an admin, you can send Direct Messages, publish posts, and create Lists — as well as view them. You can also invite or remove contributors to the account and view post analytics.\n\nWe’re always looking for ways to improve Delegate. Feel free to ',
                ]
              },
            },
            {
              key: 'c6dca173',
              get: function get() {
                return ['', ' ']
              },
            },
            {
              key: 'e77bb49f',
              get: function get() {
                return ['Searching for “', '” ']
              },
            },
            {
              key: 'e6979e4b',
              get: function get() {
                return ['', ' to see more information about this job']
              },
            },
            {
              key: 'cc70dc63',
              get: function get() {
                return ['Viewing posts won’t unblock @' + this.props.screenName + '. ']
              },
            },
            {
              key: 'd6c6deaf',
              get: function get() {
                return ['Preorder for ']
              },
            },
            {
              key: 'f552e827',
              get: function get() {
                return ['Try pinning a ', ' or a ', ' to have easier access to your favorite content.']
              },
            },
            {
              key: 'db483b15',
              get: function get() {
                return ['Pin more ', ' and ', ' to have easier access to your favorite content.']
              },
            },
            {
              key: 'bbb47497',
              get: function get() {
                return [
                  'By clicking Subscribe, you agree to our ',
                  ' and our ',
                  '. Subscriptions auto-renew until canceled, as described in the Terms. Cancel anytime. A verified phone number is required to subscribe.',
                ]
              },
            },
            {
              key: 'd39ad44d',
              get: function get() {
                return [
                  'Likes, mentions, reposts, and a whole lot more — when it comes from a verified account, you’ll find it here. ',
                ]
              },
            },
            {
              key: 'b004e8bf',
              get: function get() {
                return ['Learn more about 3rd party app access in the ', '.']
              },
            },
            {
              key: 'afd52f45',
              get: function get() {
                return ['Made by ', '. Read ' + this.props.orgName + '’s ', ' and ', '.']
              },
            },
            {
              key: 'hc37d3bb',
              get: function get() {
                return [
                  'When you start the challenge, Google may collect and use information about you, your device, and browser. View Google’s ',
                  '.',
                ]
              },
            },
            {
              key: 'e7e44bab',
              get: function get() {
                return [
                  'Try searching for something else, or check your ',
                  ' to see if they’re protecting you from potentially sensitive content.',
                ]
              },
            },
            {
              key: 'aca10655',
              get: function get() {
                return [
                  'X Hiring is a free feature for ',
                  ' to post jobs, feature jobs on your company profile, and attract top talent to your open positions.',
                ]
              },
            },
            {
              key: 'c3d0d503',
              get: function get() {
                return [
                  'Add up to ',
                  ' jobs to be Featured Jobs on your company profile. All users will see these featured roles when they view your company’s profile.',
                ]
              },
            },
            {
              key: 'b2c03e03',
              get: function get() {
                return ['For questions related to X Hiring, email us at ', '.']
              },
            },
            {
              key: 'b0e31da1',
              get: function get() {
                return [
                  'By subscribing, you agree to our ',
                  '. Subscriptions auto-renew until canceled, as described in the ',
                  '. Cancel anytime. When upgrading to a higher priced tier, credit for the remainder of your previous subscription will go towards your account and automatically be applied to future payments. Your new subscription will start immediately. A verified phone number is required to subscribe.',
                ]
              },
            },
            {
              key: 'i37412cd',
              get: function get() {
                return [
                  'By subscribing, you agree to our ',
                  '. Subscriptions auto-renew until canceled, as described in the ',
                  '. Cancel anytime. When downgrading, your current subscription and the associated features will switch to the new subscription tier immediately. You will not receive a refund for any portion of your previous subscription, unless required by law. You will also be charged for the price of the new tier immediately. A verified phone number is required to subscribe.',
                ]
              },
            },
            {
              key: 'g5d7a791',
              get: function get() {
                return [
                  'By subscribing, you agree to our ',
                  '. Subscriptions auto-renew until canceled, as described in the ',
                  '. Cancel anytime. When you switch your plan, your new subscription will start immediately. Credit for the remainder of your previous subscription will go towards your account and automatically be applied to future payments. A verified phone number is required to subscribe.',
                ]
              },
            },
            {
              key: 'fb6fa495',
              get: function get() {
                return ['', this.props.activeTierName + ' at ' + this.props.activePriceLabel]
              },
            },
            {
              key: 'a9fbb925',
              get: function get() {
                return ['', this.props.newTierName + ' at ' + this.props.newPriceLabel]
              },
            },
            {
              key: 'i8197603',
              get: function get() {
                return [
                  'To report an intellectual property issue, please visit the ',
                  '. To report any other issues with this product, please go to the iOS or Android app.',
                ]
              },
            },
            {
              key: 'a21f2f79',
              get: function get() {
                return ['For more information on product violations, ', '.']
              },
            },
            {
              key: 'eeb5fb11',
              get: function get() {
                return ['Address info is shared with Google. See ', ' and ', ' to learn more.']
              },
            },
            {
              key: 'f9b1387f',
              get: function get() {
                return [
                  'Only admins and moderators of Communities can Spotlight them on their profiles. Want to ',
                  ' of your own?',
                ]
              },
            },
            {
              key: 'ef72b01b',
              get: function get() {
                return ['To find a crisis center near you, visit ']
              },
            },
            {
              key: 'e6c21d5b',
              get: function get() {
                return [
                  'If you feel like you’re in danger, we recommend you contact local law enforcement. They can reference our ',
                  ' if they have follow-up questions.',
                ]
              },
            },
            {
              key: 'f81ca1f5',
              get: function get() {
                return ['']
              },
            },
            {
              key: 'j449c95b',
              get: function get() {
                return ['']
              },
            },
            {
              key: 'e1d95725',
              get: function get() {
                return ['You can always unfollow from ', '.']
              },
            },
            {
              key: 'e420d1ed',
              get: function get() {
                return [
                  'People won’t be notified when you edit your Circle. Anyone you add will be able to see your previous Circle posts. ',
                ]
              },
            },
            {
              key: 'gc31d3e9',
              get: function get() {
                return ['Times this post was seen. To learn more, visit the ', '.']
              },
            },
            {
              key: 'he0e6ed7',
              get: function get() {
                return [
                  'Times this post was seen. It can take a few minutes for the view count to appear. To learn more, visit the ',
                  '.',
                ]
              },
            },
            {
              key: 'c780f52b',
              get: function get() {
                return ['View counts are not available for this post. To learn more, visit the ', '.']
              },
            },
            {
              key: 'fc2dfb3f',
              get: function get() {
                return [
                  'By clicking Create Promotion, you’re indicating that you have read and agree to the ',
                  ' and ',
                  '.',
                ]
              },
            },
            {
              key: 'fcf4b2a5',
              get: function get() {
                return ['By clicking Create Promotion, you’re indicating that you have read and agree to the ', '.']
              },
            },
            {
              key: 'f54ad505',
              get: function get() {
                return ['Some targeting options aren’t available for this ads account, in accordance with X’s ', '.']
              },
            },
            {
              key: 'd55bc8ed',
              get: function get() {
                return ['This post doesn’t have any hidden replies, but Protected posrs might be filtered out. ']
              },
            },
            {
              key: 'h9fba3eb',
              get: function get() {
                return [
                  'Notes aren’t available to read in your region yet. Follow ',
                  ' for announcements and updates about Notes, or read more in our ',
                  '.',
                ]
              },
            },
            {
              key: 'cd5e4a77',
              get: function get() {
                return ['By clicking below to make this purchase, you agree to be bound by the ', '.']
              },
            },
            {
              key: 'aa4026bf',
              get: function get() {
                return ['This prevents ', ' from including you in any of their Lists, including this one.']
              },
            },
            {
              key: 'f98ecc47',
              get: function get() {
                return [
                  'Are you sure you want to view these posts? Viewing posts won’t unblock @' +
                    this.props.screenName +
                    '. ',
                ]
              },
            },
            {
              key: 'eea0a14f',
              get: function get() {
                return [this.props.formattedCount + ' Like' + n(this.props.count, '', 's')]
              },
            },
            {
              key: 'ba6a357f',
              get: function get() {
                return [this.props.formattedCount + ' Photos & videos']
              },
            },
            {
              key: 'a0a3adf7',
              get: function get() {
                return [this.props.formattedCount + ' post' + n(this.props.count, '', 's')]
              },
            },
            {
              key: 'b5324b05',
              get: function get() {
                return [
                  'You’re temporarily autoblocked from viewing and interacting with ',
                  '’s posts. This happened when they were in Safety Mode, and we flagged your interactions as potentially abusive or spammy.',
                ]
              },
            },
            {
              key: 'd0271e51',
              get: function get() {
                return ['']
              },
            },
            {
              key: 'ed219b4b',
              get: function get() {
                return ['']
              },
            },
            {
              key: 'h9bd2805',
              get: function get() {
                return ['']
              },
            },
            {
              key: 'cc487b37',
              get: function get() {
                return ['']
              },
            },
            {
              key: 'cfcd2ce9',
              get: function get() {
                return ['']
              },
            },
            {
              key: 'hd184fd7',
              get: function get() {
                return ['']
              },
            },
            {
              key: 'bae036f9',
              get: function get() {
                return ['']
              },
            },
            {
              key: 'aec2e703',
              get: function get() {
                return ['']
              },
            },
            {
              key: 'f0dc3227',
              get: function get() {
                return ['']
              },
            },
            {
              key: 'e6264621',
              get: function get() {
                return ['You can’t follow or see @' + this.props.screenName + '’s posts. ']
              },
            },
            {
              key: 'b39e9abb',
              get: function get() {
                return [
                  ' · ' +
                    this.props.formattedFrequencyCount +
                    ' post' +
                    n(this.props.formattedFrequencyCount, '', 's') +
                    ' per month',
                ]
              },
            },
            {
              key: 'f575f533',
              get: function get() {
                return ['Categories are self-selected and not assigned, verified, or endorsed by X. ']
              },
            },
            {
              key: 'cebed305',
              get: function get() {
                return ['This account is affiliated with ', '.']
              },
            },
            {
              key: 'i1824ce3',
              get: function get() {
                return [
                  'Only approved followers can see @' +
                    this.props.screenName +
                    '’s posts. To request access, click Follow. ',
                ]
              },
            },
            {
              key: 'dd7d4939',
              get: function get() {
                return [
                  'You turned on Safety Mode, so we autoblocked ',
                  ' for a week. ' + this.props.smartBlockEndTimeSentence,
                ]
              },
            },
            {
              key: 'h03573ff',
              get: function get() {
                return [
                  'You can view their profile to learn more about them, or go to their autoblocked posts to see why we autoblocked them. Neither one of these actions will remove the autoblock from ',
                  '.',
                ]
              },
            },
            {
              key: 'da9d52d7',
              get: function get() {
                return ['X suspends accounts which violate the ']
              },
            },
            {
              key: 'fca299bb',
              get: function get() {
                return [
                  'Share your email with ' +
                    this.props.creatorName +
                    '. By accepting, you agree to let X share the email address with the creator for the purpose of off-platform communication and accept the ',
                  '.',
                ]
              },
            },
            {
              key: 'fbe06ae1',
              get: function get() {
                return ['', ' by ']
              },
            },
            {
              key: 'j0a20bf1',
              get: function get() {
                return [
                  'Organizations have gold checkmarks, individuals have blue checkmarks. Inappropriate use will result in the cancellation of your subscription without a refund, per our ',
                  '.',
                ]
              },
            },
            {
              key: 'j1b50481',
              get: function get() {
                return [
                  'Organizations have square avatars, individuals have circular avatars. Inappropriate use will result in the cancellation of your subscription without a refund, per our ',
                  '.',
                ]
              },
            },
            {
              key: 'g0a48d73',
              get: function get() {
                return ['To switch from credit card payments to invoicing via bank transfers click ', '.']
              },
            },
            {
              key: 'c84e286d',
              get: function get() {
                return ['To change your username or password, go to account settings at ', '.']
              },
            },
            {
              key: 'c6481077',
              get: function get() {
                return ['To cancel your subscription, ', '.']
              },
            },
            {
              key: 'f05a94e5',
              get: function get() {
                return [
                  'If you have questions, bug reports, feedback or wish to cancel your subscription please contact us here: ',
                ]
              },
            },
            {
              key: 'if6e211f',
              get: function get() {
                return ['To increase your limit please reach out to Verified Premium Support ', '.']
              },
            },
            {
              key: 'e63e8683',
              get: function get() {
                return ['', '/month (', ') + ', ' per handle per month (', '). ']
              },
            },
            {
              key: 'ab96ad2b',
              get: function get() {
                return ['', '/month (', '). ']
              },
            },
            {
              key: 'ebdf1acb',
              get: function get() {
                return [
                  'Full Access is ',
                  '/month (',
                  '). Each additional affiliated account is ',
                  ' per handle per month (',
                  '). ',
                ]
              },
            },
            {
              key: 'e95f6093',
              get: function get() {
                return [
                  'Verified Organizations is ',
                  '/month (',
                  '). Each additional affiliated account is ',
                  ' per handle per month (',
                  '). ',
                ]
              },
            },
            {
              key: 'd1615db5',
              get: function get() {
                return ['Basic is ', '/month (plus any applicable tax). ']
              },
            },
            {
              key: 'db0a35bd',
              get: function get() {
                return [
                  'By clicking Apply now, you agree to our ',
                  '. Subscriptions auto-renew until canceled, as described in the Terms. Accounts that sign up are reviewed for authenticity. If an account signs up and is not an organization, you will be rejected and not refunded.',
                ]
              },
            },
            {
              key: 'de458a0f',
              get: function get() {
                return [
                  'Subscribe to Verified Organizations and get ads credits to run on any account in your organization. ',
                ]
              },
            },
            {
              key: 'cf2d279d',
              get: function get() {
                return [
                  'Subscribe to Verified Organizations and get ',
                  ' of ads credits to run on any account in your organization. ',
                ]
              },
            },
            {
              key: 'cfa709c7',
              get: function get() {
                return ['Find the full feature set ']
              },
            },
            {
              key: 'af51185b',
              get: function get() {
                return ['If you require more affiliates contact Verified Sales ', '.']
              },
            },
            {
              key: 'd9f35d6f',
              get: function get() {
                return ['By clicking ‘' + this.props.action + '’, you agree to be bound by the ', '.']
              },
            },
            {
              key: 'bd334979',
              get: function get() {
                return [
                  'We’ll use this information to assess your application. Upon receipt of payment and if eligible, you’ll be invited to activate your account. For information learn more ',
                  '.',
                ]
              },
            },
            {
              key: 'aacfbecd',
              get: function get() {
                return [
                  'By checking this box you indicate you have read and agree to the terms and conditions available ',
                  '.',
                ]
              },
            },
            {
              key: 'dcccd2c1',
              get: function get() {
                return ['You have ', ' left to run ads on X.']
              },
            },
            {
              key: 'a757e96d',
              get: function get() {
                return [
                  'Activate your ads credit. If you have multiple ads accounts, you can edit the input below. To manage your ads account IDs, do so ',
                  '.',
                ]
              },
            },
            {
              key: 'ff1cc953',
              get: function get() {
                return ['Running into issues? Contact ', ' with any questions.']
              },
            },
            {
              key: 'ifee99e7',
              get: function get() {
                return ['Enter the List owners handle and the List name in the following format: ', '.']
              },
            },
            {
              key: 'aa36416b',
              get: function get() {
                return ['This column can only be cleared if you switch to ', '.']
              },
            },
            {
              key: 'i0643a5b',
              get: function get() {
                return ['', ' Article']
              },
            },
            {
              key: 'b9ad7ff5',
              get: function get() {
                return ['', ' by author']
              },
            },
            {
              key: 'c2588611',
              get: function get() {
                return ['', ' at ' + this.props.time]
              },
            },
            {
              key: 'dfde726b',
              get: function get() {
                return ['', ' read']
              },
            },
            {
              key: 'd6b02329',
              get: function get() {
                return [this.props.formattedCount + ' Member' + n(this.props.count, '', 's')]
              },
            },
            {
              key: 'c9e6167d',
              get: function get() {
                return ['Followed by ']
              },
            },
            {
              key: 'ha91d1eb',
              get: function get() {
                return ['Followed by ', ' and ']
              },
            },
            {
              key: 'f1069f9b',
              get: function get() {
                return ['Followed by ', ', ', ', and ']
              },
            },
            {
              key: 'e8404c1f',
              get: function get() {
                return ['Followed by ', ', ', ', and ', ' others you follow']
              },
            },
            {
              key: 'i6125da7',
              get: function get() {
                return ['', ' · ']
              },
            },
            {
              key: 'e570a97b',
              get: function get() {
                return [
                  'This media has been disabled due to a copyright claim by ' +
                    this.props.copyrightHolder +
                    '. To dispute, please use ',
                  '.',
                ]
              },
            },
            {
              key: 'bb2cd6d3',
              get: function get() {
                return ['', ' and ', ' others are Trending in this Topic']
              },
            },
            {
              key: 'e1e348dd',
              get: function get() {
                return ['Paid for by ']
              },
            },
            {
              key: 'c7dea0d1',
              get: function get() {
                return ['Paid for by ', ' and not authorized by any candidate or candidate’s committee.']
              },
            },
            {
              key: 'b5c2371b',
              get: function get() {
                return ['Paid for by ', ' · Authorized by ' + this.props.sponsorshipCandidate]
              },
            },
            {
              key: 'fcd931ed',
              get: function get() {
                return ['', ' reposted']
              },
            },
            {
              key: 'b6a393af',
              get: function get() {
                return [
                  'Only you and people in your Circle can see this post. Reposting, Quoting, and sharing aren’t available. ',
                ]
              },
            },
            {
              key: 'dbf19261',
              get: function get() {
                return ['From ']
              },
            },
            {
              key: 'd7b2c271',
              get: function get() {
                return ['', ' and ']
              },
            },
            {
              key: 'b035fe73',
              get: function get() {
                return ['', ' and ']
              },
            },
            {
              key: 'g3ed1dd5',
              get: function get() {
                return ['', ' ']
              },
            },
            {
              key: 'i06724fb',
              get: function get() {
                return ['', ' ']
              },
            },
            {
              key: 'eb0084f3',
              get: function get() {
                return ['', ' ']
              },
            },
            {
              key: 'fc1b8f67',
              get: function get() {
                return ['', ' ']
              },
            },
            {
              key: 'h5970807',
              get: function get() {
                return ['Replying to ']
              },
            },
            {
              key: 'ge01e6a3',
              get: function get() {
                return ['Replying to ', ' ', ' ']
              },
            },
            {
              key: 'f5a069ab',
              get: function get() {
                return ['Replying to ', ' ']
              },
            },
            {
              key: 'hd7dd197',
              get: function get() {
                return ['Replying to ', ' ', ' ', ' ']
              },
            },
            {
              key: 'g4eb2847',
              get: function get() {
                return ['Replying to ', ' ', ' ']
              },
            },
            {
              key: 'fe7c309b',
              get: function get() {
                return ['Trending with ']
              },
            },
            {
              key: 'ea753bf5',
              get: function get() {
                return ['Trending with ', ', ']
              },
            },
            {
              key: 'ge9aefd5',
              get: function get() {
                return ['', ' from ']
              },
            },
            {
              key: 'templateReducer',
              get: function get() {
                var e,
                  t = s.Children.toArray(this.props.children),
                  o = ((e = this.props.$i18n), c[u[e]] || d)
                return function (e, a, n) {
                  return e.concat(a, t[o(n)])
                }
              },
            },
          ]) && i(a.prototype, l),
          f && i(a, f),
          Object.defineProperty(a, 'prototype', { writable: !1 }),
          b
        )
      })(o(645184)._ActualI18NFormatMessage || s.Component)
      a('_ActualI18NFormatMessage', l),
        a('I18NFormatMessage', function (e) {
          return s.createElement(l, e)
        })
      var f = o(495075)
      o(800694), o(556829), o(530152), o(658610), o(492344), o(663823)
      f._validateParameterTypeNumber, f._validateParameterPresence
      var b = f._numberRound,
        h = (f._numberFormat, f._numberFormatterFn),
        m = f._pluralGeneratorFn,
        p = (f._currencyNameFormat, f._currencyFormatterFn),
        y = (f._validateParameterTypeDate, f._dateToPartsFormat, f._dateToPartsFormatterFn),
        g = (f._dateFormat, f._dateFormatterFn),
        w = f._relativeTimeFormatterFn,
        v = f._unitFormatterFn
      ;(f.a527220190 = h(
        [
          '',
          ,
          1,
          0,
          1,
          ,
          ,
          ,
          3,
          ,
          '',
          '#,##0.###',
          '-#,##0.###',
          '-',
          '',
          b('truncate'),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
          ,
          {
            3: { one: '0K', other: '0K' },
            4: { one: '00K', other: '00K' },
            5: { one: '000K', other: '000K' },
            6: { one: '0M', other: '0M' },
            7: { one: '00M', other: '00M' },
            8: { one: '000M', other: '000M' },
            9: { one: '0B', other: '0B' },
            10: { one: '00B', other: '00B' },
            11: { one: '000B', other: '000B' },
            12: { one: '0T', other: '0T' },
            13: { one: '00T', other: '00T' },
            14: { one: '000T', other: '000T' },
            maxExponent: 14,
          },
        ],
        f('en').pluralGenerator({}),
      )),
        (f.b468386326 = h([
          '',
          ,
          1,
          0,
          3,
          ,
          ,
          ,
          3,
          ,
          '',
          '#,##0.###',
          '-#,##0.###',
          '-',
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.a694716112 = h([
          '',
          ,
          1,
          0,
          2,
          ,
          ,
          ,
          3,
          ,
          '',
          '#,##0.###',
          '-#,##0.###',
          '-',
          '',
          b('round'),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.a1378886668 = h([
          '',
          ,
          1,
          0,
          0,
          ,
          ,
          ,
          ,
          ,
          '',
          '0',
          '-0',
          '-',
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.b203855544 = h([
          '',
          ,
          2,
          0,
          0,
          ,
          ,
          ,
          ,
          ,
          '',
          '00',
          '-00',
          '-',
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.b1729690817 = h(
          [
            '',
            ,
            1,
            0,
            0,
            ,
            ,
            ,
            3,
            ,
            '',
            '#,##0.###',
            '-#,##0.###',
            '-',
            '',
            b('truncate'),
            '∞',
            'NaN',
            { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
            ,
            {
              3: { one: '0K', other: '0K' },
              4: { one: '00K', other: '00K' },
              5: { one: '000K', other: '000K' },
              6: { one: '0M', other: '0M' },
              7: { one: '00M', other: '00M' },
              8: { one: '000M', other: '000M' },
              9: { one: '0B', other: '0B' },
              10: { one: '00B', other: '00B' },
              11: { one: '000B', other: '000B' },
              12: { one: '0T', other: '0T' },
              13: { one: '00T', other: '00T' },
              14: { one: '000T', other: '000T' },
              maxExponent: 14,
            },
          ],
          f('en').pluralGenerator({}),
        )),
        (f.b385502835 = h([
          '',
          ,
          1,
          0,
          1,
          ,
          ,
          ,
          3,
          ,
          '%',
          '#,##0%',
          '-#,##0%%',
          '-',
          '%',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.b1982794438 = h([
          '',
          ,
          1,
          0,
          0,
          ,
          ,
          ,
          3,
          ,
          '%',
          '#,##0%',
          '-#,##0%%',
          '-',
          '%',
          b('round'),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.b1653028677 = h([
          '',
          ,
          1,
          0,
          1,
          ,
          ,
          ,
          3,
          ,
          '%',
          '#,##0%',
          '-#,##0%%',
          '-',
          '%',
          b('round'),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.a1259667653 = h(
          [
            '',
            ,
            1,
            0,
            0,
            ,
            ,
            ,
            3,
            ,
            '',
            '#,##0.###',
            '-#,##0.###',
            '-',
            '',
            b('truncate'),
            '∞',
            'NaN',
            { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
            ,
            {
              3: { one: '0K', other: '0K' },
              4: { one: '00K', other: '00K' },
              5: { one: '000K', other: '000K' },
              6: { one: '0M', other: '0M' },
              7: { one: '00M', other: '00M' },
              8: { one: '000M', other: '000M' },
              9: { one: '0B', other: '0B' },
              10: { one: '00B', other: '00B' },
              11: { one: '000B', other: '000B' },
              12: { one: '0T', other: '0T' },
              13: { one: '00T', other: '00T' },
              14: { one: '000T', other: '000T' },
              maxExponent: 14,
            },
          ],
          f('en').pluralGenerator({}),
        )),
        (f.a258143208 = h([
          '',
          ,
          1,
          1,
          1,
          ,
          ,
          ,
          3,
          ,
          '',
          '#,##0.###',
          '-#,##0.###',
          '-',
          '',
          b('truncate'),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.b810332058 = h([
          '',
          ,
          1,
          2,
          2,
          ,
          ,
          ,
          3,
          ,
          '',
          '#,##0.###',
          '-#,##0.###',
          '-',
          '',
          b('truncate'),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.b1158699306 = h(
          [
            '',
            ,
            1,
            0,
            0,
            1,
            2,
            ,
            3,
            ,
            '',
            '#,##0.###',
            '-#,##0.###',
            '-',
            '',
            b(),
            '∞',
            'NaN',
            { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
            ,
            {
              3: { one: '0K', other: '0K' },
              4: { one: '00K', other: '00K' },
              5: { one: '000K', other: '000K' },
              6: { one: '0M', other: '0M' },
              7: { one: '00M', other: '00M' },
              8: { one: '000M', other: '000M' },
              9: { one: '0B', other: '0B' },
              10: { one: '00B', other: '00B' },
              11: { one: '000B', other: '000B' },
              12: { one: '0T', other: '0T' },
              13: { one: '00T', other: '00T' },
              14: { one: '000T', other: '000T' },
              maxExponent: 14,
            },
          ],
          f('en').pluralGenerator({}),
        )),
        (f.a2030259439 = h([
          "'AED' ",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'AED' #,##0.00",
          "-'AED' 'AED' #,##0.00",
          "-'AED' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.a2046481768 = h([
          "'ALL' ",
          ,
          1,
          0,
          0,
          ,
          ,
          ,
          3,
          ,
          '',
          "'ALL' #,##0",
          "-'ALL' 'ALL' #,##0",
          "-'ALL' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.a1160151693 = h([
          "'ARS' ",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'ARS' #,##0.00",
          "-'ARS' 'ARS' #,##0.00",
          "-'ARS' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.a2062592196 = h([
          "'A$'",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'A$'#,##0.00",
          "-'A$''A$'#,##0.00",
          "-'A$'",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.b470575007 = h([
          "'BAM' ",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'BAM' #,##0.00",
          "-'BAM' 'BAM' #,##0.00",
          "-'BAM' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.a513170045 = h([
          "'BDT' ",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'BDT' #,##0.00",
          "-'BDT' 'BDT' #,##0.00",
          "-'BDT' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.b520757370 = h([
          "'BGN' ",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'BGN' #,##0.00",
          "-'BGN' 'BGN' #,##0.00",
          "-'BGN' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.b1664428957 = h([
          "'BHD' ",
          ,
          1,
          3,
          3,
          ,
          ,
          0,
          3,
          ,
          '',
          "'BHD' #,##0.000",
          "-'BHD' 'BHD' #,##0.000",
          "-'BHD' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.a2058030163 = h([
          "'R$'",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'R$'#,##0.00",
          "-'R$''R$'#,##0.00",
          "-'R$'",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.a1239380546 = h([
          "'BYR' ",
          ,
          1,
          0,
          0,
          ,
          ,
          ,
          3,
          ,
          '',
          "'BYR' #,##0",
          "-'BYR' 'BYR' #,##0",
          "-'BYR' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.b88352691 = h([
          "'CA$'",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'CA$'#,##0.00",
          "-'CA$''CA$'#,##0.00",
          "-'CA$'",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.a225761966 = h([
          "'CHF' ",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'CHF' #,##0.00",
          "-'CHF' 'CHF' #,##0.00",
          "-'CHF' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.b1433162386 = h([
          "'CLP' ",
          ,
          1,
          0,
          0,
          ,
          ,
          ,
          3,
          ,
          '',
          "'CLP' #,##0",
          "-'CLP' 'CLP' #,##0",
          "-'CLP' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.b1559929759 = h([
          "'CN¥'",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'CN¥'#,##0.00",
          "-'CN¥''CN¥'#,##0.00",
          "-'CN¥'",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.b1045914229 = h([
          "'COP' ",
          ,
          1,
          0,
          0,
          ,
          ,
          ,
          3,
          ,
          '',
          "'COP' #,##0",
          "-'COP' 'COP' #,##0",
          "-'COP' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.b935902373 = h([
          "'CZK' ",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'CZK' #,##0.00",
          "-'CZK' 'CZK' #,##0.00",
          "-'CZK' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.a1710090091 = h([
          "'DKK' ",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'DKK' #,##0.00",
          "-'DKK' 'DKK' #,##0.00",
          "-'DKK' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.a2092473825 = h([
          "'DZD' ",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'DZD' #,##0.00",
          "-'DZD' 'DZD' #,##0.00",
          "-'DZD' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.a1231490145 = h([
          "'EGP' ",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'EGP' #,##0.00",
          "-'EGP' 'EGP' #,##0.00",
          "-'EGP' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.b581200589 = h([
          "'€'",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'€'#,##0.00",
          "-'€''€'#,##0.00",
          "-'€'",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.a435174058 = h([
          "'£'",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'£'#,##0.00",
          "-'£''£'#,##0.00",
          "-'£'",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.a201297725 = h([
          "'GHS' ",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'GHS' #,##0.00",
          "-'GHS' 'GHS' #,##0.00",
          "-'GHS' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.a2123167499 = h([
          "'GTQ' ",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'GTQ' #,##0.00",
          "-'GTQ' 'GTQ' #,##0.00",
          "-'GTQ' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.b1901147192 = h([
          "'HK$'",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'HK$'#,##0.00",
          "-'HK$''HK$'#,##0.00",
          "-'HK$'",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.a1630881454 = h([
          "'HRK' ",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'HRK' #,##0.00",
          "-'HRK' 'HRK' #,##0.00",
          "-'HRK' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.a91395414 = h([
          "'HUF' ",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'HUF' #,##0.00",
          "-'HUF' 'HUF' #,##0.00",
          "-'HUF' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.a769789694 = h([
          "'IDR' ",
          ,
          1,
          0,
          0,
          ,
          ,
          ,
          3,
          ,
          '',
          "'IDR' #,##0",
          "-'IDR' 'IDR' #,##0",
          "-'IDR' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.a5605425 = h([
          "'₪'",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'₪'#,##0.00",
          "-'₪''₪'#,##0.00",
          "-'₪'",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.b100472384 = h([
          "'₹'",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'₹'#,##0.00",
          "-'₹''₹'#,##0.00",
          "-'₹'",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.a1835380291 = h([
          "'IQD' ",
          ,
          1,
          0,
          0,
          ,
          ,
          ,
          3,
          ,
          '',
          "'IQD' #,##0",
          "-'IQD' 'IQD' #,##0",
          "-'IQD' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.b1895179192 = h([
          "'ISK' ",
          ,
          1,
          0,
          0,
          ,
          ,
          ,
          3,
          ,
          '',
          "'ISK' #,##0",
          "-'ISK' 'ISK' #,##0",
          "-'ISK' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.a595984426 = h([
          "'¥'",
          ,
          1,
          0,
          0,
          ,
          ,
          ,
          3,
          ,
          '',
          "'¥'#,##0",
          "-'¥''¥'#,##0",
          "-'¥'",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.b2068527114 = h([
          "'KES' ",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'KES' #,##0.00",
          "-'KES' 'KES' #,##0.00",
          "-'KES' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.a584033446 = h([
          "'₩'",
          ,
          1,
          0,
          0,
          ,
          ,
          ,
          3,
          ,
          '',
          "'₩'#,##0",
          "-'₩''₩'#,##0",
          "-'₩'",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.b1437621635 = h([
          "'KWD' ",
          ,
          1,
          3,
          3,
          ,
          ,
          0,
          3,
          ,
          '',
          "'KWD' #,##0.000",
          "-'KWD' 'KWD' #,##0.000",
          "-'KWD' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.b980268822 = h([
          "'KZT' ",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'KZT' #,##0.00",
          "-'KZT' 'KZT' #,##0.00",
          "-'KZT' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.b1069649343 = h([
          "'LBP' ",
          ,
          1,
          0,
          0,
          ,
          ,
          ,
          3,
          ,
          '',
          "'LBP' #,##0",
          "-'LBP' 'LBP' #,##0",
          "-'LBP' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.b1536423329 = h([
          "'MAD' ",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'MAD' #,##0.00",
          "-'MAD' 'MAD' #,##0.00",
          "-'MAD' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.a654192873 = h([
          "'MKD' ",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'MKD' #,##0.00",
          "-'MKD' 'MKD' #,##0.00",
          "-'MKD' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.b935650272 = h([
          "'MX$'",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'MX$'#,##0.00",
          "-'MX$''MX$'#,##0.00",
          "-'MX$'",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.a1797195561 = h([
          "'MYR' ",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'MYR' #,##0.00",
          "-'MYR' 'MYR' #,##0.00",
          "-'MYR' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.a1942767098 = h([
          "'NGN' ",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'NGN' #,##0.00",
          "-'NGN' 'NGN' #,##0.00",
          "-'NGN' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.b1660011739 = h([
          "'NOK' ",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'NOK' #,##0.00",
          "-'NOK' 'NOK' #,##0.00",
          "-'NOK' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.b439215713 = h([
          "'NZ$'",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'NZ$'#,##0.00",
          "-'NZ$''NZ$'#,##0.00",
          "-'NZ$'",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.b2093404874 = h([
          "'PEN' ",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'PEN' #,##0.00",
          "-'PEN' 'PEN' #,##0.00",
          "-'PEN' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.a1418133303 = h([
          "'PHP' ",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'PHP' #,##0.00",
          "-'PHP' 'PHP' #,##0.00",
          "-'PHP' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.b380452322 = h([
          "'PKR' ",
          ,
          1,
          0,
          0,
          ,
          ,
          ,
          3,
          ,
          '',
          "'PKR' #,##0",
          "-'PKR' 'PKR' #,##0",
          "-'PKR' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.b130476803 = h([
          "'PLN' ",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'PLN' #,##0.00",
          "-'PLN' 'PLN' #,##0.00",
          "-'PLN' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.b2066446195 = h([
          "'QAR' ",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'QAR' #,##0.00",
          "-'QAR' 'QAR' #,##0.00",
          "-'QAR' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.b923857026 = h([
          "'RON' ",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'RON' #,##0.00",
          "-'RON' 'RON' #,##0.00",
          "-'RON' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.b547081334 = h([
          "'RSD' ",
          ,
          1,
          0,
          0,
          ,
          ,
          ,
          3,
          ,
          '',
          "'RSD' #,##0",
          "-'RSD' 'RSD' #,##0",
          "-'RSD' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.a1303255440 = h([
          "'RUB' ",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'RUB' #,##0.00",
          "-'RUB' 'RUB' #,##0.00",
          "-'RUB' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.a1207452747 = h([
          "'SAR' ",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'SAR' #,##0.00",
          "-'SAR' 'SAR' #,##0.00",
          "-'SAR' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.b2108331530 = h([
          "'SEK' ",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'SEK' #,##0.00",
          "-'SEK' 'SEK' #,##0.00",
          "-'SEK' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.a150715167 = h([
          "'SGD' ",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'SGD' #,##0.00",
          "-'SGD' 'SGD' #,##0.00",
          "-'SGD' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.b2136117247 = h([
          "'THB' ",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'THB' #,##0.00",
          "-'THB' 'THB' #,##0.00",
          "-'THB' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.b1842895953 = h([
          "'TND' ",
          ,
          1,
          3,
          3,
          ,
          ,
          0,
          3,
          ,
          '',
          "'TND' #,##0.000",
          "-'TND' 'TND' #,##0.000",
          "-'TND' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.a1311552468 = h([
          "'TRY' ",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'TRY' #,##0.00",
          "-'TRY' 'TRY' #,##0.00",
          "-'TRY' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.b1700831259 = h([
          "'NT$'",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'NT$'#,##0.00",
          "-'NT$''NT$'#,##0.00",
          "-'NT$'",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.b1414774924 = h([
          "'TZS' ",
          ,
          1,
          0,
          0,
          ,
          ,
          ,
          3,
          ,
          '',
          "'TZS' #,##0",
          "-'TZS' 'TZS' #,##0",
          "-'TZS' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.a947003347 = h([
          "'UAH' ",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'UAH' #,##0.00",
          "-'UAH' 'UAH' #,##0.00",
          "-'UAH' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.b260604499 = h([
          "'UGX' ",
          ,
          1,
          0,
          0,
          ,
          ,
          ,
          3,
          ,
          '',
          "'UGX' #,##0",
          "-'UGX' 'UGX' #,##0",
          "-'UGX' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.b957349717 = h([
          "'$'",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'$'#,##0.00",
          "-'$''$'#,##0.00",
          "-'$'",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.b1112140936 = h([
          "'VEF' ",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'VEF' #,##0.00",
          "-'VEF' 'VEF' #,##0.00",
          "-'VEF' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.a191006436 = h([
          "'₫'",
          ,
          1,
          0,
          0,
          ,
          ,
          ,
          3,
          ,
          '',
          "'₫'#,##0",
          "-'₫''₫'#,##0",
          "-'₫'",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.a1928680804 = h([
          "'ZAR' ",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'ZAR' #,##0.00",
          "-'ZAR' 'ZAR' #,##0.00",
          "-'ZAR' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.a311640203 = h([
          "'ZMW' ",
          ,
          1,
          2,
          2,
          ,
          ,
          0,
          3,
          ,
          '',
          "'ZMW' #,##0.00",
          "-'ZMW' 'ZMW' #,##0.00",
          "-'ZMW' ",
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.a71710728 = h([
          '',
          ,
          1,
          0,
          0,
          ,
          ,
          ,
          3,
          ,
          '',
          '#,##0.###',
          '-#,##0.###',
          '-',
          '',
          b(),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.a605057387 = h(
          [
            '',
            ,
            1,
            0,
            0,
            ,
            ,
            ,
            3,
            ,
            '',
            '#,##0.###',
            '-#,##0.###',
            '-',
            '',
            b(),
            '∞',
            'NaN',
            { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
            ,
            {
              3: { one: '0K', other: '0K' },
              4: { one: '00K', other: '00K' },
              5: { one: '000K', other: '000K' },
              6: { one: '0M', other: '0M' },
              7: { one: '00M', other: '00M' },
              8: { one: '000M', other: '000M' },
              9: { one: '0B', other: '0B' },
              10: { one: '00B', other: '00B' },
              11: { one: '000B', other: '000B' },
              12: { one: '0T', other: '0T' },
              13: { one: '00T', other: '00T' },
              14: { one: '000T', other: '000T' },
              maxExponent: 14,
            },
          ],
          f('en').pluralGenerator({}),
        )),
        (f.a50325677 = h(
          [
            '',
            ,
            1,
            0,
            2,
            ,
            ,
            ,
            3,
            ,
            '',
            '#,##0.###',
            '-#,##0.###',
            '-',
            '',
            b(),
            '∞',
            'NaN',
            { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
            ,
            {
              3: { one: '0K', other: '0K' },
              4: { one: '00K', other: '00K' },
              5: { one: '000K', other: '000K' },
              6: { one: '0M', other: '0M' },
              7: { one: '00M', other: '00M' },
              8: { one: '000M', other: '000M' },
              9: { one: '0B', other: '0B' },
              10: { one: '00B', other: '00B' },
              11: { one: '000B', other: '000B' },
              12: { one: '0T', other: '0T' },
              13: { one: '00T', other: '00T' },
              14: { one: '000T', other: '000T' },
              maxExponent: 14,
            },
          ],
          f('en').pluralGenerator({}),
        )),
        (f.b1911307442 = h([
          '',
          ,
          1,
          0,
          0,
          ,
          ,
          ,
          3,
          ,
          '',
          '#,##0.###',
          '-#,##0.###',
          '-',
          '',
          b('round'),
          '∞',
          'NaN',
          { '.': '.', ',': ',', '%': '%', '+': '+', '-': '-', E: 'E', '‰': '‰' },
        ])),
        (f.a1662346136 = m(function (e) {
          var t = !String(e).split('.')[1]
          return 1 == e && t ? 'one' : 'other'
        })),
        (f.b1259832358 = p(f('en').numberFormatter({ raw: "'AED' #,##0.00" }))),
        (f.a886759321 = p(f('en').numberFormatter({ raw: "'ALL' #,##0" }))),
        (f.a2117218168 = p(f('en').numberFormatter({ raw: "'ARS' #,##0.00" }))),
        (f.a55324650 = p(f('en').numberFormatter({ raw: "'A$'#,##0.00" }))),
        (f.a1485592908 = p(f('en').numberFormatter({ raw: "'BAM' #,##0.00" }))),
        (f.a53540712 = p(f('en').numberFormatter({ raw: "'BDT' #,##0.00" }))),
        (f.b1750690447 = p(f('en').numberFormatter({ raw: "'BGN' #,##0.00" }))),
        (f.b1149478276 = p(f('en').numberFormatter({ raw: "'BHD' #,##0.000" }))),
        (f.b635342850 = p(f('en').numberFormatter({ raw: "'R$'#,##0.00" }))),
        (f.a1453990527 = p(f('en').numberFormatter({ raw: "'BYR' #,##0" }))),
        (f.b1324226412 = p(f('en').numberFormatter({ raw: "'CA$'#,##0.00" }))),
        (f.a650590361 = p(f('en').numberFormatter({ raw: "'CHF' #,##0.00" }))),
        (f.a191929299 = p(f('en').numberFormatter({ raw: "'CLP' #,##0" }))),
        (f.b2070368276 = p(f('en').numberFormatter({ raw: "'CN¥'#,##0.00" }))),
        (f.b1440526954 = p(f('en').numberFormatter({ raw: "'COP' #,##0" }))),
        (f.b411066810 = p(f('en').numberFormatter({ raw: "'CZK' #,##0.00" }))),
        (f.a904090198 = p(f('en').numberFormatter({ raw: "'DKK' #,##0.00" }))),
        (f.a1131339468 = p(f('en').numberFormatter({ raw: "'DZD' #,##0.00" }))),
        (f.b759968436 = p(f('en').numberFormatter({ raw: "'EGP' #,##0.00" }))),
        (f.b1162560488 = p(f('en').numberFormatter({ raw: "'€'#,##0.00" }))),
        (f.b1711866171 = p(f('en').numberFormatter({ raw: "'£'#,##0.00" }))),
        (f.b595923928 = p(f('en').numberFormatter({ raw: "'GHS' #,##0.00" }))),
        (f.a1406927350 = p(f('en').numberFormatter({ raw: "'GTQ' #,##0.00" }))),
        (f.b915007111 = p(f('en').numberFormatter({ raw: "'HK$'#,##0.00" }))),
        (f.a1202955417 = p(f('en').numberFormatter({ raw: "'HRK' #,##0.00" }))),
        (f.b572646591 = p(f('en').numberFormatter({ raw: "'HUF' #,##0.00" }))),
        (f.b688947133 = p(f('en').numberFormatter({ raw: "'IDR' #,##0" }))),
        (f.a2144744170 = p(f('en').numberFormatter({ raw: "'₪'#,##0.00" }))),
        (f.b403844915 = p(f('en').numberFormatter({ raw: "'₹'#,##0.00" }))),
        (f.a1857858014 = p(f('en').numberFormatter({ raw: "'IQD' #,##0" }))),
        (f.b461697863 = p(f('en').numberFormatter({ raw: "'ISK' #,##0" }))),
        (f.b980590457 = p(f('en').numberFormatter({ raw: "'¥'#,##0" }))),
        (f.b582160927 = p(f('en').numberFormatter({ raw: "'KES' #,##0.00" }))),
        (f.b1814998358 = p(f('en').numberFormatter({ raw: "'₩'#,##0" }))),
        (f.a2078566178 = p(f('en').numberFormatter({ raw: "'KWD' #,##0.000" }))),
        (f.a904176341 = p(f('en').numberFormatter({ raw: "'KZT' #,##0.00" }))),
        (f.b1587749088 = p(f('en').numberFormatter({ raw: "'LBP' #,##0" }))),
        (f.b1075992246 = p(f('en').numberFormatter({ raw: "'MAD' #,##0.00" }))),
        (f.b790890028 = p(f('en').numberFormatter({ raw: "'MKD' #,##0.00" }))),
        (f.b1851952553 = p(f('en').numberFormatter({ raw: "'MX$'#,##0.00" }))),
        (f.b849932268 = p(f('en').numberFormatter({ raw: "'MYR' #,##0.00" }))),
        (f.a1983164389 = p(f('en').numberFormatter({ raw: "'NGN' #,##0.00" }))),
        (f.a407371792 = p(f('en').numberFormatter({ raw: "'NOK' #,##0.00" }))),
        (f.a1379573634 = p(f('en').numberFormatter({ raw: "'NZ$'#,##0.00" }))),
        (f.b601189599 = p(f('en').numberFormatter({ raw: "'PEN' #,##0.00" }))),
        (f.a2118579746 = p(f('en').numberFormatter({ raw: "'PHP' #,##0.00" }))),
        (f.a543381795 = p(f('en').numberFormatter({ raw: "'PKR' #,##0" }))),
        (f.a1316368872 = p(f('en').numberFormatter({ raw: "'PLN' #,##0.00" }))),
        (f.a2001089912 = p(f('en').numberFormatter({ raw: "'QAR' #,##0.00" }))),
        (f.b1125434007 = p(f('en').numberFormatter({ raw: "'RON' #,##0.00" }))),
        (f.a2138289207 = p(f('en').numberFormatter({ raw: "'RSD' #,##0" }))),
        (f.b438929029 = p(f('en').numberFormatter({ raw: "'RUB' #,##0.00" }))),
        (f.a1191743286 = p(f('en').numberFormatter({ raw: "'SAR' #,##0.00" }))),
        (f.a246386657 = p(f('en').numberFormatter({ raw: "'SEK' #,##0.00" }))),
        (f.a1820989962 = p(f('en').numberFormatter({ raw: "'SGD' #,##0.00" }))),
        (f.a99078380 = p(f('en').numberFormatter({ raw: "'THB' #,##0.00" }))),
        (f.a1186391472 = p(f('en').numberFormatter({ raw: "'TND' #,##0.000" }))),
        (f.a1042651071 = p(f('en').numberFormatter({ raw: "'TRY' #,##0.00" }))),
        (f.a583990009 = p(f('en').numberFormatter({ raw: "'NT$'#,##0.00" }))),
        (f.b619028979 = p(f('en').numberFormatter({ raw: "'TZS' #,##0" }))),
        (f.a96105150 = p(f('en').numberFormatter({ raw: "'UAH' #,##0.00" }))),
        (f.a1584226356 = p(f('en').numberFormatter({ raw: "'UGX' #,##0" }))),
        (f.b1223214380 = p(f('en').numberFormatter({ raw: "'$'#,##0.00" }))),
        (f.a1036704611 = p(f('en').numberFormatter({ raw: "'VEF' #,##0.00" }))),
        (f.a377044846 = p(f('en').numberFormatter({ raw: "'₫'#,##0" }))),
        (f.a506513743 = p(f('en').numberFormatter({ raw: "'ZAR' #,##0.00" }))),
        (f.b1585198218 = p(f('en').numberFormatter({ raw: "'ZMW' #,##0.00" }))),
        (f.b129255162 = y(
          { 1: f('en').numberFormatter({ raw: '0' }), 2: f('en').numberFormatter({ raw: '00' }) },
          { pattern: 'h:mm a', timeSeparator: ':', dayPeriods: { am: 'AM', pm: 'PM' } },
        )),
        (f.a683162061 = y(
          { 1: f('en').numberFormatter({ raw: '0' }) },
          {
            pattern: 'E, MMM d',
            timeSeparator: ':',
            days: { E: { 1: { sun: 'Sun', mon: 'Mon', tue: 'Tue', wed: 'Wed', thu: 'Thu', fri: 'Fri', sat: 'Sat' } } },
            months: {
              M: {
                3: {
                  1: 'Jan',
                  2: 'Feb',
                  3: 'Mar',
                  4: 'Apr',
                  5: 'May',
                  6: 'Jun',
                  7: 'Jul',
                  8: 'Aug',
                  9: 'Sep',
                  10: 'Oct',
                  11: 'Nov',
                  12: 'Dec',
                },
              },
            },
          },
        )),
        (f.a1269826356 = y(
          { 1: f('en').numberFormatter({ raw: '0' }) },
          {
            pattern: 'MMM d',
            timeSeparator: ':',
            months: {
              M: {
                3: {
                  1: 'Jan',
                  2: 'Feb',
                  3: 'Mar',
                  4: 'Apr',
                  5: 'May',
                  6: 'Jun',
                  7: 'Jul',
                  8: 'Aug',
                  9: 'Sep',
                  10: 'Oct',
                  11: 'Nov',
                  12: 'Dec',
                },
              },
            },
          },
        )),
        (f.a64793641 = y(
          { 1: f('en').numberFormatter({ raw: '0' }) },
          {
            pattern: 'MMM d, y',
            timeSeparator: ':',
            months: {
              M: {
                3: {
                  1: 'Jan',
                  2: 'Feb',
                  3: 'Mar',
                  4: 'Apr',
                  5: 'May',
                  6: 'Jun',
                  7: 'Jul',
                  8: 'Aug',
                  9: 'Sep',
                  10: 'Oct',
                  11: 'Nov',
                  12: 'Dec',
                },
              },
            },
          },
        )),
        (f.a86034624 = y(
          { 1: f('en').numberFormatter({ raw: '0' }), 2: f('en').numberFormatter({ raw: '00' }) },
          { pattern: 'MM/dd/y', timeSeparator: ':' },
        )),
        (f.a1981853560 = y(
          { 1: f('en').numberFormatter({ raw: '0' }) },
          {
            pattern: 'E, MMM d, y',
            timeSeparator: ':',
            days: { E: { 1: { sun: 'Sun', mon: 'Mon', tue: 'Tue', wed: 'Wed', thu: 'Thu', fri: 'Fri', sat: 'Sat' } } },
            months: {
              M: {
                3: {
                  1: 'Jan',
                  2: 'Feb',
                  3: 'Mar',
                  4: 'Apr',
                  5: 'May',
                  6: 'Jun',
                  7: 'Jul',
                  8: 'Aug',
                  9: 'Sep',
                  10: 'Oct',
                  11: 'Nov',
                  12: 'Dec',
                },
              },
            },
          },
        )),
        (f.a690550229 = y(
          { 1: f('en').numberFormatter({ raw: '0' }) },
          {
            pattern: 'MMMM d',
            timeSeparator: ':',
            months: {
              M: {
                4: {
                  1: 'January',
                  2: 'February',
                  3: 'March',
                  4: 'April',
                  5: 'May',
                  6: 'June',
                  7: 'July',
                  8: 'August',
                  9: 'September',
                  10: 'October',
                  11: 'November',
                  12: 'December',
                },
              },
            },
          },
        )),
        (f.b2093703356 = y(
          { 1: f('en').numberFormatter({ raw: '0' }), 2: f('en').numberFormatter({ raw: '00' }) },
          {
            pattern: 'MMM d, y, h:mm a',
            timeSeparator: ':',
            months: {
              M: {
                3: {
                  1: 'Jan',
                  2: 'Feb',
                  3: 'Mar',
                  4: 'Apr',
                  5: 'May',
                  6: 'Jun',
                  7: 'Jul',
                  8: 'Aug',
                  9: 'Sep',
                  10: 'Oct',
                  11: 'Nov',
                  12: 'Dec',
                },
              },
            },
            dayPeriods: { am: 'AM', pm: 'PM' },
          },
        )),
        (f.b683761904 = y(
          { 1: f('en').numberFormatter({ raw: '0' }) },
          {
            pattern: 'MMMM d, y',
            timeSeparator: ':',
            months: {
              M: {
                4: {
                  1: 'January',
                  2: 'February',
                  3: 'March',
                  4: 'April',
                  5: 'May',
                  6: 'June',
                  7: 'July',
                  8: 'August',
                  9: 'September',
                  10: 'October',
                  11: 'November',
                  12: 'December',
                },
              },
            },
          },
        )),
        (f.a596533135 = y(
          { 1: f('en').numberFormatter({ raw: '0' }), 2: f('en').numberFormatter({ raw: '00' }) },
          {
            pattern: 'MMM d, h:mm a',
            timeSeparator: ':',
            months: {
              M: {
                3: {
                  1: 'Jan',
                  2: 'Feb',
                  3: 'Mar',
                  4: 'Apr',
                  5: 'May',
                  6: 'Jun',
                  7: 'Jul',
                  8: 'Aug',
                  9: 'Sep',
                  10: 'Oct',
                  11: 'Nov',
                  12: 'Dec',
                },
              },
            },
            dayPeriods: { am: 'AM', pm: 'PM' },
          },
        )),
        (f.a2011541116 = y(
          { 1: f('en').numberFormatter({ raw: '0' }), 2: f('en').numberFormatter({ raw: '00' }) },
          { pattern: 'M/d/yy', timeSeparator: ':' },
        )),
        (f.b696469024 = y({ 1: f('en').numberFormatter({ raw: '0' }) }, { pattern: 'y', timeSeparator: ':' })),
        (f.b2072821078 = y(
          { 1: f('en').numberFormatter({ raw: '0' }), 2: f('en').numberFormatter({ raw: '00' }) },
          {
            pattern: "EEEE, MMMM d, y 'at' h:mm:ss a zzzz",
            timeSeparator: ':',
            days: {
              E: {
                4: {
                  sun: 'Sunday',
                  mon: 'Monday',
                  tue: 'Tuesday',
                  wed: 'Wednesday',
                  thu: 'Thursday',
                  fri: 'Friday',
                  sat: 'Saturday',
                },
              },
            },
            months: {
              M: {
                4: {
                  1: 'January',
                  2: 'February',
                  3: 'March',
                  4: 'April',
                  5: 'May',
                  6: 'June',
                  7: 'July',
                  8: 'August',
                  9: 'September',
                  10: 'October',
                  11: 'November',
                  12: 'December',
                },
              },
            },
            dayPeriods: { am: 'AM', pm: 'PM' },
            gmtFormat: 'GMT{0}',
            gmtZeroFormat: 'GMT',
            hourFormat: '+HH:mm;-HH:mm',
          },
        )),
        (f.a481468996 = y(
          { 1: f('en').numberFormatter({ raw: '0' }), 2: f('en').numberFormatter({ raw: '00' }) },
          {
            pattern: 'MMM d, y, h:mm:ss a',
            timeSeparator: ':',
            months: {
              M: {
                3: {
                  1: 'Jan',
                  2: 'Feb',
                  3: 'Mar',
                  4: 'Apr',
                  5: 'May',
                  6: 'Jun',
                  7: 'Jul',
                  8: 'Aug',
                  9: 'Sep',
                  10: 'Oct',
                  11: 'Nov',
                  12: 'Dec',
                },
              },
            },
            dayPeriods: { am: 'AM', pm: 'PM' },
          },
        )),
        (f.b1628081667 = y(
          { 1: f('en').numberFormatter({ raw: '0' }), 2: f('en').numberFormatter({ raw: '00' }) },
          { pattern: 'h:mm a', timeSeparator: ':', dayPeriods: { am: 'AM', pm: 'PM' } },
        )),
        (f.b716432657 = y(
          { 1: f('en').numberFormatter({ raw: '0' }), 2: f('en').numberFormatter({ raw: '00' }) },
          {
            pattern: 'E h:mm a',
            timeSeparator: ':',
            days: { E: { 1: { sun: 'Sun', mon: 'Mon', tue: 'Tue', wed: 'Wed', thu: 'Thu', fri: 'Fri', sat: 'Sat' } } },
            dayPeriods: { am: 'AM', pm: 'PM' },
          },
        )),
        (f.a64108448 = y(
          { 1: f('en').numberFormatter({ raw: '0' }) },
          {
            pattern: 'MMMM y',
            timeSeparator: ':',
            months: {
              M: {
                4: {
                  1: 'January',
                  2: 'February',
                  3: 'March',
                  4: 'April',
                  5: 'May',
                  6: 'June',
                  7: 'July',
                  8: 'August',
                  9: 'September',
                  10: 'October',
                  11: 'November',
                  12: 'December',
                },
              },
            },
          },
        )),
        (f.a2122364151 = y(
          { 1: f('en').numberFormatter({ raw: '0' }) },
          {
            pattern: 'MMM d, y',
            timeSeparator: ':',
            months: {
              M: {
                3: {
                  1: 'Jan',
                  2: 'Feb',
                  3: 'Mar',
                  4: 'Apr',
                  5: 'May',
                  6: 'Jun',
                  7: 'Jul',
                  8: 'Aug',
                  9: 'Sep',
                  10: 'Oct',
                  11: 'Nov',
                  12: 'Dec',
                },
              },
            },
          },
        )),
        (f.b965415715 = g(f('en').dateToPartsFormatter({ skeleton: 'hm' }))),
        (f.a1434444438 = g(f('en').dateToPartsFormatter({ skeleton: 'MMMEd' }))),
        (f.a878419275 = g(f('en').dateToPartsFormatter({ skeleton: 'MMMd' }))),
        (f.a816076018 = g(f('en').dateToPartsFormatter({ skeleton: 'yMMMd' }))),
        (f.a837317001 = g(f('en').dateToPartsFormatter({ skeleton: 'yMMdd' }))),
        (f.b498196529 = g(f('en').dateToPartsFormatter({ skeleton: 'yMMMEd' }))),
        (f.a1441832606 = g(f('en').dateToPartsFormatter({ skeleton: 'MMMMd' }))),
        (f.b1665844787 = g(f('en').dateToPartsFormatter({ skeleton: 'yMMMdhm' }))),
        (f.a218160295 = g(f('en').dateToPartsFormatter({ date: 'long' }))),
        (f.b1883516954 = g(f('en').dateToPartsFormatter({ skeleton: 'MMMdhm' }))),
        (f.b93641787 = g(f('en').dateToPartsFormatter({ date: 'short' }))),
        (f.a1493315369 = g(f('en').dateToPartsFormatter({ skeleton: 'y' }))),
        (f.a1830739137 = g(f('en').dateToPartsFormatter({ datetime: 'full' }))),
        (f.b1998581093 = g(f('en').dateToPartsFormatter({ datetime: 'medium' }))),
        (f.a561702726 = g(f('en').dateToPartsFormatter({ time: 'short' }))),
        (f.b867606024 = g(f('en').dateToPartsFormatter({ skeleton: 'Ehm' }))),
        (f.a815390825 = g(f('en').dateToPartsFormatter({ skeleton: 'yMMMM' }))),
        (f.a1286203598 = g(f('en').dateToPartsFormatter({ date: 'medium' }))),
        (f.b687161418 = w(f('en').numberFormatter({}), f('en').pluralGenerator({}), {
          'relativeTime-type-future': {
            'relativeTimePattern-count-one': 'in {0} day',
            'relativeTimePattern-count-other': 'in {0} days',
          },
          'relativeTime-type-past': {
            'relativeTimePattern-count-one': '{0} day ago',
            'relativeTimePattern-count-other': '{0} days ago',
          },
          'relative-type--1': 'yesterday',
          'relative-type-0': 'today',
          'relative-type-1': 'tomorrow',
        })),
        (f.a2110709659 = v(f('en').numberFormatter({}), f('en').pluralGenerator({}), {
          compoundUnitPattern: '{0} per {1}',
          unitProperties: {
            displayName: 'seconds',
            one: '{0} second',
            other: '{0} seconds',
            perUnitPattern: '{0} per second',
          },
        })),
        (f.a223746363 = v(f('en').numberFormatter({}), f('en').pluralGenerator({}), {
          compoundUnitPattern: '{0} per {1}',
          unitProperties: {
            displayName: 'minutes',
            one: '{0} minute',
            other: '{0} minutes',
            perUnitPattern: '{0} per minute',
          },
        })),
        (f.b2116965749 = v(f('en').numberFormatter({}), f('en').pluralGenerator({}), {
          compoundUnitPattern: '{0} per {1}',
          unitProperties: { displayName: 'hours', one: '{0} hour', other: '{0} hours', perUnitPattern: '{0} per hour' },
        })),
        (f.b1436183524 = v(f('en').numberFormatter({}), f('en').pluralGenerator({}), {
          compoundUnitPattern: '{0}/{1}',
          unitProperties: { displayName: 'sec', one: '{0}s', other: '{0}s', perUnitPattern: '{0}/s' },
        })),
        (f.b1554153647 = v(f('en').numberFormatter({}), f('en').pluralGenerator({}), {
          compoundUnitPattern: '{0}/{1}',
          unitProperties: { displayName: 'secs', one: '{0} sec', other: '{0} sec', perUnitPattern: '{0}/s' },
        })),
        (f.a1963255228 = v(f('en').numberFormatter({}), f('en').pluralGenerator({}), {
          compoundUnitPattern: '{0}/{1}',
          unitProperties: { displayName: 'min', one: '{0}m', other: '{0}m', perUnitPattern: '{0}/min' },
        })),
        (f.a79526321 = v(f('en').numberFormatter({}), f('en').pluralGenerator({}), {
          compoundUnitPattern: '{0}/{1}',
          unitProperties: { displayName: 'mins', one: '{0} min', other: '{0} min', perUnitPattern: '{0}/min' },
        })),
        (f.b1193188596 = v(f('en').numberFormatter({}), f('en').pluralGenerator({}), {
          compoundUnitPattern: '{0}/{1}',
          unitProperties: { displayName: 'hour', one: '{0}h', other: '{0}h', perUnitPattern: '{0}/h' },
        })),
        (f.a531894881 = v(f('en').numberFormatter({}), f('en').pluralGenerator({}), {
          compoundUnitPattern: '{0}/{1}',
          unitProperties: { displayName: 'hours', one: '{0} hr', other: '{0} hr', perUnitPattern: '{0}/h' },
        })),
        (f.b1132522088 = v(f('en').numberFormatter({}), f('en').pluralGenerator({}), {
          compoundUnitPattern: '{0}/{1}',
          unitProperties: { displayName: 'day', one: '{0}d', other: '{0}d', perUnitPattern: '{0}/d' },
        })),
        (f.b1844277225 = v(f('en').numberFormatter({}), f('en').pluralGenerator({}), {
          compoundUnitPattern: '{0} per {1}',
          unitProperties: { displayName: 'days', one: '{0} day', other: '{0} days', perUnitPattern: '{0} per day' },
        })),
        (f.b2134163460 = v(f('en').numberFormatter({}), f('en').pluralGenerator({}), {
          compoundUnitPattern: '{0}/{1}',
          unitProperties: { displayName: 'month', one: '{0}m', other: '{0}m', perUnitPattern: '{0}/m' },
        })),
        (f.a1064174459 = v(f('en').numberFormatter({}), f('en').pluralGenerator({}), {
          compoundUnitPattern: '{0} per {1}',
          unitProperties: {
            displayName: 'months',
            one: '{0} month',
            other: '{0} months',
            perUnitPattern: '{0} per month',
          },
        })),
        (f.a211373797 = v(f('en').numberFormatter({}), f('en').pluralGenerator({}), {
          compoundUnitPattern: '{0}/{1}',
          unitProperties: { displayName: 'yr', one: '{0}y', other: '{0}y', perUnitPattern: '{0}/y' },
        })),
        (f.b636176220 = v(f('en').numberFormatter({}), f('en').pluralGenerator({}), {
          compoundUnitPattern: '{0} per {1}',
          unitProperties: { displayName: 'years', one: '{0} year', other: '{0} years', perUnitPattern: '{0} per year' },
        })),
        (f.a1379198057 = v(
          f('en').numberFormatter({ minimumFractionDigits: 1, maximumFractionDigits: 1, round: 'truncate' }),
          f('en').pluralGenerator({}),
          {
            compoundUnitPattern: '{0}/{1}',
            unitProperties: { displayName: 'sec', one: '{0}s', other: '{0}s', perUnitPattern: '{0}/s' },
          },
        )),
        a('d58baa7f', f.a527220190),
        a('ia24dc8d', f.b468386326),
        a('iab73d4b', f.a694716112),
        a('i3b7a017', f.a2110709659),
        a('ie5d110f', f.a223746363),
        a('df5f11b3', f.b2116965749),
        a('c333da63', f.b687161418),
        a('d725a289', f.b965415715),
        a('h8054d91', f.a1434444438),
        a('ccaa970f', f.a878419275),
        a('g08cbabb', f.b1729690817),
        a('e8733ed9', f.b1436183524),
        a('i61fef37', f.b1554153647),
        a('be59d8c3', f.a1963255228),
        a('ba705e27', f.a79526321),
        a('i3d087db', f.b1193188596),
        a('j86b0d8d', f.a531894881),
        a('ga8d18c9', f.b1132522088),
        a('a91e7d49', f.b1844277225),
        a('id952a69', f.b2134163460),
        a('ga09ab65', f.a1064174459),
        a('c83b901d', f.a211373797),
        a('a55b9fed', f.b636176220),
        a('jade381b', f.a816076018),
        a('f668e929', f.b385502835),
        a('i2785009', f.b1982794438),
        a('c778d80b', f.b1653028677),
        a('e8d93005', f.a1259667653),
        a('d46781af', f.a1379198057),
        a('ba316f05', f.a258143208),
        a('c0bdd345', f.b810332058),
        a('e18e399b', f.a837317001),
        a('aa2aa1a1', f.b498196529),
        a('da44942d', f.a1441832606),
        a('bfbc051d', f.b1665844787),
        a('ba2e82a1', f.a218160295),
        a('fc209bb7', f.b1883516954),
        a('cf8abf59', f.b1158699306),
        a('a9f397f3', f.b93641787),
        a('d7d71245', f.a1493315369),
        a('g8d1b99b', f.a1830739137),
        a('d857e44d', f.b1259832358),
        a('cb87e3db', f.a886759321),
        a('a9d5ffd1', f.a2117218168),
        a('a0e8371d', f.a55324650),
        a('gcc50dc9', f.a1485592908),
        a('a6a43585', f.a53540712),
        a('a0cc8f2d', f.b1750690447),
        a('i31c32c5', f.b1149478276),
        a('i7dc69e9', f.b635342850),
        a('c14a6c03', f.a1453990527),
        a('jaa3d537', f.b1324226412),
        a('a824080b', f.a650590361),
        a('d9c0bedb', f.a191929299),
        a('bf8c0613', f.b2070368276),
        a('i8163625', f.b1440526954),
        a('adb53ba1', f.b411066810),
        a('iabf697d', f.a904090198),
        a('a1a0555b', f.a1131339468),
        a('f266f3d9', f.b759968436),
        a('a9a8652b', f.b1162560488),
        a('dbf40761', f.b1711866171),
        a('b0d993d9', f.b595923928),
        a('ac1308e1', f.a1406927350),
        a('a7889ab3', f.b915007111),
        a('c614f5cd', f.a1202955417),
        a('i55d57e3', f.b572646591),
        a('e4b6002b', f.b688947133),
        a('d28e983b', f.a2144744170),
        a('e8c9232d', f.b403844915),
        a('c8994ae1', f.a1857858014),
        a('f821c2a5', f.b461697863),
        a('j348b9c9', f.b980590457),
        a('i6f93b9b', f.b582160927),
        a('c6150bd5', f.b1814998358),
        a('i8921e09', f.a2078566178),
        a('ef239279', f.a904176341),
        a('hecdb149', f.b1587749088),
        a('fdd039b7', f.b1075992246),
        a('f30c2c37', f.b790890028),
        a('d9ea7bff', f.b1851952553),
        a('ea3df4b7', f.b849932268),
        a('jaac21bb', f.a1983164389),
        a('hb435ced', f.a407371792),
        a('ce699d81', f.a1379573634),
        a('bc56d3d7', f.b601189599),
        a('f8561913', f.a2118579746),
        a('g6485d53', f.a543381795),
        a('ff561cc1', f.a1316368872),
        a('b42011d3', f.a2001089912),
        a('a6660bcd', f.b1125434007),
        a('f9b80449', f.a2138289207),
        a('gdee4d5d', f.b438929029),
        a('h36f2103', f.a1191743286),
        a('a19ad037', f.a246386657),
        a('g713f699', f.a1820989962),
        a('ff2e39af', f.a99078380),
        a('be34316d', f.a1186391472),
        a('aef81b75', f.a1042651071),
        a('fcce70a5', f.a583990009),
        a('jc9d352f', f.b619028979),
        a('be1cb8c5', f.a96105150),
        a('j9371501', f.a1584226356),
        a('j7d4397d', f.b1223214380),
        a('d61441dd', f.a1036704611),
        a('e2a99e97', f.a377044846),
        a('f7ce19ab', f.a506513743),
        a('b2a0213f', f.b1585198218),
        a('d0a77c9b', f.b1998581093),
        a('b6ca7bcb', f.a561702726),
        a('h0e4cdf5', f.b867606024),
        a('g727ddcf', f.a815390825),
        a('ja781451', f.a71710728),
        a('cfa1a7b9', f.a605057387),
        a('h3629783', f.a1286203598),
        a('eefcd267', f.a50325677),
        a('fa8afc43', f.b1911307442)
    },
  },
])

//# sourceMappingURL=WIPED
