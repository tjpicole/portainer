import { confirm } from '@@/modals/confirm';

import { GitFormModel } from './types';

export function getAuthentication(
  model: Pick<
    GitFormModel,
    | 'RepositoryAuthentication'
    | 'RepositoryPassword'
    | 'RepositoryUsername'
    | 'RepositoryGitCredentialID'
  >
) {
  if (!model.RepositoryAuthentication) {
    return undefined;
  }

  if (model.RepositoryGitCredentialID) {
    return { gitCredentialId: model.RepositoryGitCredentialID };
  }

  return {
    username: model.RepositoryUsername,
    password: model.RepositoryPassword,
  };
}

export function confirmEnableTLSVerify() {
  return confirm({
    title: 'Enable TLS Verification?',
    message:
      'Enabling the verification of TLS certificates without ensuring the correct configuration of your Certificate Authority (CA) for self-signed certificates can result in deployment failures.',
  });
}

export function cleanGitRepoUrl(url: string) {
  return url
    .trim() // remove leading and trailing whitespace
    .replace(/\/$/, '') // if there's a trailing slash, remove it
    .replace(/\.git$/, ''); // if there's a trailing .git extension, remove it
}
