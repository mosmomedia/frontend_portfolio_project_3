import tw, { styled } from 'twin.macro';

export const GroupLabelStyles = styled.div`
	${tw`flex justify-between items-center py-1`}
`;

export const GroupOptionLabelStyles = styled.span`
	${tw`text-[15px] font-normal text-indigo-500`}
`;

export const GroupBadgeStyles = styled.div`
	background: '#EBECF0';
	border-radius: '2em';

	color: '#172B4D';
	display: 'inline-block';
	font-size: 12;
	font-weight: 'normal';
	line-height: '1';
	min-width: 1;
	padding: '0.16666666666667em 0.5em';
	text-align: 'center';
`;
