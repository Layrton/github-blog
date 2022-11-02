import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../lib/axios';
import { IPost } from '../Home/Posts';
import { Content } from './Description';
import { PostDetailsContainer } from './styles';
import { TitleCard } from './TitleCard';

const username = 'layrton';
const repoName = 'github-blog';

export function PostDetails() {
  const [postData, setPostData] = useState({} as IPost);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  const getPostDetails = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await api.get(
        `/repos/${username}/${repoName}/issues/${id}`
      );
      setPostData(response.data);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  }, [id]);

  useEffect(() => {
    getPostDetails();
  }, [getPostDetails]);

  return (
    <PostDetailsContainer>
      <TitleCard isLoading={isLoading} postData={postData} />
      {isLoading ? <></> : <Content content={postData.body} />}
    </PostDetailsContainer>
  );
}
