# Watchers for SNS Maskbook supported

## Why

It's a solution for https://github.com/DimensionDev/Maskbook/issues/1180

## How a watcher works?

Twitter, for example, is a `SPA`, we take a snapshot of the page and JS
resources of it everyday, and store the snapshots in this git repo. We put the
snapshot creating in a scheduling GtiHub Action, once twitter get updated, we
can get change notification of the changing from an auto-created pull-request
by the action.

Twitter ships minified code, to make differences of changes more obvious, we
format them with prettier during the snapshot creating.
